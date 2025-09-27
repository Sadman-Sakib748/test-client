"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "./CountdownTimer"
import backgourn from '../../assets/images/backgourn.jpg'
import food from '../../assets/images/frood.png'

export function SeasonalOffer() {
    // Target date = 3 days later
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 3)
    targetDate.setHours(23, 59, 59, 999)

    return (
        <section className="relative rounded-2xl mt-5 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={backgourn}
                    alt="Seasonal background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content */}
            <div className="relative grid md:ml-8 md:grid-cols-2 gap-8 items-center p-8 md:p-12 text-white">
                {/* Left Section */}
                <div className="space-y-6">
                    <div className="inline-block">
                        <span className="bg-[#749B3F1A] text-green-600  px-3 py-1 rounded-full text-sm font-medium">
                            Special Offer
                        </span>
                    </div>

                    <div className="space-y-4">
                        <h1 className="font-rubik font-medium  md:text-[80px] text-[48px] leading-[100%] tracking-[-0.02em] text-black">
                            Seasonal Fruit Bundle
                        </h1>

                        <p className="text-xl text-black md:text-2xl">
                            Discount up to <span className="text-yellow-400 font-bold">80% OFF</span>
                        </p>
                    </div>

                    <CountdownTimer targetDate={targetDate} />

                    <Button
                        size="lg"
                        className="bg-green-600 hover:bg-green-700 text-black font-semibold px-8 py-3 rounded-full"
                    >
                        CODE: FRESH28
                    </Button>
                </div>

                {/* Right Section - Fruit Image */}
                <div className="relative mr-43 hidden  flex justify-end">
                    <Image
                        src={food}
                        alt="Seasonal fruit bundle"
                        width={427}
                        height={381}
                        className="object-cover mt-15 rounded-xl shadow-lg md:w-[427px] md:h-[281px]"
                    />
                </div>
            </div>
        </section>
    )
}
