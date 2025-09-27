"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import farmer from '../../assets/images/benner-1.png'
import Image from "next/image"

const testimonials = [
    {
        id: 1,
        name: "Jane Doe",
        role: "Professional Chef",
        content:
            "I absolutely love Fresh Harvest! The quality of their produce is outstanding, always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time, and the variety is incredible. As a professional chef, I rely on the freshest ingredients, and Fresh Harvest never disappoints. Highly recommended!",
        avatar: farmer,
    },
    {
        id: 2,
        name: "John Smith",
        role: "Home Cook",
        content:
            "Fresh Harvest has transformed my cooking experience. The produce is always top-quality and arrives perfectly fresh. The variety of seasonal fruits and vegetables keeps my meals exciting and nutritious.",
        avatar: "/placeholder.svg?key=avatar2",
    },
    {
        id: 3,
        name: "Sarah Wilson",
        role: "Nutritionist",
        content:
            "As a nutritionist, I recommend Fresh Harvest to all my clients. Their commitment to quality and freshness is unmatched, and the convenience makes healthy eating accessible to everyone.",
        avatar: "/placeholder.svg?key=avatar3",
    },
]

export function TestimonialsSection() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section className="py-16 bg-white relative">

            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <p className="text-green-600 font-medium mb-2">Testimonial</p>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Dont just take our word for it  heres what some of our customers have to say about their experience with Fresh Harvest:
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Card className="border-none shadow-none">
                        <CardContent className="p-8 md:p-12">
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                {/* Avatar */}
                                <div className="flex-shrink-0">
                                    <div className="w-[202px]  h-[280px]  md:w-[280px] md:h-[380px] rounded-[50%] overflow-hidden bg-gray-200 relative">
                                        <Image
                                            src={farmer}
                                            alt={testimonials[currentTestimonial].name}
                                            className="w-full h-full object-cover"
                                            width={128} 
                                            height={128}
                                            priority
                                        />

                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 text-center md:text-left">
                                    <div className="mb-6">
                                        <Quote className="w-8 h-8 text-orange-500 mx-auto md:mx-0 mb-4" />
                                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                            {testimonials[currentTestimonial].content}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</h4>
                                        <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation */}
                            <div className="flex items-center justify-center mt-8 space-x-4">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={prevTestimonial}
                                    className="rounded-full w-10 h-10 p-0 bg-transparent"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </Button>

                                {/* Dots */}
                                <div className="flex space-x-2">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentTestimonial(index)}
                                            className={`w-2 h-2 rounded-full transition-colors ${index === currentTestimonial ? "bg-green-600" : "bg-gray-300"
                                                }`}
                                        />
                                    ))}
                                </div>

                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={nextTestimonial}
                                    className="rounded-full w-10 h-10 p-0 bg-transparent"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

    )
}
