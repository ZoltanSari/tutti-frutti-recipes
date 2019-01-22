import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../model/recipe.model';
import { RecipeService } from '../../../services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from '../../../model/ingredient.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  ingredients: Ingredient[];
  imageUrl: string;
  preparation: string;
  name: string;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.recipeService.getRecipe(this.id).subscribe(
      (recipe: Recipe) => {
        this.imageUrl = recipe.imageUrl;
        this.ingredients = recipe.ingredients;
        this.preparation = recipe.preparation;
        this.name = recipe.name;
      }
    );
  }

}
