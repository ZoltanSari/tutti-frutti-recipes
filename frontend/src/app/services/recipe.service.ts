import { Injectable } from '@angular/core';
import {Recipe} from "../model/recipe.model";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RecipeService{
  baseRecipeUrl: string = "http://localhost:8080/recipes";
  recipes: Recipe[] = [];

  constructor(private http: HttpClient){}

  getRecipe(id: number) {
    return this.http.get<Recipe>(`${this.baseRecipeUrl}/${id}`);
  }

  getRecipes() {
    return this.http.get<Recipe[]>(`${this.baseRecipeUrl}`)
  }

  getSearchRecipe(substring: string) {
    return this.http.get<Recipe[]>(`${this.baseRecipeUrl}/search?substring=${substring}`);
  }
}
