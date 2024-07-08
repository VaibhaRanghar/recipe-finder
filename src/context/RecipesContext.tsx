"use client";
import { RecipeApiResponse, RecipeType } from "@/modals/recipe.modal";
import React, { useEffect, useState } from "react";
import { createContext } from "vm";

const RecipesContext = createContext({
  recipes: null,
  setRecipes: () => {},
});

function RecipesProvider({ children }: { children: React.ReactNode }) {
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

  return (
    <RecipesContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipesContext.Provider>
  );
}
export { RecipesContext, RecipesProvider };
