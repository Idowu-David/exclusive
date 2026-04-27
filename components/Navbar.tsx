import Link from "next/link";
import { Search, Heart, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-30 w-full">
      <div className="max-w-7xl bg-black text-white px-10 h-10 flex justify-center items-center text-sm relative">
        <div>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <Link href="/" className="underline ml-3">
            ShopNow
          </Link>
        </div>
        <div className="absolute right-20">
          <select className="bg-black">
            <option>English</option>
          </select>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 flex justify-between items-end h-20 border-b border-gray-300 pb-4 pr-30">
        <Link
          href="/"
          className="text-2xl font-semibold tracking-wider text-exclusive-black"
        >
          Exclusive
        </Link>
        <nav className="flex space-x-10 font-medium">
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

        <div className="flex items-center gap-7">
          <div className="flex items-center justify-center bg-gray-200 rounded p-2 pl-6 gap-6">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="outline-none text-[12px]"
            />
            <Search className="w-5" />
          </div>

          <Heart className="w-5" />
          <ShoppingCart className="w-5" />
        </div>
      </div>
    </header>
  );
}
