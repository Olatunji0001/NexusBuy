import Image from "next/image";
import Link from "next/link";
import Form from "@/component/login-form";

export default function Account() {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Side (Image) — Only visible above 880px */}
      <div className="hidden max-[880px]:hidden lg:block lg:w-1/2">
        <Image
          src={"/login-img.jpg"}
          alt="Login background"
          width={1000}
          height={1000}
          priority
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side (Form) — Full width on mobile, half on larger screens */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 min-h-screen">
        <Form />
      </div>
    </div>
  );
}
