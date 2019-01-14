import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../model/recipe.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }


  onEnter(value: string) {
    this.recipeService.getSearchRecipe(value).subscribe(
      (recipes: Recipe[])=> {
        this.recipes = recipes;
        console.log(recipes);
      }
    );
  }
}
