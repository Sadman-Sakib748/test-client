"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, Minus, Plus } from "lucide-react";
// import { useGetAllProductsQuery } from "@/redux/services/product/productApi";


export default function ProductCard({ product }) {
    // const { data: products, error, isLoading } = useGetAllProductsQuery();
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("description");
    const [isFavorite, setIsFavorite] = useState(false);

    const relatedProducts = [
        { name: "Kiwi", price: 5.1, image: "/fresh-kiwi-fruit.jpg" },
        { name: "Orange", price: 4.2, image: "/images/orange.png" },
        { name: "Guava", price: 8.2, image: "/fresh-guava-fruit.jpg" },
        { name: "Eggplant", price: 3.2, image: "/fresh-eggplant-vegetable.jpg" },
    ];

    const incrementQuantity = () => setQuantity((prev) => prev + 1);
    const decrementQuantity = () =>
        setQuantity((prev) => Math.max(1, prev - 1));

   


    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="border-b border-border">
                <div className="container mx-auto px-4 py-3">
                    <nav className="text-sm text-muted-foreground">Fruits</nav>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Product Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Product Image */}
                    <div className="flex justify-center">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full max-w-sm h-auto object-contain"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-foreground mb-2">
                                {product.name}
                            </h1>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < Math.floor(product.rating)
                                                ? "fill-yellow-400 text-yellow-400"
                                                : "text-gray-300"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-sm text-muted-foreground">
                                    {product.rating} ({product.reviews} reviews)
                                </span>
                            </div>
                            <div className="text-2xl font-bold text-orange-500 mb-4">
                                ${product.price}/kg
                            </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                            {product.description}
                        </p>

                        {/* Quantity and Actions */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-medium">Quantity</span>
                                <div className="flex items-center border border-border rounded-md">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={decrementQuantity}
                                        className="h-8 w-8 p-0"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </Button>
                                    <span className="px-4 py-1 text-sm font-medium min-w-[3rem] text-center">
                                        {quantity}
                                    </span>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={incrementQuantity}
                                        className="h-8 w-8 p-0"
                                    >
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
                                    <Heart
                                        className={`w-4 h-4 ${isFavorite ? "fill-red-500 text-red-500" : ""
                                            }`}
                                    />
                                    Save as favorite
                                </Button>
                                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                                    Add to cart
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs Section */}
                <div className="mb-12">
                    <div className="flex border-b border-border mb-6">
                        <button
                            onClick={() => setActiveTab("description")}
                            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === "description"
                                ? "border-orange-500 text-orange-500 bg-orange-50"
                                : "border-transparent text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            Description
                        </button>
                        <button
                            onClick={() => setActiveTab("reviews")}
                            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === "reviews"
                                ? "border-orange-500 text-orange-500 bg-orange-50"
                                : "border-transparent text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            Reviews
                        </button>
                    </div>

                    <div className="prose max-w-none">
                        {activeTab === "description" && (
                            <div className="space-y-4 text-muted-foreground">
                                <p>{product.description}</p>
                            </div>
                        )}
                        {activeTab === "reviews" && (
                            <div className="text-muted-foreground">
                                <p>Customer reviews will be displayed here.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Related Products */}
                <div className="border-2 border-blue-200 rounded-lg p-6">
                    <div className="text-center mb-6">
                        <Badge variant="secondary" className="mb-2 text-blue-600 bg-blue-50">
                            Our Products
                        </Badge>
                        <h2 className="text-xl font-semibold text-foreground">
                            Related products
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {relatedProducts.map((item, index) => (
                            <Card
                                key={index}
                                className="text-center hover:shadow-md transition-shadow"
                            >
                                <CardContent className="p-4">
                                    <img
                                        src={item.image || "/placeholder.svg"}
                                        alt={item.name}
                                        className="w-16 h-16 mx-auto mb-3 object-contain"
                                    />
                                    <h3 className="font-medium text-foreground mb-1">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-3">
                                        ${item.price}/kg
                                    </p>
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="w-full text-xs bg-transparent"
                                    >
                                        Add to cart
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
