"use client";
import Image from "next/image";
import recommend1 from "@/public/recommend1.jpg";
import recommend2 from "@/public/recommend2.jpg";
import recommend3 from "@/public/recommend3.jpg";
import recommend4 from "@/public/product6.jpg";
import recommend5 from "@/public/recommend5.jpg";
import recommend6 from "@/public/recommend6.jpg";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Slider from "react-slick";
import { useState } from "react";
import Product from "./type";

const summerProducts: Product[] = [
  {
    id: 1,
    name: "Shoe",
    brand: "Gucci",
    image: recommend1,
    price: "70$",
    oldPrice: "50$",
  },
  {
    id: 2,
    name: "Shoe",
    brand: "Gucci",
    image: recommend2,
    price: "80$",
    oldPrice: "60$",
  },
  {
    id: 3,
    name: "Shoe",
    brand: "Gucci",
    image: recommend3,
    price: "90$",
    oldPrice: "70$",
  },
  {
    id: 4,
    name: "Shoe",
    brand: "Gucci",
    image: recommend4,
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
    image: recommend6,
    price: "100$",
    oldPrice: "80$",
  },
];

export default function Recommend() {
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
  const [liked, setLiked] = useState<number[]>([])

  const Liked = (productId:number) => {
    if (liked.includes(productId))
    {setLiked(liked.filter((id) => (id !== productId)))}
    else{setLiked([...liked, productId])}
  } 

  return (
    <>
      <div className="w-[90%] mx-auto mt-10 container">
        <h1 className="text-[30px] font-bold mb-5">RECOMMENDED FOR YOU</h1>
        <Slider {...play}>
          {summerProducts.map((summer) => (
            <div key={summer.id.toString()}>
              <div className="relative w-[180px]">
                <Image
                  className="h-[195px] w-[180px] rounded-sm object-cover"
                  alt=""
                  src={summer.image}
                />
                <button onClick={() => Liked(summer.id)} className={`absolute top-2 right-2 rounded-full p-2 cursor-pointer transition-all duration-00 hover:scale-110 ${
                  liked.includes(summer.id)
                   ? "bg-red-500 text-white"
                   : "bg-white text-gray-600"
                }`}>
                  {liked.includes(summer.id) ? (
                    <FaHeart className="w-5 h-5 " />
                  ) :(<FaRegHeart className="w-5 h-5" />)}
                </button>
              </div>
              <div className="ml-[3px]">
                <p className="text-[10px] break-words">{summer.brand}</p>
                <p className="text-[13px] brake-words">{summer.name}</p>
                <div className="flex gap-7 items-center">
                  <p className="text-[14px]">{summer.price}</p>
                  <p className="line-through text-[12px] text-gray-400">
                    {summer.oldPrice}
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
