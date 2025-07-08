"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
      const response = await fetch("http://localhost:1300/sellers-account", {
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
        setError(data.message || "Something went wrong");
        setLoading(false);
        return;
      }

      // Store data to localStorage for verification
      localStorage.setItem("verifyEmail", trimmedEmail);
      //localStorage.setItem("accountType", "seller");

      // ✅ Show success message BEFORE redirecting
      setSuccess("✅ Verification code sent to your email.");
      setError(""); // Clear any previous error
      setFullname("");
      setEmail("");
      setPassword("");
      setConPassword("");
      setLoading(false); // Stop spinner immediately

      // ✅ Delay redirect so message can show
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
    <div className="mt-5">
      <form onSubmit={(e) => e.preventDefault()} className="bg-white p-6 rounded shadow">
        {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
        {success && <p className="text-green-600 text-sm mb-3">{success}</p>}

        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            placeholder="Full Name"
            className="w-full p-2 mb-4 border rounded"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full p-2 mb-4 border rounded"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded"
          />
        </div>

        <div>
          <label htmlFor="conPassword" className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            value={conPassword}
            onChange={(e) => setConPassword(e.target.value)}
            placeholder="Confirm Password"
            className="w-full p-2 mb-4 border rounded"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`w-full bg-amber-600 text-white py-2 rounded transition hover:bg-amber-700 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Processing..." : "Create Vendor Account"}
        </button>
      </form>
    </div>
  );
}
