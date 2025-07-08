import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import recommend1 from "@/public/recommend1.jpg";
import recommend2 from "@/public/recommend2.jpg";
import recommend3 from "@/public/recommend3.jpg";
import recommend4 from "@/public/product4.jpg";
import recommend5 from "@/public/recommend5.jpg";
import recommend6 from "@/public/recommend6.jpg";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: typeof recommend1; // Using the same image type as before
};

export type Store = {
  id: number;
  brandName: string;
  focus: string;
  about: any;
  img: typeof recommend1;
  product: Product[];
};

export const arrStore: Store[] = [
  {
    id: 1,
    brandName: "Tee Store",
    focus: "Food",
    about:
      "Premium foods, spices, and gourmet ingredients from around the world. Elevate your culinary experience",
    img: recommend6,
    product: [
      {
        id: 101,
        name: "Organic Spice Mix",
        price: 12.99,
        description: "A blend of organic spices from India",
        image: recommend1,
      },
      {
        id: 102,
        name: "Gourmet Olive Oil",
        price: 24.99,
        description: "Extra virgin olive oil from Italy",
        image: recommend2,
      },
    ],
  },
  {
    id: 2,
    brandName: "Musbau Store",
    focus: "Electronics",
    about:
      "Premium foods, spices, and gourmet ingredients from around the world. Elevate your culinary experience",
    img: recommend2,
    product: [],
  },
  {
    id: 3,
    brandName: "Tolu Store",
    focus: "Fashion",
    about:
      "Premium foods, spices, and gourmet ingredients from around the world. Elevate your culinary experience",
    img: recommend3,
    product: [],
  },
  {
    id: 4,
    brandName: "Kenny Store",
    focus: "Home & Garden",
    about:
      "Premium foods, spices, and gourmet ingredients from around the world. Elevate your culinary experience",
    img: recommend4,
    product: [],
  },
  {
    id: 5,
    brandName: "Azhu Store",
    focus: "Sports",
    about:
      "Premium foods, spices, and gourmet ingredients from around the world. Elevate your culinary experience",
    img: recommend5,
    product: [],
  },
  {
    id: 6,
    brandName: "Sagittaerys_Store",
    focus: "Books",
    about:
      "Premium foods, spices, and gourmet ingredients from around the world. Elevate your culinary experience",
    img: recommend6,
    product: [],
  },
  {
    id: 7,
    brandName: "Martinelo_Store",
    focus: "Beauty",
    about:
      "Premium foods, spices, and gourmet ingredients from around the world. Elevate your culinary experience",
    img: recommend6,
    product: [
      {
        id: 101,
        name: "Organic Spice Mix",
        price: 12.99,
        description: "A blend of organic spices from India",
        image: recommend1,
      }, 
      {
        id: 102,
        name: "Gourmet Olive Oil",
        price: 24.99,
        description: "Extra virgin olive oil from Italy",
        image: recommend2,
      },
    ],
  },
  {
    id: 8,
    brandName: "Moni_Store",
    focus: "Beverage",
    about:
      "Premium foods, spices, and gourmet ingredients from around the world. Elevate your culinary experience",
    img: recommend6,
    product: [],
  },
  {
    id: 9,
    brandName: "Flexible_Store",
    focus: "Baby Products",
    about:
      "Premium foods, spices, and gourmet ingredients from around the world. Elevate your culinary experience",
    img: recommend6,
    product: [],
  },
  {
    id: 10,
    brandName: "NesuxBuy_Store",
    focus: "Toys & Games",
    about:
      "Premium foods, spices, and gourmet ingredients from around the world. Elevate your culinary experience",
    img: recommend6,
    product: [],
  },
  {
    id: 11,
    brandName: "Vogue_Store",
    focus: "Musical Instrument",
    about:
      "Premium foods, spices, and gourmet ingredients from around the world. Elevate your culinary experience",
    img: recommend6,
    product: [],
  },
  {
    id: 12,
    brandName: "Ope_Store",
    focus: "Home & Kitchen",
    about:
      "Premium foods, spices, and gourmet ingredients from around the world. Elevate your culinary experience",
    img: recommend6,
    product: [],
  },
  {
    id: 13,
    brandName: "AJK_Store",
    focus: "Clothing, Shoes & Jewelry",
    about:
      "Premium foods, spices, and gourmet ingredients from around the world. Elevate your culinary experience",
    img: recommend6,
    product: [],
  },
  {
    id: 14,
    brandName: "Ini_Store",
    focus: "Cell Phones & Accessories",
    about:
      "Premium foods, spices, and gourmet ingredients from around the world. Elevate your culinary experience",
    img: recommend6,
    product: [],
  },
  {
    id: 15,
    brandName: "Ru_baby_Store",
    focus: "skin care",
    about:
      "Premium foods, spices, and gourmet ingredients from around the world. Elevate your culinary experience",
    img: recommend6,
    product: [],
  },
];

// function generateStoreName(name: string) {
//   const first = name.split(" ")[0];
//   return first[0].toUpperCase();
// }

export default function Stores({ stores }: { stores: Store[]  }) {
  return (
    <>
      <div>
        {stores.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-xl font-medium text-gray-500">
              No stores found matching your search
            </p>
            <p className="text-gray-400 mt-2">Try different Store Name</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-3">
            {stores.map((store) => (
              <div
                key={store.id.toString()}
                className="outline-1 rounded-xl cursor-pointer mb-3 hover:translate-y-0.5 hover:shadow-[0_0_20px_5px_rgba(245,158,11,0.3)] transition-shadow"
              >
                <div className="h-20 relative rounded-t-xl">
                  <Image
                    src={store.img}
                    alt=""
                    className="h-20 rounded-t-xl object-cover"
                  />
                  <div className="absolute bg-white w-15 rounded-full h-15 text-center content-center top-10 left-10 text-[25px] font-medium text-[#26BAEF]">
                    {store.brandName.charAt(0)}
                  </div>
                </div>
                <div className="p-3">
                  <div className="grid grid-cols-1 leading-none items-center">
                    <p className="text-[20px] font-bold my-2">
                      {store.brandName}
                    </p>
                    <p className="text-[15px] text-gray-400">{store.focus}</p>
                  </div>

                  <div className="my-5">
                    <p className="my-3 break-words">{store.about}</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="grid grid-cols-1 text-center">
                      <p className="font-bold">{store.product.length}</p>
                      <p>PRODUCTS</p>
                    </div>
                    <div className="grid grid-cols-1 text-center">
                      <p className="font-bold">100</p>
                      <p>SALES</p>
                    </div>
                    <div className="grid grid-cols-1 text-center">
                      <p className="font-bold flex items-center gap-1 justify-center">
                        4.5 <FaStar className="text-amber-500" />
                      </p>
                      <p>RATING</p>
                    </div>
                  </div>
                  <div className="mt-5 flex justify-between items-center">
                    <div>
                      <Link href={`/Shop/${store.id}`}>
                        <button className="p-1.5 bg-[#26BAEF] text-white font-medium rounded-sm w-[150px] cursor-pointer hover:translate-y-0.5 hover:bg-amber-500">
                          Visit Store
                        </button>
                      </Link>
                    </div>
                    <div>
                      <p className="text-center">Store Rating</p>
                      <div className="flex gap-1">
                        <FaStar className="text-amber-500" />
                        <FaStar className="text-amber-500" />
                        <FaStar className="text-amber-500" />
                        <FaStar className="text-amber-500" />
                        <FaStarHalfAlt className="text-amber-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
