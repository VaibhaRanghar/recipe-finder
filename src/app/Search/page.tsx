"use client";
import Profile from "@/components/Profile";
import Search from "@/components/Search";
import { RecipeApiResponse, RecipeType } from "@/modals/recipe.modal";
import { useEffect, useState } from "react";

export default function Searching() {
  const [recipes, setRecipes] = useState<RecipeType | null>();
  const [keyword, setKeyword] = useState("");

  const handleKeywordChange = (event: string) => {
    setKeyword(event);
  };

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`
        );
        const data: RecipeApiResponse = await res.json();
        const apiData = new RecipeType(data);
        setRecipes(apiData);
        console.log(keyword + " this is from try catch");
        console.log(" these are recipes " + recipes);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRecipes();
  }, [keyword, recipes]);

  const data = recipes?.meals?.map((option) => (
    <Profile
      key={option.id}
      img={option.thumbnail}
      name={option.meal}
      desc={option.instructions}
      tags={option.source}
    />
  ));

  return (
    <>
      <div className="h-max w-max p-5 bg-white text-cyan-950">
        <Search recipes={recipes} handleKeywordChange={handleKeywordChange} />
      </div>
      <div className="flex">{data}</div>
    </>
  );
}
