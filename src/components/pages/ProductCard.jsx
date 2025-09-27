"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Star, Minus, Plus } from "lucide-react";

export default function ProductCard({ product, categories = [] }) {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isFavorite, setIsFavorite] = useState(false);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  if (!product) return <p className="text-center py-10">Product not found</p>;

  // Safe image
  const imgSrc =
    product.images && product.images.length > 0 && product.images[0] !== "Test"
      ? product.images[0].startsWith("http")
        ? product.images[0]
        : `/images/${product.images[0]}`
      : "/images/placeholder.png";

  // Category name
  const categoryName = categories.find((c) => c._id === product.category)?.name || "Uncategorized";

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="flex justify-center">
            <Image
              src={imgSrc}
              alt={product.name || "Product"}
              width={400}
              height={400}
              style={{ width: "100%", height: "auto" }}
              className="object-contain rounded-lg"
              onError={(e) => (e.currentTarget.src = "/images/placeholder.png")}
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
            <p className="text-sm text-muted-foreground">Category: {categoryName}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(product.rating || 0) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                />
              ))}
              <span className="text-sm text-muted-foreground ml-2">
                {product.rating || 0} ({product.reviews || 0} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="text-2xl font-bold text-orange-500 mb-4">${product.price}/kg</div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Quantity & Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Quantity</span>
                <div className="flex items-center border border-border rounded-md">
                  <Button variant="ghost" size="sm" onClick={decrementQuantity} className="h-8 w-8 p-0">
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-4 py-1 text-sm font-medium min-w-[3rem] text-center">{quantity}</span>
                  <Button variant="ghost" size="sm" onClick={incrementQuantity} className="h-8 w-8 p-0">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <span className="text-sm text-muted-foreground">kg</span>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="flex items-center gap-2"
                >
                  <Heart className={`w-4 h-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                  Save as favorite
                </Button>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-12">
          <div className="flex border-b border-border mb-6">
            <button
              onClick={() => setActiveTab("description")}
              className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "description" ? "border-orange-500 text-orange-500 bg-orange-50" : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "reviews" ? "border-orange-500 text-orange-500 bg-orange-50" : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Reviews
            </button>
          </div>

          {activeTab === "description" && <p className="text-muted-foreground">{product.description}</p>}
          {activeTab === "reviews" && <p className="text-muted-foreground">Customer reviews will be displayed here.</p>}
        </div>
      </div>
    </div>
  );
}
