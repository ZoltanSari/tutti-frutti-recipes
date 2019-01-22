import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-recipe-list',
  templateUrl: './user-recipe-list.component.html',
  styleUrls: ['./user-recipe-list.component.css']
})
export class UserRecipeListComponent implements OnInit {
  userRecipes = this.userService.user.recipes;

  constructor(private userService: UserService) {}

  ngOnInit() {
  }

  onDelete(userId: number, recipeId: number) {
    this.userService.deleteUsersRecipe(userId, recipeId);
  }
}
