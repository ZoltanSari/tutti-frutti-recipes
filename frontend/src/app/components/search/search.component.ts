import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../model/recipe.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchRecipe: Recipe[];
  isLoggedIn: boolean;

  constructor(private recipeService: RecipeService,
              private authService: AuthService) { }

  ngOnInit() {

    this.recipeService.searchResultRecipe.subscribe(
      recipe => this.searchRecipe = recipe
    )
    this.authService.isLoggedIn.subscribe(
      isLoggedIn => this.isLoggedIn = isLoggedIn
    )
  }
}
