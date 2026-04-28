import Link from "next/link";
import Image from "next/image";
import { Send } from "lucide-react";

const accountLinks = [
  {
    text: "My Account",
    link: "#",
  },
  {
    text: "Login / Register",
    link: "#",
  },
  {
    text: "Cart",
    link: "#",
  },
  {
    text: "Wishlist",
    link: "#",
  },
  {
    text: "Shop",
    link: "#",
  },
];

const quickLinks = [
  { text: "Privacy Policy", link: "#" },
  { text: "Terms Of Use", link: "#" },
  { text: "FAQ", link: "#" },
  { text: "Contact", link: "#" },
];

export default function Footer() {
  return (
    <div className=" bg-black mt-30 text-white px-4 pt-8 pb-28">
      <p className="text-xl font-semibold mb-6">Exclusive</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 justify-self-center">
        <div className="">
          <Link href="#">Subscribe</Link>
          <p className="text-xs mt-5">Get 10% off your first order</p>
          <div className="flex border-white border-2 p-2 mt-2 rounded">
            <input
              type="text"
              placeholder="Enter your email"
              className=" pl-1 text-white text-xs bg-transparent focus:outline-none flex-1 min-w-0 truncate"
            />
            <Send className="w-5 h-5" />
          </div>
        </div>
        <div className="text-wrap max-w-60">
          <p className="mb-5 font-semibold">Support</p>
          <p className="text-sm">111 Bijay sarani, Dhaka DH 1515, Bangladesh</p>
          <p className="text-sm mt-5">exclusive@gmail.com</p>
          <p className="text-sm mt-5">+222 1234 5678</p>
        </div>
        <div className="">
          <p className="pb-5 font-semibold">Account</p>
          <div className="flex flex-col gap-3 text-sm">
            {accountLinks.map(({ text, link }) => (
              <Link href={link} key={text}>
                {text}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="pb-5 font-semibold">Quick Link</p>
          <div className="flex flex-col gap-3 text-sm">
            {quickLinks.map(({ text, link }) => (
              <Link href={link} key={text}>
                {text}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 justify-self-center md:justify-self-start">
          <p className="mb-3">Download App</p>
          <p className="text-xs text-gray-300 mb-3">
            Save $3 with App New User Only
          </p>
          <div className="flex align-center items-center gap-2">
            <Image src="/qrcode.png" alt="QR code" width={70} height={70} />
            <div className="flex flex-col gap-2">
              <div className="flex border border-white rounded items-center px-1">
                <div>
                  <Image
                    src="/icons/play.svg"
                    alt="Google Play"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="text-xs py-0.5 pl-1">
                  <p className="text-[7px]">GET IT ON</p>
                  <p>Google Play</p>
                </div>
              </div>
              <div className="flex border border-white rounded items-center px-1">
                <div>
                  <Image
                    src="/icons/apple.png"
                    alt="App Store"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="text-xs py-0.5 pl-1">
                  <p className="text-[7px]">Download on the</p>
                  <p className="font-semibold">App Store</p>
                </div>
              </div>
            </div>
          </div>
          {/* Social Media Icons */}
          <div className="flex justify-between gap-8 mt-3">
            <div className="bg-white h-5 w-5 rounded-full">
              <Link href="#">
                <Image
                  src="/icons/fb.png"
                  alt="facebook icon"
                  height={20}
                  width={20}
                />
              </Link>
            </div>
            <div className="bg-white h-5 w-5 rounded-full">
              <Link href="#">
                <Image
                  src="/icons/x.png"
                  alt="twitter icon"
                  height={20}
                  width={20}
                />
              </Link>
            </div>
            <div className="bg-white rounded-full h-5 w-5">
              <Link href="#">
                <Image
                  src="/icons/instagram.png"
                  alt="Instagram icon"
                  height={20}
                  width={20}
                />
              </Link>
            </div>
            <div className="bg-white h-5 w-5 rounded-full">
              <Link href="#">
                <Image
                  src="/icons/linkedin.png"
                  alt="facebook icon"
                  height={20}
                  width={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
