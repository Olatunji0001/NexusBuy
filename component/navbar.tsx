import Link from "next/link";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { PiMapPinLine } from "react-icons/pi";
import { GiSelfLove } from "react-icons/gi";
import { CiUser } from "react-icons/ci";
import { IoBagAdd } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import Image from "next/image";

export default function Head() {
  return (
    <>
      <div>
        <div className="flex justify-between py-[8px] w-[1200px] mx-auto items-center">
          <div>
            <Link href={"/"}>
              <Image
                src={"/Logo.png"}
                alt=""
                width={1000}
                priority
                height={100}
                className="w-[150px] h-[50px] object-contain"
              />
            </Link>
          </div>
          <div className="flex gap-80">
            <div className="">
              <ul className="flex gap-10">
                <li>
                  <Link
                    href={"/Contact-Support"}
                    className="flex items-center gap-[3px] text-[17px] "
                  >
                    <MdOutlineHeadsetMic />
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/store"}
                    className="flex items-center gap-[3px] text-[17px] "
                  >
                    <PiMapPinLine />
                    Find a store
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex">
              <Link href={"/Liked-Products"} className="pl-3 text-[20px]">
                <GiSelfLove />
              </Link>
              <Link href={"/login-and-signup"} className="pl-3 text-[20px]">
                <CiUser />
              </Link>
              <Link href={""} className="pl-3 text-[20px]">
                <IoBagAdd />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-10 w-[1200px] mt-2 mx-auto border-b-1 text-[15px]">
            <h1>
              <Link href={""}>WOMEN</Link>
            </h1>
            <h1>
              <Link href={""}>MEN</Link>
            </h1>
            <h1>
              <Link href={""}>KIDS</Link>
            </h1>
          </div>
        </div>
        <div className="flex justify-between w-[1200px] mx-auto pt-2 items-center">
          <div className="flex gap-7 text-[13px]">
            <h1>
              <Link href={""}>SALE</Link>
            </h1>
            <h1>
              <Link href={""}>NEW IN</Link>
            </h1>
            <h1>
              <Link href={""}>CLOTHING</Link>
            </h1>
            <h1>
              <Link href={""}>SHOES</Link>
            </h1>
            <h1>
              <Link href={""}>ACCESSORIES</Link>
            </h1>
            <h1>
              <Link href={""}>BRANDS</Link>
            </h1>
          </div>
          <div className="flex items-center outline p-1 gap-2 w-[300px] h-[30px] justify-center rounded-sm">
            <button className="cursor-pointer p-2">
              <IoIosSearch />
            </button>
            <input
              type="text"
              placeholder="Search products, articles, FAQ"
              className="w-[13rem] focus:outline-none"
            />
            <button className="cursor-pointer p-2">
              <MdOutlineKeyboardVoice />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
