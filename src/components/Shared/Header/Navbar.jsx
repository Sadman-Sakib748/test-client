"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Menu, X, Apple } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import heroImage from '../../../assets/images/benner.png';
import bgImage from '../../../assets/images/bg.png';
import dinner from '../../../assets/images/dinner.png';
import imageIcon from '../../../assets/images/imageIcon.png';
import { useCurrentUser } from "@/redux/services/auth/authSlice";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const data = useSelector(useCurrentUser);
  const pathname = usePathname();

  // Hide hero and background on sign-up and sign-in pages
  const hideHero = pathname === "/sign-up" || pathname === "/sign-in" || pathname.includes('/product');

  return (
    <div className={`relative ${!hideHero ?? 'min-h-screen'} bg-gradient-to-br from-green-50 to-orange-50 overflow-hidden`}>

      {/* Background Image */}
      {!hideHero && (
        <div className="absolute top-0 right-0 h-full z-0 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px]">
          <Image src={bgImage} alt="Background" className="object-cover w-full h-full" priority />
        </div>
      )}

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
            <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">Home</Link>
            <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">Shop</Link>
            <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">About us</Link>
            <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors">Blog</Link>
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

            {!data && (
              <Link href="/sign-up">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3">
                  Sign Up
                </Button>
              </Link>
            )}

            {data && (
              <Link href={`${data?.role}/dashboard`}>
                <Button type="primary">Dashboard</Button>
              </Link>
            )}
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
            <Link href="#" className="block text-gray-600 hover:text-green-600 transition-colors">Home</Link>
            <Link href="#" className="block text-gray-600 hover:text-green-600 transition-colors">Shop</Link>
            <Link href="#" className="block text-gray-600 hover:text-green-600 transition-colors">About us</Link>
            <Link href="#" className="block text-gray-600 hover:text-green-600 transition-colors">Blog</Link>

            {!data && (
              <Link href="/sign-up">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3">
                  Sign Up
                </Button>
              </Link>
            )}

            {data && (
              <Link href={`${data?.role}/dashboard`}>
                <Button type="primary" className="w-full">Dashboard</Button>
              </Link>
            )}
          </div>
        )}
      </header>

      {/* Hero Section */}
      {!hideHero && (
        <section className="relative px-4 py-12 lg:py-20 z-10 min-h-screen flex flex-col justify-center w-full">
          <div className="flex flex-col-reverse md:flex-row items-center md:gap-12 lg:gap-12 relative h-full w-full">

            {/* Left Content */}
            <div className="flex-1 ml-13 space-y-6 md:space-y-8 lg:space-y-8 order-2 md:order-1 h-full flex flex-col justify-center relative">
              <p className="w-fit px-4 py-1.5 text-green-600 bg-[#749B3F1A] font-medium text-sm md:text-base lg:text-base rounded-md">
                Welcome to Fresh Harvest
              </p>

              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Fresh Fruits and Vegetables
              </h1>

              <p className="text-sm md:text-base lg:text-base text-gray-600 max-w-md">
                At Fresh Harvests, we are passionate about providing you with the finest and most nutritious fresh fruits and vegetables.
              </p>

              <Link href="/shop">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-32 md:w-36 lg:w-40 py-2 md:py-3 lg:py-3 text-sm md:text-lg lg:text-lg rounded-lg">
                  Shop Now
                </Button>
              </Link>

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
      )}
    </div>
  );
}
