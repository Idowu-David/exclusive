"use client";

import HeroBanner from "@/components/HeroBanner";
import CategoryCard from "@/components/CategoryCard";
import FlashSaleCard from "@/components/FlashSaleCard";
import HorizontalRule from "@/components/HorizontalRule";
import StarRating from "@/components/StarRating";
import {
  Smartphone,
  Monitor,
  Watch,
  Camera,
  Headphones,
  Gamepad2,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { useRef, useState } from "react";
import CategoryList from "@/components/CategoryList";
import { products } from "@/db/products";

export default function Home() {
  const CATEGORIES = [
    { id: "phones", title: "Phones", icon: Smartphone },
    { id: "computers", title: "Computers", icon: Monitor },
    { id: "smartwatch", title: "SmartWatch", icon: Watch },
    { id: "camera", title: "Camera", icon: Camera },
    { id: "headphones", title: "HeadPhones", icon: Headphones },
    { id: "gaming", title: "Gaming", icon: Gamepad2 },
  ];

  const [activeCategory, setActiveCategory] = useState("camera");

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full md:px-20">
      <div className="md:flex md:justify-between sm:px-10 md:gap-10">
        <div className="hidden md:block border-r border-gray-300 pr-22 md:pr-10 pt-10">
          <CategoryList />
        </div>
        <HeroBanner />
      </div>

      <HorizontalRule />

      {/* FLASH SALES */}

      <div className="px-3 md:px-0 space-y-2 md:space-y-4 mt-8">
        <div className="flex gap-3 items-center text-[#D84444] font-medium">
          <div className="h-8 w-4 rounded bg-[#D84444]" />
          <div>Today's</div>
        </div>
        <div className="flex justify-between mb-5 mr-2">
          <h2 className="font-semibold text-xl tracking-wide">Flash Sales</h2>
          {/* <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-full bg-gray-100"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 rounded-full bg-gray-100"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div> */}
        </div>

        <div className="flex overflow-x-auto scrollbar-hide gap-4 snap-x scroll-snap-type-x snap-mandatory">
          {products.slice(0, 20).map((product) => (
            <div key={product.id} className="scroll-snap-align-start shrink">
              <FlashSaleCard
                title={product.title}
                price={product.price}
                discountPercentage={product.discountPercentage}
                rating={product.rating}
                stock={product.stock}
                imageUrl={product.images[0]}
              />
            </div>
          ))}
        </div>
      </div>

      <HorizontalRule />

      {/* BROWSE BY CATEGORY */}

      <div className="px-3 md:px-0 space-y-2 md:space-y-4 mt-8">
        <div className="flex gap-3 items-center text-[#D84444] font-medium">
          <div className="h-8 w-4 rounded bg-[#D84444]" />
          <div>Categories</div>
        </div>
        <div className="flex justify-between mb-5 mr-2">
          <h2 className="font-semibold text-xl tracking-wide">
            Browse by Category
          </h2>
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-full bg-gray-100"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 rounded-full bg-gray-100"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x scroll-snap-type-x mandatory"
        >
          {CATEGORIES.map((category) => (
            <div key={category.id} className="scroll-snap-align-start shrink">
              <CategoryCard
                title={category.title}
                Icon={category.icon}
                isActive={activeCategory == category.id}
                onClick={() => setActiveCategory(category.id)}
              />
            </div>
          ))}
        </div>
      </div>
      {/* <Features /> */}
    </div>
  );
}
