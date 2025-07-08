"use client";
import { useState, useEffect } from "react";
import Stores from "./stores";
import { arrStore } from "./stores";
import type { Store } from "./stores";

export default function FindStore() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredStores, setFilteredStores] = useState<Store[]>(arrStore);

const categories = [
  { id: "all", value: "all", label: "All Categories" },
  { id: "electronics", value: "electronics", label: "Electronics & Gadgets" },
  { id: "fashion", value: "fashion", label: "Clothing & Fashion" },
  { id: "home-garden", value: "home & garden", label: "Home & Garden" },
  { id: "sports", value: "sports", label: "Sports & Outdoors" },
  { id: "books", value: "books", label: "Books & Stationery" },
  { id: "beauty", value: "beauty", label: "Beauty & Skincare" },
  { id: "food", value: "food & beverage", label: "Food & Beverages" },
  { id: "baby-products", value: "baby products", label: "Baby Products & Toys" },
  { id: "toys-games", value: "toys & games", label: "Toys, Games & Hobbies" },
  { id: "music", value: "musical instrument", label: "Musical Instruments" },
  { id: "health-wellness", value: "health & wellness", label: "Health & Wellness" },
  { id: "pet-supplies", value: "pet supplies", label: "Pet Supplies" },
  { id: "automotive", value: "automotive", label: "Automotive & Tools" },
  { id: "office-supplies", value: "office supplies", label: "Office & Stationery" },
  { id: "travel", value: "travel", label: "Travel & Luggage" },
  { id: "luxury", value: "luxury items", label: "Luxury Items" },
  { id: "art-crafts", value: "art & crafts", label: "Art & Craft Supplies" },
];



const categoryMapping: Record<string, string[]> = {
  all: [],
  electronics: ["electronics", "gadgets", "tech", "appliances"],
  fashion: ["fashion", "clothing", "accessories", "jewelry"],
  "home & garden": ["home", "garden", "decor", "furniture", "kitchen"],
  sports: ["sports", "fitness", "outdoors", "gear"],
  books: ["books", "stationery", "literature", "magazines"],
  beauty: ["beauty", "cosmetics", "skincare", "makeup", "fragrance", "hair care", "nail care", "personal care", "wellness", "skin care"],
  "food & beverage": ["food", "beverage", "snacks", "gourmet", "groceries"],
  "baby products": ["baby", "kids", "infant", "diapers", "nursery"],
  "toys & games": ["toys", "games", "hobbies", "board games"],
  "musical instrument": ["music", "instruments", "audio", "sound"],
  "health & wellness": ["health", "wellness", "fitness", "supplements", "medicines"],
  "pet supplies": ["pet", "supplies", "animals",],
  automotive: ["automotive", "vehicles", "tools", "cars"],
  "office supplies": ["office", "stationery", "supplies", "paper"],
  travel: ["travel", "luggage", "gear", "adventure"],
  "luxury items": ["luxury", "high-end", "premium", "exclusive"],
  "art & crafts": ["art", "crafts", "supplies", "DIY", "paint"],
};



  useEffect(() => {
    let filtered = arrStore;

    if (selectedCategory !== "all") {
      const focusTerms = categoryMapping[selectedCategory.toLowerCase()] || [];
      filtered = filtered.filter((store) =>
        focusTerms.some((term) => store.focus.toLowerCase().includes(term))
      );
    }

    if (searchQuery.trim()) {
      filtered = filtered.filter((store) =>
        store.brandName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredStores(filtered);
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <div className="text-center mt-5">
        <h1 className="font-normal text-[30px]">Discover Amazing Stores</h1>
        <p className="text-[20px]">
          Explore thousands of unique stores and find your next favorite shop
        </p>
      </div>

      {/* Search bar */}
      <div className="flex items-center outline gap-2 w-[700px] h-[35px] rounded-sm mx-auto mt-5">
        <input
          type="text"
          placeholder="Search stores by name"
          className="w-[40rem] focus:outline-none ml-5"
          onChange={(event) => setSearchQuery(event.target.value)}
          autoComplete="off"
        />
      </div>

      {/* Main content */}
      <div className="w-[97%] mx-auto flex gap-5 mt-10 container">
        {/* Sidebar with categories */}
        <div className="w-[17%]">
          <p className="font-medium mb-3">Department</p>
          <form>
            {categories.map((category) => (
              <div key={category.id} className="flex items-center gap-1 mb-2">
                <input
                  type="radio"
                  id={category.id}
                  name="category"
                  value={category.value}
                  checked={selectedCategory === category.value}
                  onChange={() => setSelectedCategory(category.value)}
                />
                <label htmlFor={category.id}>{category.label}</label>
              </div>
            ))}
          </form>
        </div>

        {/* Store display */}
        <div className="w-[83%]">
          {filteredStores.length > 0 ? (
            <Stores stores={filteredStores} />
          ) : (
            <div className="text-center py-10">
              <p className="text-xl font-medium text-gray-500">
                No stores found matching your search
              </p>
              <p className="text-gray-400 mt-2">Try a different search term</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
