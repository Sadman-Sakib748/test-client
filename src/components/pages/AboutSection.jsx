import Image from "next/image"
import { Button } from "@/components/ui/button"
import banner from "../../assets/images/benner-1.png"
import dinner from "../../assets/images/dinner.png"
import tree from "../../assets/images/tree.png"

export function AboutSection() {
    return (
        <section className="relative  ">
            {/* Decorative shapes */}

            <div className="container mx-auto px-4">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left side image section */}
                    <div className="relative mx-auto md:w-[666px] md:-mt-33 md:ml-8">


                        {/* Main farmer image */}
                        <Image
                            src={banner}
                            alt="Fresh Harvest farmer with produce"
                            width={686}
                            height={657}
                            className=" md:rounded-full lg:h-[657px] lg:w-[686px] object-cover"
                            priority
                        />

                        {/* Floating product card */}
                        <div
                            className="absolute right-[8%] top-[70%] 
                            flex md:h-[192px] md:w-[150px] flex-col items-center gap-2 
                            rounded-2xl bg-white md:p-3 shadow-xl"
                        >
                            <div className="md:h-[90px] w-[82px] h-[85px] md:w-full overflow-hidden rounded-xl">
                                <Image
                                    src={dinner}
                                    alt="Mushroom / Greens"
                                    width={150}
                                    height={96}
                                    className="md:h-full md:w-full  object-cover"
                                />
                            </div>
                            <div className="w-full text-center">
                                <p className="text-xs text-gray-500">Mushroom</p>
                                <p className="text-[10px] text-gray-400">0.5 kg</p>
                                <div className="mt-1 text-[10px] font-medium text-gray-700">
                                    Add to cart
                                </div>
                            </div>
                        </div>

                        {/* Fresh Harvests badge */}
                        <div className="absolute md:bottom-55 bottom-16  md:left-70 left-40 flex items-center gap-4 rounded-xl bg-white md:px-2 px-2  md:py-2 ">
                            {/* Icon box */}
                            <div className="flex md:h-6 h-2  md:w-12 w-6 items-center justify-center rounded-2xl bg-green-600">
                            </div>
                            {/* Text */}
                            <div>
                                <h4 className="font-bold text-gray-900 md:text-lg">Fresh Harvests</h4>
                            </div>
                        </div>
                        {/* Tiny decorative leaf */}
                        <Image
                            src={tree}
                            alt="Leaf"
                            width={24}
                            height={24}
                            className="absolute md:top-25 -top-[2px] md:left-[80%] left-[70%]  h-6 w-6 rotate-[18deg] lg:block"
                        />
                    </div>

                    {/* Right side content */}
                    <div className="space-y-6 mt-15 md:ml-26 md:w-[461px]">
                        <div>
                            <p className="inline-block mb-2 rounded-md bg-[#749B3F1A] px-3 py-1 font-medium text-green-600">
                                About us
                            </p>

                            <h2 className="mb-4 text-4xl font-bold text-gray-900 leading-snug">
                                About Fresh Harvest
                            </h2>
                            <p className="mb-6 leading-relaxed text-gray-600">
                                Welcome to Fresh Harvest, your premier destination for the
                                finest, farm-fresh produce! We are passionate about providing
                                you with the highest quality fruits, vegetables, and salad
                                ingredients to nourish your body and delight your taste buds.
                            </p>
                            <p className="mb-6 leading-relaxed text-gray-600">
                                At Fresh Harvest, we believe that everyone deserves access to
                                fresh, nutritious, and delicious produce. That's why we work
                                tirelessly to source the best ingredients from trusted local
                                farmers and growers.
                            </p>
                        </div>

                        <Button className="rounded-lg bg-orange-500 px-8 py-3 text-white hover:bg-orange-600 transition-all">
                            Read More
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
