"use client"; // Required for client-side interactivity

import { useParams } from "next/navigation";
import { arrStore } from "@/component/stores";
import Image from "next/image";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function StorePage() {
  const params = useParams();
  const storeId = params.storeId as string; // Type assertion for TypeScript

  // Find the store
  const store = arrStore.find((store) => store.id === Number(storeId));

  // Handle store not found

  if (!store) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold">Store not found</h1>
        <p className="text-gray-600 mt-2">The requested store does not exist</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Store Header */}
      <div className="flex items-center gap-6 mb-3">
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-[#26BAEF]">
          {store.brandName.charAt(0)}
        </div>
        <div>
          <h1 className="text-3xl font-bold">{store.brandName}</h1>
          <p className="text-gray-500">{store.focus}</p>
          <div className="flex items-center gap-1 mt-1">
            <FaStar className="text-amber-500" />
            <FaStar className="text-amber-500" />
            <FaStar className="text-amber-500" />
            <FaStar className="text-amber-500" />
            <FaStarHalfAlt className="text-amber-500" />
            <span className="ml-1 text-gray-600">4.5 (100 reviews +)</span>
          </div>
        </div>
      </div>

      {/* Store Description */}
      <p className="mb-5 text-lg">{store.about}</p>

      {/* Products Grid */}
      <h2 className="text-2xl font-bold mb-5">
        Available Products ({store.product.length})
      </h2>
      {store.product.length > 0 ? (
        <div className="grid grid-cols-5 gap-2">
          {store.product.map((product) => (
            <div
              key={product.id}
              className=""
            >
              <div className="">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-[200px] h-[200px] rounded-sm"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl">{product.name}</h3>
                <p className="text-gray-600 my-2">{product.description}</p>
                <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                <button className="mt-3 bg-[#26BAEF] text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products available in this store</p>
      )}
    </div>
  );
}
