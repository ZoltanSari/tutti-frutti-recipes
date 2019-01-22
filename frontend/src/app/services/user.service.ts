import { Injectable } from '@angular/core';
import { Ingredient } from '../model/ingredient.model';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../model/recipe.model';
import { User } from '../model/user.model';

@Injectable()
export class UserService {
  baseUsersUrl: string = "http://localhost:8080/users";
  user: User;

  constructor(private http: HttpClient){}

  addRecipe(recipeDTO: { name: string;
    preparation: string;
    imageUrl: string;
    difficulty: string;
    ingredients: Ingredient[] }) {
    this.http.post<any>(`${this.baseUsersUrl}/${this.user.id}/add-recipe`, recipeDTO).subscribe();
  }

  getUser(username: string, password: string) {
    return this.http.post<User>(`${this.baseUsersUrl}/login`,
      {username: username, password: password});
    }

  addLike(recipeId: number) {
    this.http.put<any>(`${this.baseUsersUrl}/${this.user.id}/liked-recipes/recipes/${recipeId}`, null)
      .subscribe();
  }

  addUser(userDTO: { username: string,
    password: string,
    registrationDate: string,
    recipes: Recipe[],
    likedRecipes: Recipe[]  }) {
    this.http.post<any>(`${this.baseUsersUrl}/registration`, userDTO).subscribe();
  }

  editUsersRecipe(userId: number, recipeId: number, recipe: Recipe) {
    this.http.put(`${this.baseUsersUrl}/${userId}/recipes/${recipeId}`, recipe);
  }

  deleteUsersRecipe(userId: number, recipeId: number) {
    return this.http.delete<Recipe>(`${this.baseUsersUrl}/${userId}/recipes/${recipeId}`).subscribe();
  }
}
