"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function VendorForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

 const handleSubmit = async () => {
  setError("");
  setSuccess("");
  setLoading(true);

  const trimmedUsername = fullname.trim();
  const trimmedEmail = email.trim();

  if (!trimmedUsername || !trimmedEmail || !password || !conPassword) {
    setError("All fields are required");
    setLoading(false);
    return;
  }

  if (password.length < 8) {
    setError("Password must be at least 8 characters");
    setLoading(false);
    return;
  }

  if (password !== conPassword) {
    setError("Passwords do not match");
    setLoading(false);
    return;
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sellers-account`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullname: trimmedUsername,
        email: trimmedEmail,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      if (data.message?.includes("email")) {
        setError(data.message); // Show specific message from backend
      } else {
        setError(data.message || "Something went wrong");
      }
      setLoading(false);
      return;
    }

    localStorage.setItem("verifyEmail", trimmedEmail);
    localStorage.setItem("accountType", "vendor"); // ✅ important for redirect after verification

    setSuccess("✅ Verification code sent to your email.");
    setFullname("");
    setEmail("");
    setPassword("");
    setConPassword("");

    setTimeout(() => {
      router.push("/confirm-email");
    }, 2000);
  } catch (err) {
    setError("Server error. Please try again later.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="w-full max-w-md">
      <div className="flex justify-center mb-4">
        <Link href="/">
          <Image src="/Logo.png" alt="NexusBuy Logo" width={150} height={80} className="w-[150px]" />
        </Link>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold mb-1">Create your account</h2>
        <p className="text-sm text-gray-600">
          Start selling with us — boost your business.
        </p>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="bg-white p-6 rounded shadow">
        {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
        {success && <p className="text-green-600 text-sm mb-3">{success}</p>}

        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          placeholder="Full Name"
          className="w-full p-2 border mb-4 rounded"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="w-full p-2 border mb-4 rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 border mb-4 rounded"
        />
        <input
          type="password"
          value={conPassword}
          onChange={(e) => setConPassword(e.target.value)}
          placeholder="Confirm Password"
          className="w-full p-2 border mb-4 rounded"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Processing..." : "Create Vendor Account"}
        </button>
      </form>

      <p className="text-sm mt-6 text-center">
        Already have an account?{" "}
        <Link
          href="/login-and-signup"
          className="text-orange-600 font-semibold hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
