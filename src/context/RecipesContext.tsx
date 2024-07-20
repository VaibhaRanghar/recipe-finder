"use client";
import { RecipeApiResponse, RecipeType } from "@/modals/recipe.modal";
import React, { createContext, useContext, useEffect, useState } from "react";

interface ContextProps {
  recipes: RecipeType | undefined;
  setRecipes: React.Dispatch<React.SetStateAction<RecipeType | undefined>>;
  keyword: String | undefined;
  setKeyword: React.Dispatch<React.SetStateAction<String | undefined>>;
  handleKeywordChange: (event: string) => void;
  isLoading: boolean;
}

const RecipesContext = createContext<ContextProps>({
  recipes: RecipeType.prototype,
  setRecipes: () => {},
  keyword: "",
  setKeyword: () => {},
  handleKeywordChange: () => {},
  isLoading: true,
});

export function RecipesProvider({ children }: { children: React.ReactNode }) {
  const [recipes, setRecipes] = useState<RecipeType | undefined>();
  const [keyword, setKeyword] = useState<String>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleKeywordChange = (event: string) => {
    setKeyword(event);
  };

  useEffect(() => {
    async function fetchRecipes() {
      setIsLoading(true);
      try {
        if (keyword != undefined || recipes == undefined) {
          const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${
              keyword ? keyword : ""
            }`
          );
          const data: RecipeApiResponse = await res.json();
          const apiData = new RecipeType(data);
          setRecipes(apiData);
        }
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
      setKeyword(undefined);
      
    }
    fetchRecipes();
  }, [keyword, recipes, recipes?.meals]);

  const data = {
    recipes,
    setRecipes,
    keyword,
    setKeyword,
    handleKeywordChange,
    isLoading,
  };

  return (
    <RecipesContext.Provider value={data}>{children}</RecipesContext.Provider>
  );
}

export const useRecipesContext = () => useContext(RecipesContext);

