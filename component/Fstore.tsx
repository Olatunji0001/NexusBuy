"use client";
import { useEffect, useState } from "react";
import Stores, { Store } from "./stores";

export default function FindStore() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [allStores, setAllStores] = useState<Store[]>([]);
  const [filteredStores, setFilteredStores] = useState<Store[]>([]);
  const [showAllCategories, setShowAllCategories] = useState(false);

  const categories = [
    { id: "all", value: "all", label: "All Categories" },
    { id: "electronics", value: "electronics", label: "Electronics & Gadgets" },
    { id: "fashion", value: "fashion", label: "Clothing & Fashion" },
    { id: "home-garden", value: "home & garden", label: "Home & Garden" },
    { id: "sports", value: "sports", label: "Sports & Outdoors" },
    { id: "books", value: "books", label: "Books & Stationery" },
    { id: "beauty", value: "beauty", label: "Beauty & Skincare" },
    { id: "food", value: "food & beverage", label: "Food & Beverages" },
    {
      id: "baby-products",
      value: "baby products",
      label: "Baby Products & Toys",
    },
    { id: "toys-games", value: "toys & games", label: "Toys, Games & Hobbies" },
    { id: "music", value: "musical instrument", label: "Musical Instruments" },
    {
      id: "health-wellness",
      value: "health & wellness",
      label: "Health & Wellness",
    },
    { id: "pet-supplies", value: "pet supplies", label: "Pet Supplies" },
    { id: "automotive", value: "automotive", label: "Automotive & Tools" },
    {
      id: "office-supplies",
      value: "office supplies",
      label: "Office & Stationery",
    },
    { id: "travel", value: "travel", label: "Travel & Luggage" },
    { id: "luxury", value: "luxury items", label: "Luxury Items" },
    { id: "art-crafts", value: "art & crafts", label: "Art & Craft Supplies" },
  ];

  const visibleCategories = showAllCategories
    ? categories
    : categories.slice(0, 5);

  const categoryMapping: Record<string, string[]> = {
    all: [],
    electronics: ["electronics", "gadgets", "tech", "appliances"],
    fashion: ["fashion", "clothing", "accessories", "jewelry"],
    "home & garden": ["home", "garden", "decor", "furniture", "kitchen"],
    sports: ["sports", "fitness", "outdoors", "gear"],
    books: ["books", "stationery", "literature", "magazines"],
    beauty: ["beauty", "cosmetics", "skincare", "makeup", "fragrance"],
    "food & beverage": ["food", "beverage", "snacks", "gourmet", "groceries"],
    "baby products": ["baby", "kids", "infant", "diapers"],
    "toys & games": ["toys", "games", "hobbies"],
    "musical instrument": ["music", "instruments", "audio"],
    "health & wellness": ["health", "wellness", "fitness", "supplements"],
    "pet supplies": ["pet", "supplies", "animals"],
    automotive: ["automotive", "vehicles", "tools"],
    "office supplies": ["office", "stationery", "supplies"],
    travel: ["travel", "luggage", "gear"],
    "luxury items": ["luxury", "premium", "exclusive"],
    "art & crafts": ["art", "crafts", "DIY"],
  };

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/get-stores`
        );
        const data = await res.json();

        if (Array.isArray(data)) {
          const stores: Store[] = data.map((store: any) => ({
            _id: store._id,
            brandName: store.storeName,
            focus: store.storeCategory?.join(", ") || "",
            about: store.aboutStore,
            img: store.storeImage?.url || "",
            product: [], // keep this empty for now
          }));

          setAllStores(stores);
          setFilteredStores(stores);
        }
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };

    fetchStores();
  }, []);

  useEffect(() => {
    let result = [...allStores];

    // Search filter
    if (searchQuery.trim()) {
      result = result.filter((store) =>
        store.brandName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      const keywords = categoryMapping[selectedCategory] || [];
      result = result.filter((store) =>
        keywords.some((keyword) =>
          store.focus.toLowerCase().includes(keyword.toLowerCase())
        )
      );
    }

    setFilteredStores(result);
  }, [searchQuery, selectedCategory, allStores]);

  return (
    <div className="w-[95%] max-w-7xl mx-auto mt-10">
      {/* Header */}
      <div className="text-center mb-8 px-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Discover Amazing Stores
        </h1>
        <p className="text-lg text-gray-500">
          Explore thousands of unique stores and find your next favorite shop
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-8 px-4">
        <input
          type="text"
          placeholder="Search stores by name"
          className="w-full max-w-2xl border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#26BAEF]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Main Grid */}
      <div className="flex flex-col lg:flex-row gap-1 px-4">
        {/* Sidebar */}
        <aside className="w-full lg:w-[20%] mb-6 lg:mb-0">
          <p className="font-semibold mb-3">Categories</p>
          <form className="space-y-2" role="radiogroup" aria-label="Store Categories">
            {visibleCategories.map((ctg) => (
              <label key={ctg.id} className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="category"
                  value={ctg.value}
                  checked={selectedCategory === ctg.value}
                  onChange={() => setSelectedCategory(ctg.value)}
                />
                {ctg.label}
              </label>
            ))}
          </form>

          {/* Toggle Button */}
          {categories.length > 5 && (
            <button
              type="button"
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="mt-3 text-sm text-[#26BAEF] hover:text-blue-700 transition"
            >
              {showAllCategories
                ? "Show Less Categories ▲"
                : "Show More Categories ▼"}
            </button>
          )}
        </aside>

        {/* Store Cards */}
        <main className="w-full lg:w-3/4">
          <Stores stores={filteredStores} />
        </main>
      </div>
    </div>
  );
}
