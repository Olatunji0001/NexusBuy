"use client";
import React, { useEffect, useState } from "react";
import CategorySelector from "./vendorsCtgy";

export default function StoreForm() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [storeName, setStoreName] = useState("");
  const [aboutStore, setAboutStore] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  // Validate form inputs in real-time
  useEffect(() => {
    const isValid =
      storeName.trim().length >= 5 &&
      aboutStore.trim().length >= 13 &&
      selectedCategories.length > 0 &&
      image !== null;

    setFormIsValid(isValid);
  }, [storeName, aboutStore, selectedCategories, image]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const clearMessages = () => {
    setTimeout(() => {
      setError("");
      setSuccess("");
    }, 10000);
  };

  const onSubmit = async () => {
    if (loading || !formIsValid) return;

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const formData = new FormData();
      formData.append("storeLogo", image!);
      formData.append("storeName", storeName);
      formData.append("aboutStore", aboutStore);
      formData.append("storeCategory", JSON.stringify(selectedCategories));

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/store`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result?.message || "Something went wrong. Please try again.");
        setLoading(false);
        clearMessages();
        return;
      }

      setSuccess(result.message || "Store saved successfully!");
      setStoreName("");
      setAboutStore("");
      setSelectedCategories([]);
      setImage(null);
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      clearMessages();
    }
  };

  return (
    <div className="w-full max-w-md md:max-w-lg p-4 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-3">
        Store Setup
      </h2>

      {error && (
        <div className="mb-3 text-sm text-red-700 bg-red-100 border border-red-300 px-3 py-2 rounded">
          {error}
        </div>
      )}
      {success && (
        <div className="mb-3 text-sm text-green-700 bg-green-100 border border-green-300 px-3 py-2 rounded">
          {success}
        </div>
      )}

      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-700 mb-1">Store Name</label>
          <input
            type="text"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            placeholder="e.g. NexusBuy"
            className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm focus:ring-amber-500 focus:border-amber-500"
          />
        </div>

        <CategorySelector
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />

        <div>
          <label className="block text-sm text-gray-700 mb-1">About Store</label>
          <textarea
            rows={3}
            value={aboutStore}
            onChange={(e) => setAboutStore(e.target.value)}
            placeholder="Briefly describe your store..."
            className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm resize-none focus:ring-amber-500 focus:border-amber-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-1">Store Logo</label>
          <div
            onClick={() => document.getElementById("storeLogo")?.click()}
            className="h-28 border-2 border-dashed border-amber-400 rounded-md flex items-center justify-center text-sm text-gray-500 cursor-pointer hover:border-amber-500"
          >
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                className="h-full object-contain"
              />
            ) : (
              "Click to upload image"
            )}
          </div>
          <input
            id="storeLogo"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>

        <div className="pt-2 text-center">
          <button
            type="submit"
            onClick={onSubmit}
            disabled={!formIsValid || loading}
            className={`bg-amber-600 hover:bg-amber-700 text-white py-2 px-5 rounded text-sm font-medium transition ${
              (!formIsValid || loading) ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Saving..." : "Save Info"}
          </button>
        </div>
      </form>
    </div>
  );
}
