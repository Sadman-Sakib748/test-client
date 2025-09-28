"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useAddProductMutation, useGetAllProductsQuery } from "@/redux/services/product/productApi";
import { useGetAllCategoriesQuery } from "@/redux/services/category/categoryApi";


export function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Fetch categories
  const { data: categoriesData, isLoading: loadingCategories } = useGetAllCategoriesQuery();
  const categories = [
    { _id: "all", name: "All" },
    ...(categoriesData?.results || []),
  ];

  // Fetch products
  const { data: productsData, isLoading: loadingProducts, error } = useGetAllProductsQuery();
  const products = productsData?.results || [];

  // Add product mutation
  const [addProduct, { isLoading: adding }] = useAddProductMutation();

  if (loadingCategories || loadingProducts) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">Failed to load products</p>;

  // Filter products
  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(p =>
        p.category?._id === selectedCategory || p.category === selectedCategory
      );

  // Handle Add to Cart
  const handleAddToCart = async (product) => {
    try {
      await addProduct({
        productId: product._id,
        name: product.name,
        price: product.price,
        image: product.images?.[0] || "/images/placeholder.svg",
        quantity: 1,
      }).unwrap();
      alert(`${product.name} added to cart successfully!`);
    } catch (err) {
      console.error("Failed to add product:", err);
      alert("Failed to add product to cart.");
    }
  };

  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-green-600 font-medium mb-2">Our Products</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Fresh Products
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="flex space-x-2 bg-gray-100 rounded-lg p-1">
            {categories.map(({ _id, name }) => (
              <Button
                key={_id}
                variant={selectedCategory === _id ? "default" : "ghost"}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-md transition-colors whitespace-nowrap ${
                  selectedCategory === _id
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white"
                }`}
                onClick={() => setSelectedCategory(_id)}
              >
                {name}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map(({ _id, name, price, images }) => (
            <div
              key={_id}
              className="group bg-white border border-gray-100 shadow-sm rounded-lg hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col items-center"
            >
              <Link href={`/product/${_id}`} className="w-full">
                <div className="relative w-full sm:w-[220px] md:w-[258px] h-[180px] sm:h-[200px] md:h-[208px] mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={images?.[0] || "/images/placeholder.svg"}
                    alt={name}
                    width={258}
                    height={208}
                    className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg text-center">{name}</h3>
                <p className="text-gray-600 mb-3 text-center">
                  <span className="text-sm">$</span>
                  <span className="text-lg font-bold">{price}</span>
                  <span className="text-sm"> /kg</span>
                </p>
              </Link>

              {/* Add to Cart Button */}
              <Button
                className="w-full sm:w-[220px] md:w-[258px] bg-orange-500 hover:bg-orange-600 text-white rounded-lg"
                onClick={() => handleAddToCart({ _id, name, price, images })}
                disabled={adding}
              >
                {adding ? "Adding..." : "Add to cart"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
