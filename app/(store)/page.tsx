import Features from "@/components/Features";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link"
import HeroBanner from "@/components/HeroBanner";

export default function Home() {
  return (
    <div className="flex items-center w-full justify-center">
      <HeroBanner/>
      {/* <Features /> */}
    </div>
  );
}
