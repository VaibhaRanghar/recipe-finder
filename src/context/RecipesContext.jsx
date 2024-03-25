"use client";
import React, { useState } from "react";
import { createContext } from "vm";

const RecipesContext = createContext({
  recipes: null,
  setRecipes: () => {},
});

function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState(null);

  return (
    <RecipesContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipesContext.Provider>
  );
}
export { RecipesContext, RecipesProvider };
