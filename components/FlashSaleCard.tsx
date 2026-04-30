import { products } from "@/db/products";
import Image from "next/image";
import { Eye, HeartIcon } from "lucide-react";
import StarRating from "./StarRating";

interface FlashSaleCardProps {
  title: string;
  price: number;
  rating: number;
  stock: number;
  discountPercentage: number;
  imageUrl: string;
}

export default function FlashSaleCard({
  title,
  price,
  rating,
  stock,
  discountPercentage,
  imageUrl,
}: FlashSaleCardProps) {
  const finalPrice = price - price * (discountPercentage / 100);

  return (
    <div className="w-40">
      <div className="bg-[#F5F5F5] h-40 flex flex-col rounded group relative">
        <div className="bg-[#D84444] text-white rounded mt-2 ml-2 text-[9px] flex items-center justify-center w-9 h-5 md:w-8 md:h-4 font-medium px-5">
          -{discountPercentage}%
        </div>
        <div className="space-y-1 absolute top-2 right-2">
          <div className="bg-white w-7 h-7 rounded-full flex items-center justify-center">
            <HeartIcon className="md:w-4 w-5 md:h-4 h-5" />
          </div>
          <div className="bg-white w-7 h-7 rounded-full flex items-center justify-center">
            <Eye className="md:w-4 w-5 md:h-4 h-5" />
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={imageUrl}
            height={90}
            width={90}
            alt="Gamepad"
            className="object-cover"
          />
        </div>
        <button className="text-xs text-white bg-black h-8 flex items-center justify-center w-full rounded-b opacity-100 z-10 lg:opacity-0 transition-opacity lg:group-hover:opacity-100">
          <p>Add to Cart</p>
        </button>
      </div>
      <div className="text-xs flex flex-col gap-1.5 bg-white mt-3 font-medium">
        <p className="font-semibold">{title}</p>
        <p className="text-[#D84444]">
          ${finalPrice.toFixed(2)}{" "}
          <span className=" ml-1 text-gray-600 line-through">${price}</span>
        </p>
        <div>
          <StarRating rating={rating} count={stock} />
        </div>
      </div>
    </div>
  );
}
