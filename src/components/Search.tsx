"use client";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Stack } from "@mui/material";
import { MealType, RecipeApiResponse, RecipeType } from "@/modals/recipe.modal";

// const KEY = "64e3f18e0ec64775b0753b8bb50183b4"; //API KEY for :- Spoonacular (https://spoonacular.com/food-api/docs)

export default function Search() {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

function SearchBar() {
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
  }, [keyword]);

  const data = recipes?.meals?.map((option) => option.meal);
  console.log(keyword);
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

// const res = await fetch(
//   `https://www.themealdb.com/api/json/v1/1/search.php?s=cake`
// );

const data = [
  {
    title: "Chicken Fried Rice",
    ingredients: [
      "2 tablespoons vegetable oil",
      "2 eggs, beaten",
      "1 pound boneless, skinless chicken breasts, cooked and diced",
      "2 cups cooked rice",
      "1 cup frozen peas",
      "1/2 cup chopped carrots",
      "1/4 cup chopped onion",
      "2 tablespoons soy sauce",
      "1 tablespoon oyster sauce (optional)",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Heat oil in a large skillet or wok over medium-high heat.",
      "Pour in the beaten eggs and scramble until cooked through.",
      "Remove eggs from the pan and set aside.",
      "Add chicken, rice, peas, carrots, and onion to the pan.",
      "Stir-fry for 5-7 minutes, or until vegetables are softened and heated through.",
      "Stir in soy sauce and oyster sauce (if using).",
      "Season with salt and pepper to taste.",
      "Return the scrambled eggs to the pan and stir-fry for another minute to combine.",
      "Serve immediately.",
    ],
    image: "https://example.com/chicken-fried-rice.jpg",
    cuisine: "Asian",
    mealType: "Dinner",
  },
  {
    title: "Vegetarian Chili",
    ingredients: [
      "1 tablespoon olive oil",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 bell pepper (any color), chopped",
      "2 stalks celery, chopped",
      "1 (15-ounce) can kidney beans, drained and rinsed",
      "1 (15-ounce) can black beans, drained and rinsed",
      "1 (15-ounce) can diced tomatoes, undrained",
      "1 (14.5-ounce) can diced tomatoes with green chilies, undrained",
      "1 (15-ounce) can corn, drained",
      "1 tablespoon chili powder",
      "1 teaspoon ground cumin",
      "1/2 teaspoon smoked paprika",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Heat olive oil in a large pot or Dutch oven over medium heat.",
      "Add onion, garlic, bell pepper, and celery. Cook until softened, about 5 minutes.",
      "Stir in kidney beans, black beans, diced tomatoes, tomatoes with green chilies, corn, chili powder, cumin, and paprika.",
      "Bring to a boil, then reduce heat and simmer for 30 minutes, or until flavors are combined.",
      "Season with salt and pepper to taste.",
      "Serve hot with your favorite toppings like chopped avocado, shredded cheese, and sour cream (optional).",
    ],
    image: "https://example.com/vegetarian-chili.jpg",
    cuisine: "Vegetarian",
    mealType: "Dinner",
  },
];
