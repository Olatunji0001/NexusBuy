import Image from "next/image";
import Link from "next/link";
import Form2 from "@/component/sign-up-form";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";

export default function Signup() {
  return (
    <>
      <div className="flex">
        <div className="text-center content-center w-[50%] h-[100vh] bg-amber-600  text-[white] cursor-pointer">
          <div className="animate-[bounce_15s_infinite] p-10 ">
            <div className="animate-pulse">
              <h1 className="text-[50px] font-bold">Join NexusBuy Today</h1>
              <p className="text-[20px] font-semibold">
                Discover amazing products, exclusive deals, and enjoy a premium
                shopping experience with millions of satisfied customers
                worldwide.
              </p>
            </div>
          </div>
        </div>
        <div className="p-5 w-[50%] h-[100vh] content-center">
          <div className="flex justify-center">
            <Link href={"/"}>
              <Image
                src={"/logo2.png"}
                alt=""
                width={10000}
                height={10000}
                className="w-[150px]"
              />
            </Link>
          </div>
          <div className="text-center">
            <p className="text-[25px] mt-1  font-semibold">
              Create your account
            </p>
            <p className="text-[13px] mb-5">
              Start your shopping journey with us
            </p>
          </div>
          <div className="flex justify-center gap-20">
            <Form2 />
          </div>

          <div className="relative flex items-center justify-center my-8">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-600 font-[15px]">
              Or sign in with
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="flex justify-around mb-5">
            <button className="outline p-1 rounded-sm cursor-pointer hover:translate-y-0.5">
              <FcGoogle className="text-[20px] w-[90px]" />
            </button>
            <button className="outline p-1 rounded-sm cursor-pointer hover:translate-y-0.5">
              <FaFacebookF className="text-[20px] w-[90px]" />
            </button>
          </div>
          <p className="text-center mt-7">
            Already have an account?{" "}
            <Link
              href={"/Login-and-Sign-up"}
              className="text-orange-600 font-semibold"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
