import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const blogPosts = [
    {
        id: 1,
        title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
        excerpt: "Discover the best seasonal produce and how to make the most of fresh ingredients.",
        date: "May 23, 2024",
        image: "/farmers-market-produce.png",
        category: "Seasonal Guide",
    },
    {
        id: 2,
        title: "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads",
        excerpt: "Learn the art of creating perfect salads with fresh ingredients and creative combinations.",
        date: "May 18, 2024",
        image: "/colorful-fresh-salad-vegetables.jpg",
        category: "Nutrition Tips",
    },
    {
        id: 3,
        title: "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
        excerpt: "Efficient meal prep strategies using fresh produce to maintain a healthy lifestyle.",
        date: "May 15, 2024",
        image: "/meal-prep-containers-fresh-vegetables.jpg",
        category: "Healthy Living",
    },
]

export function BlogSection() {
    return (
        <section className="py-16 bg-gray-50 relative">
            {/* Decorative leaves */}
            <div className="absolute top-10 right-10 w-16 h-16 opacity-20">
                <div className="w-full h-full bg-green-400 rounded-full transform rotate-45"></div>
            </div>
            <div className="absolute bottom-20 left-16 w-12 h-12 opacity-20">
                <div className="w-full h-full bg-green-300 rounded-full transform -rotate-12"></div>
            </div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <p className="text-green-600 font-medium mb-2">Our Blog</p>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Fresh Harvest Blog</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy
                        eating, and culinary inspiration.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Card
                            key={post.id}
                            className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={post.image || "/placeholder.svg"}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <CardContent className="p-6">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-green-600 font-medium">{post.category}</span>
                                        <span className="text-gray-500">{post.date}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-green-600 transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>

                                    <Button
                                        variant="ghost"
                                        className="text-orange-500 hover:text-orange-600 p-0 h-auto font-semibold group/btn"
                                    >
                                        Read More
                                        <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
