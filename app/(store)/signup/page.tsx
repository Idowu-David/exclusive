import Image from "next/image";
import SignupForm from "@/components/SignupForm";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="flex md:items-center jusify-center p-4 mt-10 mx-3 max-w-5xl lg:mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 justify-items-center">
        <div className="hidden relative md:block h-full min-h-125 overflow-hidden">
          <Image
            src="/images/login-image.png"
            alt="Login Banner-Marketplace"
            height={900}
            width={700}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col max-w-lg w-full md:w-3/4">
          <div>
            <div className="mb-5 text-center md:text-left">
              <h1 className="text-3xl font-semibold mb-2 w-full">Create an Account</h1>
              <p className="text-sm ">Enter your details below</p>
            </div>
          </div>
          <SignupForm />
          <button className="flex gap-4 border p-2 py-3 items-center justify-center rounded text-sm mt-4">
            <Image
              src="/icons/google.png"
              alt="google icon"
              height={20}
              width={20}
            />
            <p>Sign up with Google</p>
          </button>
          <div className="text-center text-xs  mt-4 flex justify-center">
            <p className="">Already have an account</p>
            <Link href="/login" className="ml-3 underline">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
