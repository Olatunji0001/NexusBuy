"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function Form() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const router = useRouter();

  const submit = async () => {
    if (!email) {
      setError("Enter your email");
      return;
    }

    if (!password) {
      setError("Enter your password");
      return;
    }

    try {
      const response = await fetch("https://ecommerce-backend-ueml.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Something went wrong");
        return;
      }

      // ✅ Success: clear error, clear form, and redirect
      setError("");
      setEmail("");
      setPassword("");
      setSuccess("login successful");
      setTimeout(() => {
        router.push("/store");
      }, 2000);
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto min-h-screen flex flex-col justify-center">
        <div className="w-full max-w-md">
          <Link href="/">
            <Image
              src={"/Logo.png"}
              alt="Logo"
              width={200}
              height={80}
              className="w-[200px] mb-4"
            />
          </Link>
          <p className="mb-4">Sign in to your account</p>
        </div>
        <div>
          {success && (
            <div className="p-1 text-center bg-green-100 rounded-sm mb-3 text-green-700">
              {success}
            </div>
          )}
          {/* Show error message */}
          {error && (
            <div className="p-1 text-center bg-red-100 rounded-sm mb-3 text-red-600">
              {error}
            </div>
          )}{" "}
        </div>
        <form action="" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="">Email</label>
          <input
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="email"
            placeholder="Enter your eamil"
            className="w-[100%] p-2 outline-1 rounded-sm mb-5 mt-1"
          />

          <label htmlFor="">Password</label>
          <input
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
            placeholder="Enter your eamil"
            className="w-[100%] p-2 outline-1 rounded-sm mb-5 mt-1"
          />
        </form>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <div>
            <Link
              href="/Forget-password"
              className="text-orange-600 hover:text-orange-700 hover:underline transition duration-200"
            >
              Forgot password?
            </Link>
          </div>
        </div>
        <div className="text-center mt-7">
          <button
            onClick={submit}
            className="p-2 rounded-xl w-[150px] cursor-pointer bg-amber-600 hover:translate-y-0.5 text-white"
          >
            Sign in
          </button>
        </div>

        <div className="text-center mt-10 flex flex-wrap justify-center items-center text-sm">
          <p className="mr-1">New here? Join as a</p>
          <Link
            href={"/vendor-account"}
            className="text-orange-600 font-semibold hover:underline ml-1"
          >
            Vendor
          </Link>
          <span className="mx-2">or</span>
          <Link
            href={"/customer-account"}
            className="text-orange-500 font-medium hover:underline"
          >
            Customer
          </Link>
        </div>
      </div>
    </>
  );
}
