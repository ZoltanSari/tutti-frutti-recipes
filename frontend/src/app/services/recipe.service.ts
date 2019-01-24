import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';

import { Recipe } from "../model/recipe.model";

@Injectable()
export class RecipeService{

  baseRecipeUrl: string = "http://localhost:8080/recipes";
  searchResultRecipe = new Subject<Recipe[]>();

  constructor(private http: HttpClient){}

  getRecipe(id: number) {
    return this.http.get<Recipe>(`${this.baseRecipeUrl}/${id}`);
  }

  getTop5RecipeMostLikeRecipes() {
    return this.http.get<Recipe[]>(`${this.baseRecipeUrl}/top-5`);
  }

  getAllRecipes() {
    return this.http.get<Recipe[]>(`${this.baseRecipeUrl}`);
  }

  getRecipeCategories() {
    return this.http.get<string[]> (`${this.baseRecipeUrl}/categories`);
  }

  getSearchRecipe(substring: string) {
    return this.http.get<Recipe[]>(`${this.baseRecipeUrl}/search?substring=${substring}`)
      .subscribe(
        (recipes: Recipe[]) => this.searchResultRecipe.next(recipes)
      );
  }

}
