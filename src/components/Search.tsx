"use client";
import React, { useEffect, useState } from "react";
import { RecipeType } from "@/modals/recipe.modal";

export default function Search({
  recipes,
  handleKeywordChange,
}: {
  recipes: RecipeType | null | undefined;
  handleKeywordChange: Function;
}) {
  const data = recipes?.meals?.map((option) => option.meal);
  const [query, setQuery] = useState("");
  return (
    <div className=" h-max w-max p-2 mb-8  flex flex-col items-center ">
      <label className="text-4xl mb-8">What are you looking for?</label>
      <input
        className="text-xl p-4 rounded-full border-black border-2"
        type="search"
        value={query}
        placeholder="😋Search here..."
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onKeyDown={(e) => {
          e.key === "Enter" ? handleKeywordChange(query) : null;
        }}
      />
    </div>
  );
}
  