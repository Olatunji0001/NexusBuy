import VendorForm from "./vendorsFrom";

export default function Signup() {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Promo Section - Hidden on screens <1024px */}
      <div className="hidden lg:flex w-full lg:w-1/2 bg-amber-600 text-white justify-center items-center text-center p-10 ">
        <div className="animate-[bounce_15s_infinite]">
          <div className="animate-pulse max-w-md">
            <h1 className="text-4xl font-bold mb-4">Join NexusBuy Today</h1>
            <p className="text-lg font-medium">
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
