"use client";
import Profile from "@/components/Profile";
import Loading from "../app/loading";

import { RecipeApiResponse, RecipeType } from "@/modals/recipe.modal";
import { useEffect, useState } from "react";
import Search from "@/components/Search";
import dynamic from "next/dynamic";

export default function GetData() {
  const [recipes, setRecipes] = useState<RecipeType | null>();
  const [keyword, setKeyword] = useState<String>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleKeywordChange = (event: string) => {
    setKeyword(event);
  };

  useEffect(() => {
    async function fetchRecipes() {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`
          // `https://www.themealdb.com/api/json/v1/1/list.php`
        );
        const data: RecipeApiResponse = await res.json();
        const apiData = new RecipeType(data);
        setRecipes(apiData);
        console.log(apiData);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    fetchRecipes();
  }, [keyword]);

  const data = recipes?.meals?.map((option) => (
    <Profile
      key={option.id}
      img={option.thumbnail}
      name={option.meal}
      desc={option.instructions}
      tags={option.source}
    />
  ));
  console.log(recipes);
  return (
    <div className="bg-white ">
      <div className=" flex flex-col items-center relative z-10 text-slate-900">
        <Search recipes={recipes} handleKeywordChange={handleKeywordChange} />
        {isLoading ? (
          <Loading />
        ) : (
          <div className="ml-24 mr-24 min-h-screen  flex justify-center flex-wrap">
            {data}
          </div>
        )}
      </div>
    </div>
  );
}
