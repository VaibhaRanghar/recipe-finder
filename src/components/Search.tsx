"use client";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Stack } from "@mui/material";
import { MealType, RecipeApiResponse, RecipeType } from "@/modals/recipe.modal";

export default function Search({
  recipes,
  handleKeywordChange,
}: {
  recipes: RecipeType | null | undefined;
  handleKeywordChange: Function;
}) {
  const data = recipes?.meals?.map((option) => option.meal);
  return (
    <>
      <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={data || []}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Recipe"
              onChange={(e) => handleKeywordChange(e.target.value)}
            />
          )}
        />
      </Stack>
    </>
  );
}
  