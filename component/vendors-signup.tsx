import Image from "next/image";
import Link from "next/link";
import VendorForm from "./vendorsFrom";

export default function Signup() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="text-center content-center w-[50%] h-[100vh] bg-amber-600  text-[white] cursor-pointer">
        <div className="animate-[bounce_15s_infinite] p-10 ">
          <div className="animate-pulse">
            <h1 className="text-[50px] font-bold">Join NexusBuy Today</h1>
            <p className="text-[20px] font-semibold">
              Empower your business with a global platform, seamless selling
              tools, and access to millions of eager shoppers ready to discover
              your products.
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-1/2 flex flex-col justify-center items-center p-6">
        <Link href="/" className="mb-3">
          <Image
            src="/logo2.png"
            alt="NexusBuy Logo"
            width={120}
            height={120}
            className="w-[150px] h-auto"
          />
        </Link>

        <div className="text-center">
          <p className="text-2xl font-semibold">Create your account</p>
          <p className="text-sm text-gray-600">
            Start selling with us — boost your business.
          </p>
        </div>

        <div className="w-full ">
          <VendorForm />
        </div>

        <p className="text-sm mt-5">
          Already have an account?{" "}
          <Link
            href="/Login-and-Sign-up"
            className="text-orange-600 font-semibold hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
