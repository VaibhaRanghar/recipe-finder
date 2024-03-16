type MealResponse = {
  idMeal: string;
  strMeal: string;
  strInstructions: string;
  strSource: string;
  strTags: string;
};

export type RecipeApiResponse = {
  meals: MealResponse[];
};

export class MealType {
  id: string;
  meal: string;
  instructions: string;
  source: string;
  tags: string[];

  constructor(data: MealResponse) {
    // Use constructor for initialization
    this.id = data?.idMeal ?? "";
    this.meal = data?.strMeal ?? "";
    this.instructions = data?.strInstructions ?? "";
    this.source = data?.strSource ?? "";
    this.tags = data?.strTags.split(",") ?? [];
  }

  static fromApi(response: MealResponse): MealType {
    // Factory method for readability
    return new MealType(response);
  }
}

export class RecipeType {
  meals: MealType[];

  constructor(data: RecipeApiResponse) {
    // Initialize meals in constructor
    this.meals = data?.meals?.map(MealType.fromApi); // Use factory method
  }
}
