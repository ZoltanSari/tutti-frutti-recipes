import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../../model/recipe.model";
import {Ingredient} from "../../../model/ingredient.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor() { }

  ngOnInit() {
    this.recipes = [new Recipe('Hús',
      'Finom',
      [new Ingredient('Liszt', 1, 'kg')])]
  }

}
