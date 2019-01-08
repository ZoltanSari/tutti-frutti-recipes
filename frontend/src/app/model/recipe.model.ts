import {Ingredient} from "./ingredient.model";

export class Recipe {
  name: string;
  description: string;
  ingredients: Ingredient[];


  constructor(name: string, description: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = description;
    this.ingredients = ingredients;
  }
}
