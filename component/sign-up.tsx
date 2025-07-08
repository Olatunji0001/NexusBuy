import Image from "next/image";
import Link from "next/link";
import Form2 from "@/component/sign-up-form";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";

export default function Signup() {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
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

          <p className="text-center mt-7">
            Already have an account?{" "}
            <Link
              href={"/Login-and-Sign-up"}
              className="text-orange-600 font-semibold hover:underline mr-1"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
