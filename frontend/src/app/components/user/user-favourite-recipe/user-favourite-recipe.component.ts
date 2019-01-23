import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Recipe } from '../../../model/recipe.model';
import { User } from '../../../model/user.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-user-favourite-recipe',
  templateUrl: './user-favourite-recipe.component.html',
  styleUrls: ['./user-favourite-recipe.component.css']
})
export class UserFavouriteRecipeComponent implements OnInit {
  user: User;

  constructor(private userService: UserService,
              private authService: AuthService) {}

  ngOnInit() {
    this.userService.getUser(this.authService.getUsername()).subscribe(
      user => {
        this.user = user;
      }
    )
  }

  onDelete(username: string, recipeId: number) {
    this.userService.deleteUsersRecipe(username, recipeId);
  }

}
