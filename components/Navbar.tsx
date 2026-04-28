"use client";

import Link from "next/link";
import {
  Search,
  Heart,
  ShoppingCart,
  Menu,
  Home,
  Phone,
  Info,
  UserPlus,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  return (
    <header className="relative border-b border-gray-300">
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

      <div
        className={`md:hidden fixed inset-0 bg-black/10 z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Nav */}
      <nav
        className={`flex flex-col fixed pl-10  rounded-br-2xl w-3/5  mt-16 transition-all z-50 duration-200 bg-white/80 backdrop-blur-md border-gray-200 border-b ${isMenuOpen ? "visible opacity-100" : "invisible opacity-0"}`}
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
          <div className="flex gap-2 items-center">
            <Home className="w-5 h-5" />
            <Link
              href="/"
              className="hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <Phone className="w-5 h-5" />
            <Link
              href="/"
              className="hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <Info className="w-5 h-5" />
            <Link
              href="/"
              className="hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <UserPlus className="w-5 h-5" />
            <Link
              href="/"
              className="hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign in
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex md:items-center md:justify-center md:w-full">
        <div className="max-w-7xl mx-auto pl-4 flex items-end h-16 pb-2 md:w-1/5">
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
        <nav className="hidden md:flex md:space-x-4 lg:space-x-6 font-medium text-sm md:text-base items-center justify-center md:w-2/5">
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
        <div className="flex justify-end w-full md:gap-3 md:w-2/5 md:justify-center ">
          <div className="hidden items-center justify-center bg-gray-200 rounded md:flex py-2 pl-3">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="outline-none text-xs md:mr-2 w-full"
            />
            <Search className="w-6 h-6 md:mx-2 md" />
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
