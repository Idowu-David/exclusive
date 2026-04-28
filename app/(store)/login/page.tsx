import Image from "next/image";
import LoginForm from "@/components/LoginForm";
import Link from "next/link";

export default function Login() {
  return (
    <div className="md:min-h- flex md:items-center justify-center p-4 mt-10 mx-3">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10">
        <div className="hidden md:relative">
          <Image
            src="/images/login-image.png"
            alt="Login Banner-Marketplace"
            fill
            // height={300}
            // width={300}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col max-w-lg w-full md:w-3/4">
          <div>
            <div className="mb-5 text-center">
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
