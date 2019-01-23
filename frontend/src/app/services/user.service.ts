import { Injectable } from '@angular/core';
import { Ingredient } from '../model/ingredient.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Recipe } from '../model/recipe.model';
import { User } from '../model/user.model';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  baseUsersUrl: string = "http://localhost:8080/users";
  user: User;

  constructor(private http: HttpClient,
              private authService:AuthService,
              private router: Router){}

  addRecipe(recipeDTO: { name: string;
    preparation: string;
    imageUrl: string;
    difficulty: string;
    ingredients: Ingredient[] }) {
    this.http.post<any>(`${this.baseUsersUrl}/${this.user.id}/add-recipe`, recipeDTO).subscribe();
  }

  login(username: string, password: string) {
    return this.http.post<User>(`${this.baseUsersUrl}/login`,
      {username: username, password: password},
      {observe: 'response'}).subscribe(
      (response: HttpResponse<any>) => {
        if (response.headers.get('Authorization')) {
          this.authService.saveToken(response.headers.get('Authorization'));
          // this.checkIsUserValid();
        }
      }
    );
    }

  addLike(recipeId: number) {
    this.http.put<any>(`${this.baseUsersUrl}/${this.user.id}/liked-recipes/recipes/${recipeId}`, null)
      .subscribe();
  }

  register(userDTO: { username: string,
    password: string,
    registrationDate: string,
    recipes: Recipe[],
    likedRecipes: Recipe[]  }) {
    this.http.post<any>(`${this.baseUsersUrl}/registration`, userDTO).subscribe();
    this.router.navigate(['login']);

  }

  checkIsUserValid(){
    if (this.authService.loggedIn()) {
      this.authService.isLoggedIn.next(true);
      this.router.navigate(['/']);
    } else  {
      alert("invalid username or password");
    }
  }

  editUsersRecipe(username: string, recipeId: number, recipe: Recipe) {
    this.http.put(`${this.baseUsersUrl}/${username}/recipes/${recipeId}`, recipe);
  }

  deleteUsersRecipe(username: string, recipeId: number) {
    return this.http.delete<Recipe>(`${this.baseUsersUrl}/${username}/recipes/${recipeId}`).subscribe();
  }

  getUser(username: string) {
    return this.http.get<User>(`${this.baseUsersUrl}/${username}`);
  }

}
