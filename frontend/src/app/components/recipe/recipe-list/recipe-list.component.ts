import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../../model/recipe.model";
import {RecipeService} from "../../../services/recipe.service";
import { Router } from '@angular/router';
import { User } from '../../../model/user.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  user: User;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private userService: UserService) {}

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.user = this.userService.user;
  }

  onNewRecipe() {
    this.router.navigate(['user', 'new']);
  }
}
