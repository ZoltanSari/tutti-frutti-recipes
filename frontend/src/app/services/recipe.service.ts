import { Injectable } from '@angular/core';
import {Recipe} from "../model/recipe.model";
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class RecipeService{
  baseRecipeUrl: string = "http://localhost:8080/recipes";
  searchResultRecipe = new Subject<Recipe[]>();

  constructor(private http: HttpClient,
              private router: Router){}

  getRecipe(id: number) {
    return this.http.get<Recipe>(`${this.baseRecipeUrl}/${id}`);
  }

  getTop5RecipeMostLikeRecipes() {
    return this.http.get<Recipe[]>(`${this.baseRecipeUrl}/top-5`)
  }

  getAllRecipes() {
    return this.http.get<Recipe[]>(`${this.baseRecipeUrl}`)

  }

  getSearchRecipe(substring: string) {
    return this.http.get<Recipe[]>(`${this.baseRecipeUrl}/search?substring=${substring}`)
      .subscribe(
        (recipes: Recipe[]) => this.searchResultRecipe.next(recipes)
      );
  }
}
