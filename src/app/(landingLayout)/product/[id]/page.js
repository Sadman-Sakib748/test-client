"use client";

import ProductCard from "@/components/pages/shared/ProductCard";
import { useParams } from "next/navigation";

// demo data
const mockProducts = [
    {
        id: "1",
        name: "Coconut",
        price: 6.3,
        image: "/coconut-whole-and-halved-showing-white-flesh.jpg",
        rating: 4.5,
        reviews: 120,
        description: `Fresh and high-quality coconuts in good condition. Coconut is a fruit with various nutrients,
    especially potassium, manganese and many others. From coconut to coconut water, it is useful for health and beauty.`,
    },
    {
        id: "2",
        name: "Orange",
        price: 4.2,
        image: "/images/orange.png",
        rating: 4.7,
        reviews: 95,
        description: `Juicy and fresh oranges, perfect for juices and desserts.`,
    },
];

export default function ProductDetailsPage() {
    const params = useParams();
    const product = mockProducts.find((p) => p.id === params.id);

    if (!product) return <p className="p-8 text-red-500">Product not found</p>;

    return (
        <div className="p-8">
            <ProductCard product={product} />
        </div>
    );
}
