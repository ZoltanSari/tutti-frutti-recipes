import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../../../model/recipe.model";
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../model/user.model';
import { RecipeService } from '../../../../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input()recipe: Recipe;
  @Input()id: number;
  @Input()isLoggedIn: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  addLike() {
    if (!this.userService.user.likedRecipes.includes(this.recipe)) {
      this.userService.user.likedRecipes.push(this.recipe);
      this.recipe.totalLikes++;
    } else {
      const index = this.userService.user.likedRecipes.indexOf(this.recipe);
      this.userService.user.likedRecipes.splice(index, 1);
      this.recipe.totalLikes--;
    }
    this.userService.addLike(this.recipe.id);
  }
}
