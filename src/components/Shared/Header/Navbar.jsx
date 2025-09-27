"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCurrentUser } from "@/redux/services/auth/authSlice";
import { useSelector } from "react-redux";
import { Button } from "antd";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const data = useSelector(useCurrentUser);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          MyLogo
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>
        <div className="hidden md:block">
          {data ? (
            <Link href={`${data?.role}/dashboard`}>
              <Button type="primary">Dashboard</Button>
            </Link>
          ) : (
            <Link
              href="/sign-in"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Sign-in
            </Link>
          )}
        </div>

        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <Link href="/" className="block hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="block hover:text-blue-600">
            About
          </Link>
          <Link href="/contact" className="block hover:text-blue-600">
            Contact
          </Link>

          {data ? (
            <Link href={`${data?.role}/dashboard`}>
              <Button type="primary">Dashboard</Button>
            </Link>
          ) : (
            <Link
              href="/sign-in"
              className="block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Sign-in
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
