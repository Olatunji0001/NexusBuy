"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function ForgetPass() {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const btn = () => {
    if (!email) {
      setError("Enter your email");
      return;
    }

    setEmail("")
    setError("")
  };
  return (
    <>
      <div className="flex">
        <div className="h-[100vh] w-[50%] bg-amber-600 text-white text-center content-center cursor-pointer">
          <div className="animate-[bounce_15s_infinite] p-10 ">
            <div className="animate-pulse">
              <h1 className="text-[50px] font-bold">Lost your Account?</h1>
              <p className="text-[20px] font-semibold">
                Enter your email address and we'll send you a code to reset your
                password.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[100vh] w-[50%] content-center">
          <div className="w-[400px] mx-auto">
            <div className="flex justify-center mb-7">
              <Link href={"/"}>
                <Image
                  src={"/Logo.png"}
                  alt="logo"
                  height={100}
                  width={100}
                  className="w-[170px]"
                />
              </Link>
            </div>
            <div className="">
              <h1 className="text-[22px] font-semibold">Forget Password?</h1>
              <p className="text-[14px] my-1.5">
                No worries! Enter your email address and we'll send you a Code
                to reset your password.
              </p>
              <form action="" onSubmit={(event) => event.preventDefault()}>
                <div>
                  {error !== "" && (
                    <div className="p-1 text-center bg-red-100 rounded-sm mt-4 text-red-600">
                      {error}
                    </div>
                  )}
                </div>
                <input
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  type="text"
                  placeholder="Enter your email address"
                  className="outline p-2 rounded-sm text-[12px] my-3 w-[400px]"
                />
                <button
                  onClick={btn}
                  className="mt-3 bg-amber-600 text-white p-1.5 rounded-sm w-[150px] cursor-pointer hover:translate-y-0.5"
                >
                  Send Reset Code
                </button>
              </form>
              <p className="mt-5">
                <Link
                  href={"/Login-and-Sign-up"}
                  className="text-[#E17100] font-semibold hover:underline mr-1"
                >
                  Back to Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
