import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';
import { Recipe } from '../../../model/recipe.model';

@Component({
  selector: 'app-user-recipe-list',
  templateUrl: './user-recipe-list.component.html',
  styleUrls: ['./user-recipe-list.component.css']
})
export class UserRecipeListComponent implements OnInit {

  userRecipes: Recipe[];

  constructor(private userService: UserService,
              private authService: AuthService) {}

  ngOnInit() {
    this.userService.getUser(this.authService.getUsername()).subscribe(
      user => this.userRecipes = user.recipes
    )
  }

  onDelete(username: string, recipeId: number) {
    this.userService.deleteUsersRecipe(username, recipeId);
  }

}
