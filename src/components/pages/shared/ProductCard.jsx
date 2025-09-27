"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Star, Minus, Plus } from "lucide-react";
import { useGetSingleProductQuery } from "@/redux/services/product/productApi";

export default function ProductDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: product, isLoading, error } = useGetSingleProductQuery(id, { skip: !router.isReady || !id });

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isFavorite, setIsFavorite] = useState(false);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  if (!router.isReady) return <p className="text-center py-10">Loading...</p>;
  if (isLoading) return <p className="text-center py-10">Loading product...</p>;
  if (error) return <p className="text-center py-10 text-red-500">Failed to load product</p>;
  if (!product) return <p className="text-center py-10">Product not found</p>;

  const imgSrc =
    product.images && product.images[0]
      ? product.images[0].startsWith("http") || product.images[0].startsWith("/")
        ? product.images[0]
        : `/images/${product.images[0]}`
      : "/images/placeholder.svg";

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="flex justify-center">
            <Image src={imgSrc} alt={product.name} width={400} height={400} className="object-contain rounded-lg" />
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-foreground">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating || 0) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
              ))}
              <span className="text-sm text-muted-foreground ml-2">
                {product.rating || 0} ({product.reviews || 0} reviews)
              </span>
            </div>

            <div className="text-2xl font-bold text-orange-500 mb-4">${product.price}/kg</div>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={decrementQuantity}><Minus className="w-4 h-4" /></Button>
              <span className="px-4 py-1 text-sm font-medium">{quantity}</span>
              <Button variant="ghost" size="sm" onClick={incrementQuantity}><Plus className="w-4 h-4" /></Button>
              <span className="text-sm text-muted-foreground">kg</span>
            </div>

            <div className="flex gap-3 mt-4">
              <Button variant="outline" size="sm" onClick={() => setIsFavorite(!isFavorite)}>
                <Heart className={`w-4 h-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                Save as favorite
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">Add to cart</Button>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex border-b border-border mb-6">
            <button onClick={() => setActiveTab("description")} className={`px-6 py-3 border-b-2 ${activeTab === "description" ? "border-orange-500 text-orange-500 bg-orange-50" : "border-transparent text-muted-foreground hover:text-foreground"}`}>Description</button>
            <button onClick={() => setActiveTab("reviews")} className={`px-6 py-3 border-b-2 ${activeTab === "reviews" ? "border-orange-500 text-orange-500 bg-orange-50" : "border-transparent text-muted-foreground hover:text-foreground"}`}>Reviews</button>
          </div>

          {activeTab === "description" && <p className="text-muted-foreground">{product.description}</p>}
          {activeTab === "reviews" && <p className="text-muted-foreground">Customer reviews will be displayed here.</p>}
        </div>
      </div>
    </div>
  );
}
