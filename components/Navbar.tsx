"use client";

import Link from "next/link";
import { Search, Heart, ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative border-b border-gray-300">
      {/* <header className="h-30 w-full"> */}
      <div className="max-w-7xl bg-black text-white px-6 h-12 flex justify-center items-center text-sm relative text-center">
        <div className="">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <Link href="/" className="underline ml-3">
            ShopNow
          </Link>
        </div>
        <div className="hidden">
          <select className="bg-black">
            <option>English</option>
          </select>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="flex">
        <nav
          className={`flex flex-col fixed pl-10  rounded-br-2xl w-3/5  mt-16 transition-all z-50 duration-300 ${isMenuOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        >
          <button
            className="absolute right-6 top-4 "
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col gap-10 py-10">
            <Link
              href="/"
              className="hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="#"
              className="hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/signup"
              className="hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign up
            </Link>
          </div>
        </nav>
        <div className="max-w-7xl mx-auto pl-4 flex items-end h-16 pb-2">
          <div className="flex items-center gap-3">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-7 w-7 md:hidden" />
            </button>
            <Link href="/" className="text-2xl font-semibold tracking-wider">
              Exclusive
            </Link>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 font-medium">
          <Link href="/" className="hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="#" className="hover:underline underline-offset-4">
            Contact
          </Link>
          <Link href="#" className="hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/signup" className="hover:underline underline-offset-4">
            Sign up
          </Link>
        </nav>

        <div className="flex justify-end w-full">
          <div className="flex items-center justify-center bg-gray-200 rounded">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="hidden outline-none"
            />
            {/* <Search className="w-6 h-6" /> */}
          </div>

          <div className="flex mr-4 gap-4 items-center">
            <Heart className="w-7 h-7" />
            <ShoppingCart className="w-7 h-7" />
            <Search className="w-7 h-7 md:hidden sm:hidden lg:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
}
