import Image from "next/image";
import Link from "next/link";
import Form from "@/component/login-form";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";

export default function Account() {
  return (
    <>
      <div>
        <div className="flex">
          <div className="w-[50%]">
            <Image
              src={"/login-img.jpg"}
              alt=""
              height={100000}
              width={100000}
              priority={true}
              className="w-[100%] h-[100vh] object-cover"
            />
          </div>
          <div className="p-10 w-[50%] mx-auto container h-[100vh] content-center">
            <div className="place-items-center">
              <Link href={"/"}>
                <Image
                  src={"/Logo.png"}
                  alt=""
                  width={1000}
                  height={100}
                  className="w-[200px]"
                />
              </Link>
              <p>Sign in to your account</p>
            </div>
            <Form />
            <div className="mt-7">
              <div className="relative flex items-center justify-center my-8">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-600 font-medium">
                  Or sign in with
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <div className="flex justify-around mb-10">
                <button className="outline p-1 rounded-sm cursor-pointer hover:translate-y-0.5">
                  <FcGoogle className="text-[30px] w-[100px]"/>
                </button>
                <button className="outline p-1 rounded-sm cursor-pointer hover:translate-y-0.5">
                  <FaFacebookF className="text-[30px] w-[100px]" />
                </button>
              </div>
              <p className="text-center mt-10">
                New here?{" "}
                <Link href={"/Sign-up"} className="text-orange-600 font-semibold">
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
