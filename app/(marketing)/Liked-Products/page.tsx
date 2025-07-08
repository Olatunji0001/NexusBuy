'use client'
import { useWishlistHook } from "@/context/wishlistContext";
import Image from "next/image";
import { FaHeart, FaTimes } from "react-icons/fa";

export default function Liked() {
  const { state, dispatch } = useWishlistHook();

  const handleRemove = (productId: number) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-5 w-[90%] mx-auto mt-5">Your Liked Products</h1>
      {state.likedProducts.length === 0 ? (
        <p className="w-[90%] mx-auto text-center text-[30px] mb-12 animate-[bounce_5s_infinite]">You haven&#39;t liked any products yet</p>

      ) : (
        <div className="grid grid-cols-6 w-[90%] mx-auto gap-5">
          {state.likedProducts.map((product) => (
            <div key={product.id} className="p-2 rounded-lg relative group">
              <div className="relative h-[195px] w-[180px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded"
                />
                {/* Remove button (appears on hover) */}
                <button
                  onClick={() => handleRemove(product.id)}
                  className="absolute top-2 right-2 bg-white text-red-500 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-500 hover:text-white"
                  title="Remove from wishlist"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-3">
                <h3 className="font-semibold">{product.brand}</h3>
                <p className="text-gray-600">{product.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-bold">{product.price}</span>
                  <span className="text-sm line-through text-gray-400">
                    {product.oldPrice}
                  </span>
                </div>
                {/* Always visible unlike button */}
                <button
                  onClick={() => handleRemove(product.id)}
                  className="mt-2 flex items-center gap-1 text-red-500 hover:text-red-700 text-sm"
                >
                  <FaHeart className="w-4 h-4" />
                  <span>Unlike</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}