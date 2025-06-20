"use client";
import Link from "next/link";
import { useState } from "react";
export default function Form() {
  const [email, setEmail] = useState<string>("");
  const [password, setPaasword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const submit = () => {
    if (!email) {
      setError("Enter your email");
      return;
    }

    if (!password) {
      setError("Enter your password");
      return;
    }

    setError("");
    setEmail("");
    setPaasword("");
  };

  return (
    <>
      <div className="mt-5">
        <div>
          {error !== "" && <div className="p-1 text-center bg-red-100 rounded-sm text-red-600">{error}</div>}
        </div>
        <form action="" onSubmit={event =>  event.preventDefault()}>
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
              setPaasword(event.target.value);
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
            <Link href={"/Forget-password"} className="text-orange-600 font-semibold">
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
      </div>
    </>
  );
}
