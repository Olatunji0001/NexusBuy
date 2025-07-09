"use client";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

export default function Head() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
  };

  return (
    <div className="mt-5 w-[96%] container mx-auto">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div>
          <div className="w-[95%] mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <Image
              src="/digi5.webp"
              alt="selling products"
              width={800}
              height={600}
              className="w-full md:w-[45%] rounded-md"
            />
            <div className="text-center md:text-left max-w-xl">
              <p className="text-[20px] md:text-[24px] font-semibold text-center md:text-left text-gray-800 max-w-xl">
                Open Your Store on NexusBuy. Reach More. Earn More. Join a
                growing marketplace built for sellers. Easy setup, powerful
                tools, and millions of ready customers waiting. Start selling
                today.
              </p>
              <Link href={"/vendor-account"}>
                <button className="p-2 mt-4 rounded-md cursor-pointer bg-[#1AA8EA] font-medium text-white w-[140px] hover:bg-amber-500 transition">
                  Open Your Store
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Slide 2 */}
        <div>
          <div className="w-[95%] mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <Image
              src="/digi3.webp"
              alt="Shopping Banner"
              width={800}
              height={600}
              className="w-full md:w-[45%] rounded-md"
            />
            <div className="text-center md:text-left max-w-xl">
              <p className="text-[20px] md:text-[24px] font-semibold text-gray-800">
                Shop the store of your dreams — where every click brings joy.
                Discover what you love, curated just for you. Fast, easy, and
                delightful shopping. Your perfect store awaits. Start exploring
                now!
              </p>
              <Link href="/store">
                <button className="p-2 mt-4 rounded-md cursor-pointer bg-[#1AA8EA] font-medium text-white w-[140px] hover:bg-amber-500 transition">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
