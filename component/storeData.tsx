import StoreForm from "@/component/storeForm";
export default function StoreData() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Promo Section — hide when screen < 880px */}
      <div className="hidden  lg:flex w-1/2 justify-center items-center bg-amber-600 text-white text-center">
        <div className="p-10 animate-[bounce_15s_infinite]">
          <div className="animate-pulse">
            <h1 className="text-[32px] lg:text-[45px] font-bold mb-4 leading-tight">
              Join NexusBuy Today
            </h1>
            <p className="text-lg lg:text-xl font-medium">
              Create a store that stands out — share your brand, story, and
              products to connect with customers and grow your business
              globally.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section — always visible */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-4">
        <StoreForm />
      </div>
    </div>
  );
}
