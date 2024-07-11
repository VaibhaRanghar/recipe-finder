"use client";
import Loading from "@/app/loading";
import Profile from "@/components/Profile";

import { RecipeType } from "@/modals/recipe.modal";

export default function GetData({
  recipes,
  isLoading,
}: {
  recipes: RecipeType | undefined;
  isLoading: boolean;
}) {
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
    <div className="ml-24 mr-24 h-max min-h-[50vh]  flex justify-center flex-wrap">
      {isLoading ? (
        <Loading />
      ) : data ? (
        data
      ) : (
        <h1 className="text-4xl m-28">{"Nothing found!"}</h1>
      )}
    </div>
  );
}
