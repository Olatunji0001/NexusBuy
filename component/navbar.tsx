"use client";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineHeadsetMic, MdOutlineKeyboardVoice } from "react-icons/md";
import { PiMapPinLine } from "react-icons/pi";
import { GiSelfLove } from "react-icons/gi";
import { CiUser } from "react-icons/ci";
import { IoBagAdd } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Image from "next/image";

export default function Head() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b">
      {/* Top Bar */}
      <div className="flex justify-between items-center py-3 px-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={1000}
            height={100}
            priority
            className="w-[120px] h-[40px] object-contain"
          />
        </Link>

        {/* Desktop Top Right Menu */}
        <div className="hidden lg:flex items-center gap-100">
          <ul className="flex gap-6 text-[15px]">
            <li>
              <Link href="/Contact-Support" className="flex items-center gap-1">
                <MdOutlineHeadsetMic />
                Support
              </Link>
            </li>
            <li>
              <Link href="/store" className="flex items-center gap-1">
                <PiMapPinLine />
                Find a Store
              </Link>
            </li>
          </ul>
          <div className="flex items-center text-[20px] gap-5">
            <Link href="/Liked-Products">
              <GiSelfLove />
            </Link>
            <Link href="/login-and-signup">
              <CiUser />
            </Link>
            <Link href="">
              <IoBagAdd />
            </Link>
          </div>
        </div>

        {/* Hamburger Button for small/medium screens */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden text-[25px]"
        >
          <HiOutlineMenuAlt3 />
        </button>
      </div>

      {/* Desktop Category Nav */}
      <div className="hidden lg:flex gap-8 text-[15px] max-w-screen-xl mx-auto px-4 py-2 border-b">
        <Link href="">WOMEN</Link>
        <Link href="">MEN</Link>
        <Link href="">KIDS</Link>
      </div>

      {/* Desktop Bottom Bar */}
      <div className="hidden lg:flex justify-between items-center max-w-screen-xl mx-auto px-4 py-2">
        <div className="flex gap-6 text-[13px]">
          <Link href="">SALE</Link>
          <Link href="">NEW IN</Link>
          <Link href="">CLOTHING</Link>
          <Link href="">SHOES</Link>
          <Link href="">ACCESSORIES</Link>
          <Link href="">BRANDS</Link>
        </div>
        <div className="flex items-center border p-1 gap-2 w-[300px] h-[35px] rounded-sm">
          <button className="cursor-pointer p-2 text-[18px]">
            <IoIosSearch />
          </button>
          <input
            type="text"
            placeholder="Search products, articles, FAQ"
            className="w-full text-[14px] focus:outline-none"
          />
          <button className="cursor-pointer p-2 text-[18px]">
            <MdOutlineKeyboardVoice />
          </button>
        </div>
      </div>

      {/* Medium Screen Icons (only md) */}
      <div className="hidden md:flex lg:hidden justify-center gap-10 py-3 text-[20px] border-t">
        <Link href="/Liked-Products" className="flex flex-col items-center text-[13px]">
          <GiSelfLove />
          <span>Wishlist</span>
        </Link>
        <Link href="/login-and-signup" className="flex flex-col items-center text-[13px]">
          <CiUser />
          <span>Sign In</span>
        </Link>
        <Link href="/" className="flex flex-col items-center text-[13px]">
          <IoBagAdd />
          <span>Cart</span>
        </Link>
      </div>

      {/* Mobile Bottom Fixed Nav */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white z-30 border-t flex justify-around py-2 text-[13px]">
        <Link href="/Liked-Products" className="flex flex-col items-center">
          <GiSelfLove className="text-[22px]" />
          <span>Wishlist</span>
        </Link>
        <Link href="/login-and-signup" className="flex flex-col items-center">
          <CiUser className="text-[22px]" />
          <span>Sign In</span>
        </Link>
        <Link href="/" className="flex flex-col items-center">
          <IoBagAdd className="text-[22px]" />
          <span>Cart</span>
        </Link>
      </div>

      {/* Mobile Fullscreen Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 p-6 flex flex-col overflow-y-auto pb-28">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-[30px] self-end mb-4"
          >
            &times;
          </button>
          <nav className="flex flex-col gap-5 text-[17px]">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/Contact-Support" onClick={() => setMobileMenuOpen(false)}>Support</Link>
            <Link href="/store" onClick={() => setMobileMenuOpen(false)}>Find a Store</Link>
            <Link href="#" onClick={() => setMobileMenuOpen(false)}>WOMEN</Link>
            <Link href="#" onClick={() => setMobileMenuOpen(false)}>MEN</Link>
            <Link href="#" onClick={() => setMobileMenuOpen(false)}>KIDS</Link>
            <Link href="#" onClick={() => setMobileMenuOpen(false)}>SALE</Link>
            <Link href="#" onClick={() => setMobileMenuOpen(false)}>NEW IN</Link>
            <Link href="#" onClick={() => setMobileMenuOpen(false)}>CLOTHING</Link>
            <Link href="#" onClick={() => setMobileMenuOpen(false)}>SHOES</Link>
            <Link href="#" onClick={() => setMobileMenuOpen(false)}>ACCESSORIES</Link>
            <Link href="#" onClick={() => setMobileMenuOpen(false)}>BRANDS</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
