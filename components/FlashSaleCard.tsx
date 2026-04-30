import { products } from "@/db/products";
import Image from "next/image";
import { Eye, HeartIcon } from "lucide-react";

export default function FlashSaleCard() {
  return (
    <div className="w-40">
      <div className="bg-[#F5F5F5] h-40 flex flex-col rounded group relative">
        <div className="bg-[#D84444] text-white rounded mt-2 ml-2 text-[9px] flex items-center justify-center w-8 h-4 font-light">
          -45%
        </div>
        <div className="space-y-1 absolute top-2 right-2">
          <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center">
            <HeartIcon className="w-4 h-4" />
          </div>
          <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center">
            <Eye className="w-4 h-4" />
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center ">
          <Image
            src="/images/gamepad.png"
            height={90}
            width={90}
            alt="Gamepad"
            className="object-cover"
          />
        </div>
        <div className="text-xs text-white bg-black h-8 flex items-center justify-center w-full rounded-b opacity-0 group-hover:opacity-100">
          <p>Add to Cart</p>
        </div>
      </div>
      <div className="text-xs flex flex-col gap-1.5 bg-white mt-3 font-medium">
        <p className="font-semibold">HAVIT HV-92 GAMEPAD</p>
        <p className="text-[#D84444]">$120 <span className=" ml-1 text-gray-600">$160</span></p>
        <div>5star <span className="text-gray-600">(88)</span></div>
      </div>
    </div>
  );
}
