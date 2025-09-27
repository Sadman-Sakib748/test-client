"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import heroImage from '../../../public/benner.png'
import bgImage from '../../../public/bg.png'
import tree from '../../../public/tree.png'
import dinner from '../../../public/dinner.png'

export function HeroSection() {
    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 18,
        minutes: 54,
        seconds: 21,
    })

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
                if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
                return prev
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <section className="relative w-full bg-gradient-to-br from-gray-50 to-green-50 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-10 left-10 w-16 h-16 md:w-20 md:h-20 z-10">
                <Image
                    src={tree}
                    alt="Tree"
                    width={128}
                    height={128}
                    className="object-contain"
                />
            </div>

            {/* Floating Background Image - Behind everything */}
            <div className="absolute top-0 right-0 w-full h-full md:w-[350px] md:h-[835px] z-0 opacity-30">
                <Image
                    src={bgImage}
                    alt="Background"
                    fill
                    className="object-cover w-full h-full"
                    priority
                />
            </div>

            <div className="relative container mx-auto px-4 py-12 lg:py-20 z-10">
                <div className="flex flex-col md:flex-row md:items-center md:gap-12">
                    {/* Left Content */}
                    <div className="flex-1 space-y-6 md:space-y-8 order-2 md:order-1">
                        <p className="text-green-600 font-medium text-sm md:text-base">Welcome to Fresh Harvest</p>
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Fresh Fruits and Vegetables
                        </h1>
                        <p className="text-sm md:text-base text-gray-600 max-w-md">
                            At Fresh Harvests, we are passionate about providing you with the finest and most nutritious fresh fruits and vegetables.
                        </p>

                        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-2 md:py-3 text-sm md:text-lg rounded-lg">
                            Shop Now
                        </Button>

                        {/* Countdown Timer Card */}
                        <div className="flex justify-center md:justify-start mt-4 md:mt-7">
                            <div className="w-full max-w-[400px] h-[150px] bg-white rounded-lg shadow-lg overflow-hidden flex p-3 md:p-4">
                                {/* Left Content */}
                                <div className="flex flex-col justify-center w-1/2 pr-2 md:pr-4">
                                    <p className="text-lg md:text-xl font-bold mb-1">Special Offer</p>
                                    <p className="text-xl md:text-2xl font-bold mb-1">Fresh Salad</p>
                                    <p className="text-sm md:text-lg mb-2">Up to 70% off</p>
                                    <button className="bg-green-500 text-white py-1.5 px-3 md:py-2 md:px-4 rounded-full text-xs md:text-sm font-bold">
                                        CODE: FRESH25
                                    </button>
                                </div>

                                {/* Right Image */}
                                <div className="w-1/2 h-full relative pl-2 md:pl-4">
                                    <Image
                                        src={dinner}
                                        alt="Fresh Salad"
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Hero Image */}
                    <div className="flex-1 relative order-1 md:order-2 mb-6 md:mb-0">
                        <Image
                            src={heroImage}
                            alt="Fresh fruits and vegetables"
                            width={600}
                            height={600}
                            className="w-full h-auto object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
