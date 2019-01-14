import {Injectable} from "@angular/core";
import { Ingredient } from '../model/ingredient.model';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../model/recipe.model';
import { User } from '../model/user.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUsersUrl: string = "http://localhost:8080/users";
  isLoggedIn: boolean;
  user: User;


  constructor(private http: HttpClient){}

  addRecipe(recipeDTO: { name: string;
    preparation: string;
    imageUrl: string;
    difficulty: string;
    ingredients: Ingredient[] }) {
    this.http.post<any>(`${this.baseUsersUrl}/1/add-recipe`, recipeDTO).subscribe();
  }

  getUser(username: string, password: string) {
    return this.http.post<User>(`${this.baseUsersUrl}/login`,
      {username: username, password: password})
  }



  addLike(recipeId: number, userId: number) {
    this.http.put<any>(`${this.baseUsersUrl}/${userId}/liked-recipes/recipes/${recipeId}`, null)
      .subscribe();
  }

  addUser(userDTO: { username: string,
    password: string,
    registrationDate: string,
    recipes: Recipe[],
    likedRecipes: Recipe[]  }) {
    this.http.post<any>(`${this.baseUsersUrl}/registration`, userDTO).subscribe();
  }
}
