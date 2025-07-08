"use client";
import { useState } from "react";

type CategoryKey = keyof typeof categories;

const categories = {
   electronics: ["electronics", "gadgets", "tech", "appliances"],
  fashion: ["fashion", "clothing", "accessories", "jewelry"],
  "home & garden": ["home", "garden", "decor", "furniture", "kitchen"],
  sports: ["sports", "fitness", "outdoors", "gear"],
  books: ["books", "stationery", "literature", "magazines"],
  beauty: ["beauty", "cosmetics", "skincare", "makeup"],
  "food & beverage": ["food", "beverage", "snacks", "gourmet", "groceries"],
  "baby products": ["baby", "kids", "infant", "diapers", "nursery"],
  "toys & games": ["toys", "games", "hobbies", "board games"],
  "musical instrument": ["music", "instruments", "audio", "sound"],
  "health & wellness": ["health", "wellness", "fitness", "supplements", "medicines"],
  "pet supplies": ["pet", "supplies", "animals", "care"],
  automotive: ["automotive", "vehicles", "tools", "cars"],
  "office supplies": ["office", "stationery", "supplies", "paper"],
  travel: ["travel", "luggage", "gear", "adventure"],
  "luxury items": ["luxury", "high-end", "premium", "exclusive"],
  "art & crafts": ["art", "crafts", "supplies", "DIY", "paint"],
} as const;

interface CategorySelectorProps {
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
}

export default function CategorySelector({ 
  selectedCategories, 
  setSelectedCategories 
}: CategorySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCategory = (category: CategoryKey) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else if (selectedCategories.length < 3) {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="w-[200px] relative mb-3">
      <label htmlFor="" className="text-[12px] block">
        Categories (Select 1-3)
      </label>
      
      {/* Selected categories display */}
      <div className="flex gap-1 mb-1 min-h-6 overflow-x-auto whitespace-nowrap w-full">
        {selectedCategories.map(category => (
          <span 
            key={category} 
            className="inline-flex items-center bg-blue-100 text-blue-800 px-2 py-0.5 rounded-sm text-[12px]"
          >
            {category}
            <button 
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedCategories(selectedCategories.filter(c => c !== category));
              }}
              className="ml-1 text-blue-500 hover:text-blue-700 text-[10px]"
            >
              ×
            </button>
          </span>
        ))}
      </div>

      {/* Dropdown trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="outline w-full p-1.5 rounded-sm text-[12px] flex justify-between items-center whitespace-nowrap overflow-hidden"
      >
        <span className="truncate">
          {selectedCategories.length > 0 
            ? selectedCategories.join(", ") 
            : "Select categories"}
        </span>
        <span className="text-[10px] shrink-0">▼</span>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border rounded-sm shadow-lg max-h-60 overflow-auto">
          {Object.keys(categories).map((category) => {
            const categoryKey = category as CategoryKey;
            const isDisabled = selectedCategories.length >= 3 && !selectedCategories.includes(categoryKey);
            
            return (
              <div
                key={categoryKey}
                className={`p-1.5 text-[12px] cursor-pointer flex items-center ${
                  selectedCategories.includes(categoryKey) 
                    ? 'bg-blue-50' 
                    : isDisabled 
                      ? 'text-gray-400' 
                      : 'hover:bg-gray-100'
                }`}
                onClick={() => !isDisabled && toggleCategory(categoryKey)}
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(categoryKey)}
                  readOnly
                  className="mr-2"
                  disabled={isDisabled}
                />
                <span className="whitespace-nowrap">{categoryKey}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}