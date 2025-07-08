import VendorForm from "./vendorsFrom";

export default function Signup() {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Promo Section - Hidden on screens <1024px */}
      <div className="hidden  lg:flex w-1/2 justify-center items-center bg-amber-600 text-white text-center">
        <div className="p-10 animate-[bounce_15s_infinite]">
          <div className="animate-pulse">
            <h1 className="text-[32px] lg:text-[45px] font-bold mb-4 leading-tight">
              Join NexusBuy Today
            </h1>
            <p className="text-lg lg:text-xl font-medium">
              Empower your business with a global platform, seamless selling
              tools, and access to millions of eager shoppers ready to discover
              your products.
            </p>
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center min-h-screen p-6">
        <VendorForm />
      </div>
    </div>
  );
}
