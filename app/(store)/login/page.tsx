import Image from "next/image";
import LoginForm from "@/components/LoginForm";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex md:items-center justify-center p-4 mt-10 mx-3 max-w-5xl lg:mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 justify-items-center">
        <div className="hidden md:relative md:block h-full min-h-125">
          <Image
            src="/images/login-image.png"
            alt="Login Banner-Marketplace"
            height={900}
            width={700}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col max-w-lg w-full md:w-3/4 md:mt-8">
          <div>
            <div className="mb-5 text-center md:text-left">
              <h1 className="text-3xl font-semibold mb-3">
                Login to Exclusive
              </h1>
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
