import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Recipe } from '../../../model/recipe.model';

@Component({
  selector: 'app-user-favourite-recipe',
  templateUrl: './user-favourite-recipe.component.html',
  styleUrls: ['./user-favourite-recipe.component.css']
})
export class UserFavouriteRecipeComponent implements OnInit {
  userFavourites: Recipe[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userFavourites = this.userService.user.likedRecipes;
  }

  onDelete(username: string, recipeId: number) {
    this.userService.deleteUsersRecipe(username, recipeId);
  }

}
