"use client";
import Image from "next/image";
import img1 from "@/public/accesories1.jpg";
import img2 from "@/public/accesories2.jpg";
import img3 from "@/public/accesories3.jpg";
import img4 from "@/public/accesories4.jpg";
import recommend2 from "@/public/recommend2.jpg";
import recommend5 from "@/public/recommend5.jpg";
import React from "react";
import Slider from "react-slick";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import Product from "./type";


const Products: Product[] = [
  {
    id: 1,
    name: "Shoe",
    brand: "Gucci",
    image: img1,
    price: "70$",
    oldPrice: "50$",
  },
  {
    id: 2,
    name: "Shoe",
    brand: "Gucci",
    image: img3,
    price: "80$",
    oldPrice: "60$",
  },
  {
    id: 3,
    name: "Shoe",
    brand: "Gucci",
    image: recommend2,
    price: "90$",
    oldPrice: "70$",
  },
  {
    id: 4,
    name: "Shoe",
    brand: "Gucci",
    image: img2,
    price: "100$",
    oldPrice: "80$",
  },
  {
    id: 5,
    name: "Shoe",
    brand: "Gucci",
    image: recommend5,
    price: "100$",
    oldPrice: "80$",
  },
  {
    id: 6,
    name: "Shoe",
    brand: "Gucci",
    image: img4,
    price: "100$",
    oldPrice: "80$",
  },
];

export default function Accesories() {
  const play = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6, // show 6 0bject in the first place
    slidesToScroll: 1, // bring put one object
    autoplay: true, // Auto-play enabled
    autoplaySpeed: 4000, // 3-second delay
    pauseOnHover: true, // Pause on hover
  };
  return (
    <>
      <div className="w-[90%] mx-auto mt-10 container">
        <h1 className="text-[30px] font-bold mb-5">NEW IN... ACCESORIES</h1>
        <Slider {...play}>
          {Products.map((pro) => (
            <div key={pro.id.toString()}>
              <div className="relative w-[180px]">
                <Image
                  src={pro.image}
                  alt=""
                  className="h-[195px] w-[180px] rounded-sm object-cover"
                />
                <button className="absolute top-2 right-2 bg-[#FFFFFF] p-2 cursor-pointer">
                  <FaRegHeart />
                </button>
              </div>
              <div className="ml-[3px]">
                <p className="text-[10px] break-words">{pro.brand}</p>
                <p className="text-[13px] brake-words">{pro.name}</p>
                <div className="flex gap-7 items-center">
                  <p className="text-[14px]">{pro.price}</p>
                  <p className="line-through text-[12px] text-gray-400">
                    {pro.oldPrice}
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
          ))}
        </Slider>
      </div>
    </>
  );
}
