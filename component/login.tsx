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
              <div className="text-center mt-10 flex items-center justify-center">
                <p className="mr-1">New here? Join as a</p>
                <Link
                  href="/vendors-account"
                  className="text-orange-600 font-semibold hover:underline ml-1"
                >
                  Vendor
                </Link>
                <span className="mx-2">or</span>
                <Link
                  href="/sign-up"
                  className="text-orange-500 font-medium hover:underline"
                >
                  Customer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
