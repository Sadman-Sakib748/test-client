"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useGetAllProductsQuery } from "@/redux/services/product/productApi";

const categories = [
  { id: "all", name: "All" },
  { id: "68d81b988b83c3484936611e", name: "fuite" },
  { id: "68d81b988b83c3484936611e", name: "vegetable" },
  { id: "68d81b988b83c3484936611e", name: "salad" },
];

export function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { data, error, isLoading } = useGetAllProductsQuery();
  const products = data?.results || [];
  console.log(data)

  useEffect(() => {
    if (products.length > 0) console.log("Fetched Products:", products);
  }, [products]);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  if (isLoading) return <p className="text-center py-10">Loading products...</p>;
  if (error) return <p className="text-center py-10 text-red-500">Failed to load products</p>;

  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <p className="text-green-600 font-medium mb-2">Our Products</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Fresh Products
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="flex space-x-2 bg-gray-100 rounded-lg p-1">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "ghost"}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-md transition-colors whitespace-nowrap ${
                  selectedCategory === category.id
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map((product) => {
            const imgSrc =
              product.images && product.images[0]
                ? product.images[0].startsWith("/") || product.images[0].startsWith("http")
                  ? product.images[0]
                  : `/images/${product.images[0]}`
                : "/images/placeholder.svg";

            return (
              <Link
                href={`/product/${product._id}`}
                key={product._id}
                className="group bg-white border border-gray-100 shadow-sm rounded-lg hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col items-center"
              >
                <div className="relative w-full sm:w-[220px] md:w-[258px] h-[180px] sm:h-[200px] md:h-[208px] mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={imgSrc}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg text-center">{product.name}</h3>
                <p className="text-gray-600 mb-3 text-center">
                  <span className="text-sm">$</span>
                  <span className="text-lg font-bold">{product.price}</span>
                  <span className="text-sm"> /kg</span>
                </p>
                <Button className="w-full sm:w-[220px] md:w-[258px] bg-orange-500 hover:bg-orange-600 text-white rounded-lg">
                  Add to cart
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
