"use client";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

export type Store = {
  _id: string;
  brandName: string;
  focus: string;
  about: string;
  img: string;
  product: Product[];
};

export default function Stores({ stores }: { stores: Store[] }) {
  if (!stores || stores.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-xl font-medium text-gray-500">No stores found</p>
        <p className="text-gray-400 mt-2">Try a different search or category</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {stores.map((store) => (
        <div
          key={store._id}
          className="rounded-xl bg-white shadow hover:shadow-lg hover:translate-y-0.5 transition-all duration-200"
        >
          {/* Image */}
          {store.img && (
            <div className="relative w-full h-36 sm:h-40 md:h-48 lg:h-35 rounded-t-xl overflow-hidden">
              <Image
                src={store.img}
                alt={store.brandName || "Store Image"}
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#26BAEF] font-bold text-lg shadow">
                {store.brandName?.charAt(0).toUpperCase() || "S"}
              </div>
            </div>
          )}

          {/* Info */}
          <div className="p-3">
            <h2 className="text-xl font-semibold text-gray-800">
              {store.brandName}
            </h2>
            <p className="text-sm text-gray-500">{store.focus}</p>
            <p className="mt-2 text-gray-700 text-sm line-clamp-3">
              {store.about}
            </p>

            {/* Stats */}
            <div className="mt-4 flex justify-between text-center">
              <div>
                <p className="font-bold">{store.product?.length || 0}</p>
                <p className="text-xs text-gray-500">Products</p>
              </div>
              <div>
                <p className="font-bold">100</p>
                <p className="text-xs text-gray-500">Sales</p>
              </div>
              <div>
                <p className="font-bold flex items-center justify-center gap-1">
                  4.5 <FaStar className="text-amber-500" />
                </p>
                <p className="text-xs text-gray-500">Rating</p>
              </div>
            </div>

            {/* Visit Button */}
            <div className="mt-5 text-center">
              <Link
                href={`/product/${store._id}`}
                className="inline-block bg-[#26BAEF] hover:bg-[#1da7d4] text-white px-4 py-2 rounded-lg text-sm font-medium transition"
              >
                Visit Store
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
