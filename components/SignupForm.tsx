"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"

export default function SignupForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const router = useRouter()

  const inputStyle =
    "border-b border-gray-400 text-base pb-2 pt-1 w-full focus:outline-none shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1) focus:border-b-2 text-sm";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    // Push to DB

    setTimeout(() => {
      router.push('/')
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          value={formData.fullName}
          onChange={handleChange}
          className={inputStyle}
          placeholder="Name"
        />
      </div>

      <div>
        <input
          id="email"
          name="email"
          type="text"
          required
          value={formData.email}
          onChange={handleChange}
          className={inputStyle}
          placeholder="Email"
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
      <button className="border p-2 bg-[#DB4444] text-white rounded text-sm py-3  mt-5 hover:bg-[#ff2a2a88]">
        Create Account
      </button>
    </form>
      
  );
}
