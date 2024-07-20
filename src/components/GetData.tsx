"use client";
import { useRecipesContext } from "@/context/RecipesContext";

export default function GetData() {
  const { recipes } = useRecipesContext();
  return recipes;
}
