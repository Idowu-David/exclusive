import Image from "next/image";
import LoginForm from "@/components/LoginForm";
import Link from "next/link";

export default function Login() {
  return (
    <div className=" max-w-7xl mt-10">
      <div className="min-h-screen grid grid-cols-2 w-full gap-10">
        <div className="relative">
          <Image
            src="/images/login-image.png"
            alt="Login Banner-Marketplace"
            fill
            // height={300}
            // width={300}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col max-w-lg w-3/4 mt-14">
          <div>
            <div className="mb-5">
              <h1 className="text-3xl font-semibold mb-3">Login to Exclusive</h1>
              <p className="text-sm">Enter your details below</p>
            </div>
          </div>
          <div className="mt-4">
            <LoginForm />
          </div>
         
          <div className="text-center text-xs  mt-4 flex justify-center">
            <p className="">Don't have an Account?</p>
            <Link href="/signup" className="ml-2 underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
