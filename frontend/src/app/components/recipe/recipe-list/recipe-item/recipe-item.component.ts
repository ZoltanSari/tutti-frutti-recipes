import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../../../model/recipe.model";
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../model/user.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input()recipe: Recipe;
  @Input()id: number;
  @Input()user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  addLike() {
    if (!this.user.likedRecipes.includes(this.recipe)) {
      this.user.likedRecipes.push(this.recipe);
      this.recipe.totalLikes++;
    } else {
      const index = this.user.likedRecipes.indexOf(this.recipe);
      this.user.likedRecipes.splice(index, 1);
      this.recipe.totalLikes--;
    }
    this.userService.addLike(this.recipe.id, this.user.id);
  }
}
