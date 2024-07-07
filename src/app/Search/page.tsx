"use client";
import NavBar from "@/components/NavBar";
import Profile from "@/components/Profile";
import Search from "@/components/Search";
import Loading from "./loading";
import Image from "next/image";

import { RecipeApiResponse, RecipeType } from "@/modals/recipe.modal";
import { Suspense, useEffect, useState } from "react";

export default function Searching() {
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
  //<Search recipes={recipes} handleKeywordChange={handleKeywordChange} />
  return (
    <div className="bg-white ">
      <NavBar fixed={false} />
      {/* <Image
        src={"/search.jpg"}
        alt="search"
        width={1000}
        height={1000}
        className="w-screen h-screen fixed z-0 opacity-70"
      /> */}
      <div className=" flex flex-col items-center relative z-10 text-slate-900">
        <h1 className="text-8xl font-bold text-zinc-900 p-20">RECIPES</h1>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="ml-[110px] min-h-screen  flex flex-wrap">{data}</div>
        )}
      </div>
    </div>
  );
}
