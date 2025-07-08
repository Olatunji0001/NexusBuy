"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EmailConf() {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [accountType, setAccountType] = useState("customer"); // 'customer' or 'seller'
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedEmail = localStorage.getItem("verifyEmail");
    const storedType = localStorage.getItem("accountType");

    if (storedEmail) {
      setEmail(storedEmail.trim().toLowerCase()); // ✅ Normalize here
    } else {
      router.push("/sign-up");
    }

    if (storedType) {
      setAccountType(storedType);
    }
  }, [router]);

  const handleVerify = async () => {
    setError("");
    setSuccess("");
    setLoading(true);

    if (!code.trim()) {
      setError("Enter your verification code");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://ecommerce-backend-ueml.onrender.com/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          code: code.trim(),
          accountType, // 👈 pass account type
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Verification failed");
        return;
      }

      setSuccess("✅ Email verified successfully!");
      localStorage.removeItem("verifyEmail");
      localStorage.removeItem("accountType");
      localStorage.setItem("token", data.token);

      setTimeout(() => {
        router.push("/store");
      }, 2000);
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setError("");
    setSuccess("");
    setResendLoading(true);

    try {
      const response = await fetch("https://ecommerce-backend-ueml.onrender.com/resend-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          accountType, // 👈 pass account type
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Failed to resend code");
        return;
      }

      setSuccess("📨 New verification code sent!");
    } catch (err) {
      setError("Failed to resend code. Try again.");
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="flex">
      <div className="h-screen w-[50%] bg-amber-600 text-white text-center flex items-center justify-center">
        <div className="p-10">
          <div className="animate-pulse">
            <h1 className="text-[42px] font-bold mb-4">Email Verification</h1>
            <p className="text-[18px] font-semibold">
              A code has been sent to your email. Enter it below to complete
              registration.
            </p>
          </div>
        </div>
      </div>

      <div className="h-screen w-[50%] flex items-center justify-center">
        <div className="w-[400px]">
          <div className="flex justify-center mb-5">
            <Link href="/">
              <Image
                src="/Logo.png"
                alt="logo"
                height={100}
                width={100}
                className="w-[170px]"
              />
            </Link>
          </div>

          <h1 className="text-[22px] font-semibold mb-1">Verify your email</h1>
          <p className="text-[14px] mb-3 text-gray-600">
            Email: <span className="font-semibold">{email}</span>
          </p>

          {success && (
            <div className="p-2 text-center bg-green-100 rounded-sm mb-3 text-green-700 font-medium">
              {success}
            </div>
          )}
          {error && (
            <div className="p-2 text-center bg-red-100 rounded-sm mb-3 text-red-700 font-medium">
              {error}
            </div>
          )}

          <form onSubmit={(e) => e.preventDefault()}>
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              type="text"
              placeholder="Enter your verification code"
              className="outline p-2 rounded-sm text-[14px] my-4 w-full border border-gray-300"
              disabled={loading}
            />

            <button
              onClick={handleVerify}
              disabled={loading}
              className={`${
                loading ? "opacity-50" : "hover:opacity-90"
              } bg-amber-600 text-white p-2 rounded-sm w-full font-medium transition-all`}
            >
              {loading ? "Verifying..." : "Verify Code"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Didn&apos;t get a code?{" "}
            <span
              onClick={handleResend}
              className={`text-blue-500 font-medium cursor-pointer hover:underline ${
                resendLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {resendLoading ? "Sending..." : "Resend"}
            </span>
          </p>

          <p className="mt-6 text-center text-sm">
            Wrong email?{" "}
            <Link
              href={accountType === "seller" ? "/vendor-account" : "/cutomer-account"}
              className="text-[#E17100] font-semibold"
            >
              Go back to sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
