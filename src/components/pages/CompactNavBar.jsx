"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Menu, Apple, X, AppleIcon } from "lucide-react";
import Image from "next/image";
import heroImage from '../../../../../public/benner.png';
import bgImage from '../../../../../public/bg.png';
import dinner from '../../../../../public/dinner.png';
import tree from '../../../../../public/tree.png';
import imageIcon from '../../../../../public/imageIcon.png';
import { AuthModal } from "../../AuthModal";
import Link from "next/link";

export default function CompactNavBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // mobile menu toggle

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-green-50 to-orange-50 overflow-hidden">

            {/* Background Image */}
            <div className="absolute top-0 right-0 h-full z-0 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px]">
                <Image
                    src={bgImage}
                    alt="Background"
                    className="object-cover w-full h-full"
                    priority
                />
            </div>

            {/* Header / NavBar */}
            <header className="relative z-10 bg-transparent w-full">
                <div className="flex items-center justify-between px-4 py-4 lg:px-8 w-full">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                            <Apple className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-800">Fresh Harvests</span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex lg:flex items-center gap-8">
                        <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Home</a>
                        <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Shop</a>
                        <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">About us</a>
                        <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Blog</a>
                    </nav>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex lg:flex items-center gap-4">
                        <button className="p-2 text-gray-600 hover:text-green-600 transition-colors">
                            <Heart className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-green-600 transition-colors relative">
                            <ShoppingCart className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">2</span>
                        </button>
                        <Button
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Sign Up
                        </Button>

                        <AuthModal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            initialMode="register"
                        />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden lg:hidden">
                        <button
                            className="p-2 text-gray-600"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4">
                        <a href="#" className="block text-gray-600 hover:text-green-600 transition-colors">Home</a>
                        <a href="#" className="block text-gray-600 hover:text-green-600 transition-colors">Shop</a>
                        <a href="#" className="block text-gray-600 hover:text-green-600 transition-colors">About us</a>
                        <a href="#" className="block text-gray-600 hover:text-green-600 transition-colors">Blog</a>

                        <div className="flex flex-col gap-2">
                            <Button
                                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3"
                                onClick={() => setIsModalOpen(true)}
                            >
                                Sign Up
                            </Button>
                            <AuthModal
                                isOpen={isModalOpen}
                                onClose={() => setIsModalOpen(false)}
                                initialMode="register"
                            />
                        </div>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="relative px-4 py-12 lg:py-20 z-10 min-h-screen flex flex-col justify-center w-full">
                <div className="flex flex-col-reverse md:flex-row items-center md:gap-12 lg:gap-12 relative h-full w-full">

                    {/* Decorative Leaf Image - Left Edge */}
                    <div className="absolute top-0 left-0 -ml-4 w-12 h-12 md:w-16 md:h-16">
                        <Image
                            src={tree}
                            alt="Leaf"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Left Content */}
                    <div className="flex-1 ml-13 space-y-6 md:space-y-8 lg:space-y-8 order-2 md:order-1 h-full flex flex-col justify-center relative">

                        <p className="w-fit  px-4 py-1.5 text-green-600 bg-[#749B3F1A] font-medium text-sm md:text-base lg:text-base rounded-md">
                            Welcome to Fresh Harvest
                        </p>

                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Fresh Fruits and Vegetables
                        </h1>

                        <p className="text-sm md:text-base lg:text-base text-gray-600 max-w-md">
                            At Fresh Harvests, we are passionate about providing you with the finest and most nutritious fresh fruits and vegetables.
                        </p>

                        <Button className="bg-orange-500 hover:bg-orange-600 text-white w-32 md:w-36 lg:w-40 py-2 md:py-3 lg:py-3 text-sm md:text-lg lg:text-lg rounded-lg">
                            Shop Now
                        </Button>


                        {/* Promo Card */}
                        <div className="grid grid-cols-2 gap-1">
                            <div className="p-0.5 flex justify-center">
                                <div className="relative w-[150px] -mt-6 h-[50px]">
                                    <Image
                                        src={imageIcon}
                                        alt="Fresh Salad"
                                        width={200}
                                        height={50}
                                        className="object-cover rounded-[7px]"
                                    />
                                </div>

                            </div>


                            <div className="w-[172px] md:w-[300px] lg:w-[240px] h-[110px] 
                bg-gray-100 rounded-xl shadow-md grid grid-cols-[1fr_auto] 
                items-center p-4 gap-3 -ml-18 hover:shadow-lg transition">

                                {/* Left Content */}
                                <div className="flex flex-col justify-center space-y-1.5">
                                    <p className="text-[10px] md:text-sm font-bold text-gray-700">✨ Special Offer</p>
                                    <p className="text-[9px] md:text-base font-semibold text-gray-900">Fresh Salad</p>
                                    <p className="text-[8px] md:text-xs text-gray-600">Up to 70% off</p>
                                    <button className="bg-green-600 hover:bg-green-700 text-white 
                       py-[3px] px-3 md:py-1.5 md:px-3 
                       rounded-full text-[7px] md:text-xs font-bold shadow-sm">
                                        CODE: FRESH25
                                    </button>
                                </div>

                                {/* Right Image */}
                                <div className="relative w-[80px] h-[80px] flex items-center justify-center">
                                    <Image
                                        src={dinner}
                                        alt="Fresh Salad"
                                        width={80}
                                        height={80}
                                        className="object-cover rounded-lg"
                                    />
                                </div>


                            </div>




                        </div>
                        <div className="relative w-40 sm:w-48">
                            {/* Download Label */}
                            <p className="text-black font-semibold mt-12 relative z-10">Download App :</p>

                            {/* Tree Image */}
                            <div className="absolute top-6 left-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
                                <Image
                                    src={tree}
                                    alt="Leaf"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Buttons */}
                            <div className="flex items-center mt-9 gap-2 relative z-10">
                                {/* App Store Button */}
                                <Link
                                    href=""
                                    className="flex items-center gap-2 h-10 sm:h-11 md:h-12 rounded-full bg-black hover:bg-black/90 px-4 sm:px-5 md:px-6 shadow-sm text-white"
                                    aria-label="Download on the App Store"
                                >
                                    <AppleIcon className="h-5 w-5" />
                                    <span className="leading-none text-left">
                                        <span className="block text-[10px] sm:text-xs md:text-sm opacity-80">
                                            Download on the
                                        </span>
                                        <span className="block text-sm sm:text-base md:text-base font-semibold tracking-wide">
                                            App Store
                                        </span>
                                    </span>
                                </Link>

                                {/* Google Play Button */}
                                <Link
                                    href=""
                                    className="flex items-center gap-2 h-10 sm:h-11 md:h-12 rounded-full bg-black hover:bg-black/90 px-4 sm:px-5 md:px-6 shadow-sm text-white"
                                    aria-label="Get it on Google Play"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        aria-hidden="true"
                                    >
                                        <path d="M3.6 2.4c-.37.22-.6.63-.6 1.07v17.06c0 .44.23.85.6 1.07l9.38-9.6L3.6 2.4z" fill="currentColor" />
                                        <path d="M14.06 12.97 18.7 17c.57.44 1.38.03 1.38-.68V7.69c0-.71-.81-1.12-1.38-.68l-4.64 4.03a.9.9 0 0 0 0 1.39z" fill="currentColor" />
                                        <path d="M3.6 21.6c.26.16.6.18.9-.03l9.04-5.62-2.56-2.62L3.6 21.6z" fill="currentColor" />
                                        <path d="M4.5 2.43c-.3-.2-.64-.19-.9-.03l7.38 8 2.56-2.62L4.5 2.43z" fill="currentColor" />
                                    </svg>
                                    <span className="leading-none text-left">
                                        <span className="block text-[10px] sm:text-xs md:text-sm opacity-80">GET IT ON</span>
                                        <span className="block text-sm sm:text-base md:text-base font-semibold tracking-wide">
                                            Google Play
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>










                    </div>

                    {/* Right Content - Hero Image */}
                    <div className="flex-1 order-1 md:order-2 lg:order-2 relative flex justify-center md:justify-end items-end h-full w-full">
                        <Image
                            src={heroImage}
                            alt="Fresh fruits and vegetables"
                            className="w-[270px] sm:w-[280px] md:w-[350px] lg:w-full xl:w-full h-auto relative object-contain mb-[-60px] sm:mb-[-80px] md:mb-[-120px] lg:mb-[-180px] xl:mb-[-220px]"
                            priority
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
