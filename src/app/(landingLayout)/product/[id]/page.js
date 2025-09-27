"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Star, Minus, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import toast, { Toaster } from "react-hot-toast";

import {
    useGetSingleProductQuery,
    useGetAllProductsQuery,
    useAddProductMutation
} from "@/redux/services/product/productApi";

export default function ProductDetailsPage({ params }) {
    const { data: product, isLoading, error } = useGetSingleProductQuery(params.id, { skip: !params.id });
    const { data: allProductsData, isLoading: loadingAll } = useGetAllProductsQuery();
    const [addProduct] = useAddProductMutation();

    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("description");
    const [isFavorite, setIsFavorite] = useState(false);

    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

    if (isLoading) return <p className="text-center mt-10">Loading...</p>;
    if (error) return <p className="text-center mt-10 text-red-500">Failed to load product.</p>;
    if (!product) return <p className="text-center mt-10">No product found.</p>;

    const imgSrc =
        product.images && product.images[0]
            ? product.images[0].startsWith("http") || product.images[0].startsWith("/")
                ? product.images[0]
                : `/images/${product.images[0]}`
            : "/images/placeholder.svg";

    const allProducts = Array.isArray(allProductsData?.results) ? allProductsData.results : [];

    // Handle Add Product with duplicate check
    const handleAddProduct = async () => {
        try {
            // Check if product already exists by name
            const exists = allProducts.some(p => p.name === product.name);
            if (exists) {
                toast.error("Product with this name already exists!");
                return;
            }

            const payload = {
                name: product.name,
                price: product.price,
                images: product.images,
                description: product.description,
                category: product.category,
                stock: product.stock,
                status: product.status,
            };

            await addProduct(payload).unwrap();
            toast.success("Product posted successfully!");
        } catch (err) {
            console.error(err);
            toast.error("Failed to post product.");
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Toaster position="top-right" reverseOrder={false} />

            <div className="container mx-auto px-4 py-8">
                {/* Product Details Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div className="flex justify-center">
                        <Image src={imgSrc} alt={product.name || "Product Image"} width={400} height={400} className="object-contain rounded-lg" />
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold text-foreground">{product.name}</h1>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating || 0) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                            ))}
                            <span className="text-sm text-muted-foreground ml-2">{product.rating || 0} ({product.reviews || 0} reviews)</span>
                        </div>

                        <div className="text-2xl font-bold text-orange-500 mb-4">${product.price}/kg</div>
                        <p className="text-muted-foreground leading-relaxed">{product.description}</p>

                        {/* Quantity */}
                        <div className="flex items-center gap-4">
                            <Button variant="ghost" size="sm" onClick={decrementQuantity}><Minus className="w-4 h-4" /></Button>
                            <span className="px-4 py-1 text-sm font-medium">{quantity}</span>
                            <Button variant="ghost" size="sm" onClick={incrementQuantity}><Plus className="w-4 h-4" /></Button>
                            <span className="text-sm text-muted-foreground">kg</span>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3 mt-4">
                            <Button variant="outline" size="sm" onClick={() => setIsFavorite(!isFavorite)}>
                                <Heart className={`w-4 h-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} /> Save as favorite
                            </Button>
                            <Button className="bg-green-500 hover:bg-green-600 text-white px-8" onClick={handleAddProduct}>
                                Add Product
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="mb-12">
                    <div className="flex border-b border-border mb-6">
                        <button onClick={() => setActiveTab("description")} className={`px-6 py-3 border-b-2 ${activeTab === "description" ? "border-orange-500 text-orange-500 bg-orange-50" : "border-transparent text-muted-foreground hover:text-foreground"}`}>Description</button>
                        <button onClick={() => setActiveTab("reviews")} className={`px-6 py-3 border-b-2 ${activeTab === "reviews" ? "border-orange-500 text-orange-500 bg-orange-50" : "border-transparent text-muted-foreground hover:text-foreground"}`}>Reviews</button>
                    </div>

                    {activeTab === "description" && <p className="text-muted-foreground">{product.description}</p>}
                    {activeTab === "reviews" && <p className="text-muted-foreground">Customer reviews will be displayed here.</p>}
                </div>

                {/* All Products Grid */}
                <div className="mb-12">
                    <h2 className="text-xl font-semibold mb-6">Other Products</h2>
                    {loadingAll ? (
                        <p>Loading all products...</p>
                    ) : allProducts.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            {allProducts.slice(0, 4).map((p) => {
                                const pImg = p.images && p.images[0] ? (p.images[0].startsWith("http") || p.images[0].startsWith("/") ? p.images[0] : `/images/${p.images[0]}`) : "/images/placeholder.svg";
                                return (
                                    <Card key={p._id} className="hover:shadow-md transition-shadow">
                                        <CardContent className="p-4 text-center">
                                            <Image src={pImg} alt={p.name} width={120} height={120} className="mx-auto mb-2 object-contain" />
                                            <h3 className="font-medium text-foreground mb-1">{p.name}</h3>
                                            <p className="text-sm text-muted-foreground mb-2">${p.price}/kg</p>
                                            <Button size="sm" variant="outline" className="w-full text-xs">Add to cart</Button>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    ) : (
                        <p>No products found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
