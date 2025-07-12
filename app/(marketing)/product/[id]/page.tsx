"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

type Product = {
  _id: string;
  productName: string;
  productPrice: string;
  discountPrice: string;
  productImage: {
    url: string;
  };
};

type Store = {
  _id: string;
  storeName: string;
  aboutStore: string;
  storeCategory: string[];
  storeImage: {
    url: string;
  };
};

export default function VisitStorePage() {
  const { id } = useParams();
  const [store, setStore] = useState<Store | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStoreAndProducts = async () => {
      try {
        const storeRes = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/stores/${id}`
        );
        if (!storeRes.ok) throw new Error("Failed to fetch store");
        const storeData = await storeRes.json();
        setStore(storeData);

        const productsRes = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/stores/${id}/products`
        );
        if (!productsRes.ok) throw new Error("Failed to fetch products");
        const productData = await productsRes.json();
        setProducts(productData);
      } catch (error) {
        console.error("Error:", error);
        setError("Failed to load store or products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchStoreAndProducts();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="w-[95%] max-w-6xl mx-auto mt-10">
      {error && <p className="text-center text-red-600 mb-5">{error}</p>}

      {/* Store Info */}
      {store && (
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-10 border-b pb-6 bg-white rounded-xl p-4 shadow">
          <div className="w-32 h-32 relative rounded-full border-4 border-white shadow-md ring-2 ring-amber-500 group overflow-hidden bg-gray-100">
            <Image
              src={store.storeImage?.url}
              alt="Store Logo"
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-full"
              sizes="(max-width: 768px) 128px, 128px"
            />
          </div>

          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-800">
              {store.storeName}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {store.storeCategory?.join(", ")}
            </p>
            <p className="mt-2 text-gray-700">{store.aboutStore}</p>
          </div>
        </div>
      )}

      {/* Products */}
      <h1 className="text-xl font-semibold text-gray-800 mb-5 text-center">
        Store Products
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">
          This store has no products yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product._id} className="border rounded p-4 shadow">
              <div className="relative h-40 w-full mb-2 rounded overflow-hidden">
                <Image
                  src={product.productImage?.url}
                  alt={product.productName}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="font-bold text-lg">{product.productName}</h2>
              <p className="text-amber-600 font-medium">
                ₦{product.productPrice}
              </p>
              <p className="text-gray-500 text-sm line-through">
                ₦{product.discountPrice}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
