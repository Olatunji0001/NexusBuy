"use client";
import { useState } from "react";

export default function Form2() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [conPassword, setConPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const btn = () => {
    if (!firstName) {
      setError("Enter your first name");
      return;
    }
    if (!lastName) {
      setError("Enter your last name");
      return;
    }
    if (!email) {
      setError("Enter your email");
      return;
    }
    if (!email.endsWith("@gmail.com")) {
      setError(`Your email doesn't end with "@gmail.com"`);
      return;
    }
    if (!password) {
      setError("Enter your password");
      return;
    }
    if (password.length! < 8) {
      setError("Password lenght must be grater than 8");
      return;
    }
    if (!conPassword) {
      setError("Confirm password is empty");
      return;
    }
    if (!(password === conPassword)) {
      setError("Password and confirm password not the same");
      return;
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConPassword("");
    setError("");
  };

  return (
    <>
      <div>
        <form action="" onSubmit={event =>  event.preventDefault()}>
          <div>
            {error !== "" && (
              <div className="p-1 text-center bg-red-100 rounded-sm mb-3 text-red-600">
                {error}
              </div>
            )}
          </div>
          <div className="flex gap-5 mb-3">
            <div className="grid grid-cols-1">
              <label htmlFor="" className="text-[12px]">
                First Name
              </label>
              <input
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
                type="text"
                placeholder="Enter first name"
                className="outline w-[200px]  rounded-sm mt-0.5 text-[12px] p-1.5"
              />
            </div>
            <div className="grid grid-cols-1">
              <label htmlFor="" className="text-[12px]">
                Last Name
              </label>
              <input
                value={lastName}
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
                type="text"
                placeholder="Enter last name"
                className="outline w-[200px] p-1.5 rounded-sm mt-0.5 text-[12px]"
              />
            </div>
          </div>

          <div className="flex gap-5 mb-3">
            <div className="grid grid-cols-1">
              <label htmlFor="" className="text-[12px]">
                Email Address
              </label>
              <input
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                type="text"
                placeholder="Enter first email"
                className="outline w-[200px] p-1.5 rounded-sm mt-0.5 text-[12px]"
              />
            </div>

            <div className="grid grid-cols-1">
              <label htmlFor="" className="text-[12px]">
                Password
              </label>
              <input
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                type="password"
                placeholder="Enter password"
                className="outline w-[200px] p-1.5 rounded-sm mt-0.5 text-[12px] "
              />
            </div>

          </div>
          <div className="flex gap-5">
            <div className="grid grid-cols-1">
              <label htmlFor="" className="text-[12px]">
                Confirm Password
              </label>
              <input
                value={conPassword}
                onChange={(event) => {
                  setConPassword(event.target.value);
                }}
                type="password"
                placeholder="Confirm your password"
                className="outline w-[200px] p-1.5 rounded-sm mt-0.5 text-[12px]"
              />
            </div>
          </div>
        </form>
        <div className="flex justify-center mt-10">
          <button
            onClick={btn}
            className="p-1 w-[130px] bg-amber-600 rounded-sm cursor-pointer text-white text-[14px] hover:translate-y-0.5"
          >
            Create Account
          </button>
        </div>
      </div>
    </>
  );
}
