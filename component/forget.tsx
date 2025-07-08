"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ForgetPass() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const btn = () => {
    if (!email) {
      setError("Enter your email");
      return;
    }

    setEmail("");
    setError("");
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
      {/* LEFT SECTION: Promo - hidden on screens < 880px */}
      <div className="hidden lg:flex justify-center items-center w-full lg:w-1/2 bg-amber-600 text-white text-center">
        <div className="p-10 animate-[bounce_15s_infinite]">
          <div className="animate-pulse">
            <h1 className="text-[40px] lg:text-[50px] font-bold mb-4">
              Lost your Account?
            </h1>
            <p className="text-lg lg:text-xl font-medium">
              Enter your email and we’ll send a reset code.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 min-h-screen">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Link href="/">
              <Image
                src="/Logo.png"
                alt="logo"
                width={170}
                height={100}
                className="w-[170px] h-auto"
              />
            </Link>
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-semibold mb-1">Forget Password?</h1>
          <p className="text-sm text-gray-600 mb-5">
            No worries! Enter your email and we’ll send a code to reset your
            password.
          </p>

          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()}>
            {error && (
              <div className="p-2 text-center bg-red-100 rounded text-red-600 mb-3 text-sm">
                {error}
              </div>
            )}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded mb-4 text-sm"
            />
            <button
              onClick={btn}
              className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition"
            >
              Send Reset Code
            </button>
          </form>

          {/* Back to login */}
          <p className="mt-6 text-center text-sm">
            <Link
              href="/login-and-signup"
              className="text-orange-600 font-semibold hover:underline"
            >
              Back to Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
