"use client";
import GetData from "@/components/GetData";
import Search from "@/components/Search";
import { useRecipesContext } from "@/context/RecipesContext";

export default function Explore() {
  const { recipes, handleKeywordChange, isLoading } = useRecipesContext();

  return (
    <>
      <div className="bg-white ">
        <div className="flex flex-col items-center relative z-10 text-slate-900">
          <Search recipes={recipes} handleKeywordChange={handleKeywordChange} />
          <GetData recipes={recipes} isLoading={isLoading} />
        </div>
      </div>
    </>
  );
}
