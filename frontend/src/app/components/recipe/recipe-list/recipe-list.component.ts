import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../../model/recipe.model";
import {RecipeService} from "../../../services/recipe.service";
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  searchResultRecipes: Recipe[];


  constructor(private recipeService: RecipeService,
              private router: Router,
              private authService: AuthService) {}

  ngOnInit() {
    this.recipeService.getTop5RecipeMostLikeRecipes().subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipeService.searchResultRecipe.subscribe(
      recipes => this.searchResultRecipes = recipes
    )
  }


  onNewRecipe() {
    this.router.navigate(['user', 'new']);
  }
}
