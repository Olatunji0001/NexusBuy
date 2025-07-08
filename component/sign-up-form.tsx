"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function SignupForm() {
    const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async () => {
    setError("");
    setSuccess("");
    setLoading(true);

    // Trim input to remove accidental leading/trailing spaces
    const trimmedEmail = email.trim();
    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();

    // Validation
    if (
      !trimmedFirstName ||
      !trimmedLastName ||
      !trimmedEmail ||
      !password ||
      !conPassword
    ) {
      setError("All fields are required");
      setLoading(false);
      return;
    }


    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      setLoading(false);
      return;
    }

    if (password !== conPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(" https://ecommerce-backend-ueml.onrender.com/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: trimmedFirstName,
          lastName: trimmedLastName,
          email: trimmedEmail,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong");
        setLoading(false);
        return;
      }

      // Save email to localStorage for verification page
      localStorage.setItem("verifyEmail", trimmedEmail);

      setSuccess("✅ Verification code sent to your email.");
      setFirstName("");
      setLastName("");
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
    <div className="w-full max-w-md mx-auto min-h-screen flex flex-col justify-center">
      {/* Header Section - Adjusted for better alignment */}
      <div className="flex flex-col items-center mb-6">
        <div className="mb-4">
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={150}
              height={150}
              className="w-[150px] h-auto"
            />
          </Link>
        </div>
        <div className="text-center w-full">
          <h1 className="text-2xl font-semibold mb-1">
            Create your account
          </h1>
          <p className="text-sm text-gray-600">
            Start your shopping journey with us
          </p>
        </div>
      </div>

      {/* Form Section - Keep your existing form code */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-white p-6 rounded shadow"
      >
        {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
        {success && <p className="text-green-600 text-sm mb-3">{success}</p>}

        <div className="flex gap-4 mb-4">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className="w-full p-2 border rounded"
          />
        </div>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="w-full p-2 mb-4 border rounded"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
        />

        <input
          type="password"
          value={conPassword}
          onChange={(e) => setConPassword(e.target.value)}
          placeholder="Confirm Password"
          className="w-full p-2 mb-4 border rounded"
        />

        <button
          onClick={handleSignup}
          disabled={loading}
          className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition"
        >
          {loading ? "Processing..." : "Create Account"}
        </button>
      </form>

      <p className="text-center mt-7 text-sm">
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