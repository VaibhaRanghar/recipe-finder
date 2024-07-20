"use client";

import Profile from "@/components/Profile";
import Search from "@/components/Search";
import { useRecipesContext } from "@/context/RecipesContext";
import { RecipeType } from "@/modals/recipe.modal";
import Loading from "../loading";

export default function Explore() {
  const { recipes, handleKeywordChange, isLoading } = useRecipesContext();

  return (
    <>
      <div className="bg-white ">
        <h1 className="text-8xl text-center font-bold text-zinc-900 p-20">
          RECIPES
        </h1>
        <div className="flex flex-col items-center relative z-10 text-slate-900">
          <Search recipes={recipes} handleKeywordChange={handleKeywordChange} />
          <DisplayData recipes={recipes} isLoading={isLoading} />
        </div>
      </div>
    </>
  );
}

function DisplayData({
  recipes,
  isLoading,
}: {
  recipes: RecipeType | undefined;
  isLoading: boolean;
}) {
  const data = recipes?.meals?.map((option) => (
    <Profile
      key={option.id}
      id={option.id}
      img={option.thumbnail}
      name={option.meal}
      desc={option.instructions}
      tags={option.source}
    />
  ));
  return (
    <div className="ml-24 mr-24 h-max min-h-[50vh]  flex justify-center flex-wrap">
      {isLoading ? (
        <Loading />
      ) : data ? (
        data.reverse()
      ) : (
        <h1 className="text-4xl m-28">{"Nothing found!"}</h1>
      )}
    </div>
  );
}
