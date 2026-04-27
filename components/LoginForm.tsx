"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const inputStyle =
    "border-b border-gray-400  pb-2 pt-1 w-full focus:outline-none shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1) focus:border-b-2 text-sm";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    // Push to DB

    setTimeout(() => {
      router.push("/");
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7">
      <div>
        <input
          id="email"
          name="email"
          type="text"
          required
          value={formData.email}
          onChange={handleChange}
          className={inputStyle}
          placeholder="Email or Phone Number"
        />
      </div>

      <div>
        <input
          id="password"
          name="password"
          type="password"
          required
          value={formData.password}
          onChange={handleChange}
          className={inputStyle}
          placeholder="Password"
        />
      </div>
      <div className="flex items-center justify-between text-sm ">
        <button className="border bg-[#DB4444] text-white rounded py-3 px-8 hover:bg-[#ff2a2a88]">
          Login
        </button>
        <Link href="#" className="text-[#DB4444]">Forgot Password?</Link>
      </div>
    </form>
  );
}
