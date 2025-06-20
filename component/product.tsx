"use client";
import Image from "next/image";
import product1 from "@/public/product1.jpg";
import product2 from "@/public/product2.jpg";
import product3 from "@/public/product3.jpg";
import product4 from "@/public/product4.jpg";
import product5 from "@/public/product5.jpg";
import product6 from "@/public/product6.jpg";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Slider from "react-slick";
import { useState } from "react";
import Product from "./type";
import { useWishlistHook } from "@/context/wishlistContext";

const products: Product[] = [
  {
    id: 1,
    name: "Shoe",
    price: "200$",
    image: product1,
    oldPrice: "150",
    brand: "gucci",
  },
  {
    id: 2,
    name: "Shoe",
    price: "300$",
    image: product2,
    oldPrice: "250$",
    brand: "gucci",
  },
  {
    id: 3,
    name: "Shoe",
    price: "400$",
    image: product3,
    oldPrice: "350$",
    brand: "gucci",
  },
  {
    id: 4,
    name: "Shoe",
    price: "500$",
    image: product4,
    oldPrice: "450$",
    brand: "gucci",
  },
  {
    id: 5,
    name: "Shoe",
    price: "600$",
    image: product5,
    oldPrice: "550$",
    brand: "gucci",
  },
  {
    id: 6,
    name: "Shoe",
    price: "700$",
    image: product6,
    oldPrice: "650$",
    brand: "gucci",
  },
];

export default function Products() {
  const { state, dispatch } = useWishlistHook();

  const toggleLike = (product: Product) => {
    if (state.likedProducts.some((p) => p.id === product.id)) {
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product.id });
    } else {
      dispatch({ type: "ADD_TO_WISHLIST", payload: product });
    }
  };
  const play = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <>
      <div className="w-[90%] mx-auto mt-10 container">
        <h1 className="text-[30px] font-bold mb-5">TRENDING NOW</h1>
        <Slider {...play}>
          {products.map((product) => (
            <div key={product.id.toString()}>
              <div className="inline-block relative w-[180px]">
                <Image
                  src={product.image}
                  alt=""
                  className="h-[195px] w-[180px] rounded-sm object-cover transition-transform duration-600 hover:scale-102 origin-center"
                />
                <button
                  onClick={() => toggleLike(product)}
                  className={`absolute top-2 right-2 rounded-full p-2 cursor-pointer transition-all duration-300 hover:scale-110 ${
                    state.likedProducts.some((p) => p.id === product.id)
                      ? "bg-red-500 text-white"
                      : "bg-white text-gray-600"
                  }`}
                  title="Add to wishlist"
                >
                  {state.likedProducts.some((p) => p.id === product.id) ? (
                    <FaHeart className="w-5 h-5" />
                  ) : (
                    <FaRegHeart className="w-5 h-5" />
                  )}
                </button>
              </div>
              <div className="ml-[3px]">
                <p className="text-[10px] break-words">{product.brand}</p>
                <p className="text-[13px] brake-words">{product.name}</p>
                <div className="flex gap-7 items-center">
                  <p className="text-[14px]">{product.price}</p>
                  <p className="line-through text-[12px] text-gray-400">
                    {product.oldPrice}
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

// {products[0] && ( // Checks if it exists
//                 <div key={products[0].id}>
//                 <Image
//                 src={products[0].image}
//                 alt=""
//                 className="h-[195px] w-[180px] rounded-sm object-cover"
//                 />
//                 <div>
//                 {products[0].brand}
//                 {products[0].name}
//                 <div>
//                 {products[0].price}
//                 {products[0].oldPrice}
//                 </div>
//                 </div>
//                 </div>
//               )}
// ? : = "If-Else Shortcut"
//? means "then"
//: means "else"
