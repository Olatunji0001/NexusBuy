"use client";
import { useState } from "react";
import Image from "next/image";
import product1 from "@/public/product1.jpg";
import product2 from "@/public/product2.jpg";
import product3 from "@/public/product3.jpg";
import product4 from "@/public/product4.jpg";
import product5 from "@/public/product5.jpg";
import product6 from "@/public/product6.jpg";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Slider from "react-slick";
import { useWishlistHook } from "@/context/wishlistContext";
import type Product from "./type";
import Link from "next/link";

const products: Product[] = [
  {
    id: 1,
    name: "Shoe",
    price: "200$",
    image: product1,
    oldPrice: "150$",
    brand: "Gucci",
  },
  {
    id: 2,
    name: "Shoe",
    price: "300$",
    image: product2,
    oldPrice: "250$",
    brand: "Gucci",
  },
  {
    id: 3,
    name: "Shoe",
    price: "400$",
    image: product3,
    oldPrice: "350$",
    brand: "Gucci",
  },
  {
    id: 4,
    name: "Shoe",
    price: "500$",
    image: product4,
    oldPrice: "450$",
    brand: "Gucci",
  },
  {
    id: 5,
    name: "Shoe",
    price: "600$",
    image: product5,
    oldPrice: "550$",
    brand: "Gucci",
  },
  {
    id: 6,
    name: "Shoe",
    price: "700$",
    image: product6,
    oldPrice: "650$",
    brand: "Gucci",
  },
];

export default function Products() {
  const { state, dispatch } = useWishlistHook();
  const [notification, setNotification] = useState<string | null>(null);

  const toggleLike = (product: Product) => {
    const alreadyLiked = state.likedProducts.some((p) => p.id === product.id);

    if (alreadyLiked) {
      dispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: product.id, // Correct: sending number for removal
      });
    } else {
      dispatch({
        type: "ADD_TO_WISHLIST",
        payload: product, // Correct: sending Product object for addition
      });
    }

    showNotification(
      `${product.name} ${alreadyLiked ? "removed from" : "added to"} wishlist.`
    );
  };

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
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
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 500, settings: { slidesToShow: 2 } },
      { breakpoint: 380, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      {notification && (
        <div className="fixed top-5 right-5 bg-amber-900 text-white px-4 py-2 rounded shadow-lg z-50">
          {notification}
        </div>
      )}

      <div className="w-[95%] mx-auto mt-10 container pb-23">
        <div className="ml-2 mb-2">
          <h1 className="text-[24px] md:text-[30px] font-bold">NEW DROPS</h1>
          <Link
            href="/store"
            className="text-[18px] md:text-[24px] font-bold text-amber-500 hover:underline mr-1"
          >
            View All Stores
          </Link>
        </div>

        <Slider {...play}>
          {products.map((product) => (
            <div key={product.id} className="px-2">
              <div className="relative w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="rounded-sm object-cover w-full h-[180px] md:h-[200px]"
                />
                <button
                  onClick={() => toggleLike(product)}
                  className={`absolute top-2 right-2 p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                    state.likedProducts.some((p) => p.id === product.id)
                      ? "bg-red-500 text-white"
                      : "bg-white text-gray-600"
                  }`}
                  title="Toggle wishlist"
                >
                  {state.likedProducts.some((p) => p.id === product.id) ? (
                    <FaHeart className="w-5 h-5" />
                  ) : (
                    <FaRegHeart className="w-5 h-5" />
                  )}
                </button>
              </div>

              <div className="mt-2 text-[12px] md:text-[13px]">
                <p className="text-gray-500">{product.brand}</p>
                <p className="font-semibold">{product.name}</p>
                <div className="flex text-yellow-500 text-sm mt-1">
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStarHalf />
                </div>
                <div className="flex gap-4 items-center">
                  <p className="text-[14px]">{product.price}</p>
                  <p className="line-through text-gray-400 text-[12px]">
                    {product.oldPrice}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
