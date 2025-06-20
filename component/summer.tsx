import Image from "next/image";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

export default function Summer() {
  return (
    <>
      <div className="bg-[#F4F4F5] pt-[50px] pb-[50px] mt-[50px]">
        <div className="w-[90%] container mx-auto">
          <h1 className="text-[30px] font-bold mb-5">SPRING/SUMMER 2021</h1>
          <div className="flex gap-5">
            <div>
              <Image
                src={"/summer1.jpg"}
                alt=""
                width={10000}
                height={10000}
                className="w-[400px] h-[195px] object-cover"
              />
              <div className="ml-0.5">
                <p className="text-[10px] break-words">gucci</p>
                <p className="text-[13px] brake-words">shoe</p>
                <p className="text-[14px]"></p>
                <p>
                  <Image src={"/list.png"} width={100} height={100} alt="" />
                </p>
                <div className="flex items-center gap-5">
                  <p>75,000 $</p>
                  <p className="line-through text-[12px] text-gray-400">
                    121,000 $
                  </p>
                </div>
                <p className="flex w-[60px]">
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStarHalf />
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src={"/summer2.jpg"}
                alt=""
                width={10000}
                priority
                height={10000}
                className="w-[180px] h-[195px] object-cover"
              />
              <div className="ml-0.5">
                <p className="text-[10px] break-words">gucci</p>
                <p className="text-[13px] brake-words">shoe</p>
                <div className="flex items-center gap-5">
                  <p className="text-[14px]">75,000 $</p>
                  <p className="line-through text-[12px] text-gray-400">
                    121,000 $
                  </p>
                </div>
                <p></p>
                <p className="flex w-[60px]">
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStarHalf />
                </p>
                <p className="absolute top-2 right-2 bg-[#FFFFFF] p-2">
                  <FaRegHeart />
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src={"/summer3.png"}
                alt=""
                width={10000}
                height={10000}
                className="w-[180px] h-[195px] object-cover"
              />
              <div className="ml-0.5">
                <p className="text-[10px] break-words">gucci</p>
                <p className="text-[13px] brake-words">shoe</p>
                <div className="flex items-center gap-5">
                  <p className="text-[14px]">75,000 $</p>
                  <p className="line-through text-[12px] text-gray-400">
                    121,000 $
                  </p>
                </div>
                <p className="flex w-[60px]">
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStarHalf />
                </p>
                <p className="absolute top-2 right-2 bg-[#FFFFFF] p-2">
                  <FaRegHeart />
                </p>
              </div>
              <p></p>
            </div>

            <div>
              <Image
                src={"/summer4.jpg"}
                alt=""
                width={10000}
                height={10000}
                className="w-[400px] h-[195px] object-cover"
              />
              <div className="ml-0.5">
                <p className="text-[10px] break-words">gucci</p>
                <p className="text-[13px] brake-words">shoe</p>
                <p>
                  <Image src={"/list.png"} width={100} height={100} alt="" />
                </p>
                <div className="flex items-center gap-5">
                  <p className="text-[14px]">75,000$</p>
                  <p className="line-through text-[12px] text-gray-400">
                    121,000$
                  </p>
                </div>
                <p className="flex w-[60px]">
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStarHalf />
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
