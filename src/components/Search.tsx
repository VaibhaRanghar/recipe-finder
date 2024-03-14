"use client";
import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Stack } from "@mui/material";
export default function Search() {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

function SearchBar() {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={recipes.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="Recipe" />}
      />
    </Stack>
  );
}

const recipes = [
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
