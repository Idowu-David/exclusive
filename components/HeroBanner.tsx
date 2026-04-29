import Image from "next/image"
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroBanner() {
  return (
    <div className="flex w-full text-white max-w-2xl">
      <div className="w-full flex justify-center">
        {/* <div className="hidden">List</div> */}
        <div className="bg-black flex flex-col-reverse md:flex-row p-2 justify-center items-center w-full py-3 md:h-70">
          <div className="md:w-1/2 w-full space-y-4 md:flex md:flex-col md:items-start md:pl-10">
            <div className="flex justify-center items-center gap-3">
              <Image
                src="/images/apple-logo.png"
                width={30}
                height={30}
                alt="Apple Logo"
              />
              <p className="text-sm">iPhone 14 Series</p>
            </div>
            <p className="text-3xl font-medium text-center md:text-left">Up to 10% off voucher</p>
            <div className="flex justify-center items-center gap-1">
              <Link href="#" className="text-sm underline">Shop Now</Link>
              <ArrowRight className="text-white w-4" />
            </div>
          </div>
          <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-100">
            <Image
              src="/images/iphone.png"
              fill
              priority
              alt="Purple iPhone 14 Pro"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
