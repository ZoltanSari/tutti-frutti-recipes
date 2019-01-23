import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from "../../../model/recipe.model";
import { RecipeService } from "../../../services/recipe.service";
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../model/user.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {

  @ViewChild('dropdown') dropdownElement: ElementRef;
  recipes: Recipe[];
  searchResultRecipes: Recipe[];
  isLoggedIn: boolean;
  user: User;


  constructor(private recipeService: RecipeService,
              private router: Router,
              private authService: AuthService,
              private userService: UserService) {}

  ngOnInit() {
    this.recipeService.getTop5RecipeMostLikeRecipes().subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipeService.searchResultRecipe.subscribe(
      recipes => this.searchResultRecipes = recipes
    );
    this.authService.isLoggedIn.subscribe(
      isLoggedIn => {this.isLoggedIn = isLoggedIn}
    );
    this.userService.getUser(this.authService.getUsername()).subscribe(
      (user: User) => {
        this.user = user;
        console.log(user)
      }
    )}



  onNewRecipe() {
    this.router.navigate(['user', 'new']);
  }

  onEnter(value: string) {
    this.recipeService.getSearchRecipe(value);
    this.router.navigate(['search']);
  }

  onDropdownMenu() {
    (<HTMLElement>this.dropdownElement.nativeElement).classList.toggle('d-block');
  }

}
