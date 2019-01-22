import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Ingredient } from '../../../model/ingredient.model';
import { RecipeService } from '../../../services/recipe.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-add-new-recipe',
  templateUrl: './add-new-recipe.component.html',
  styleUrls: ['./add-new-recipe.component.css'],
})
export class AddNewRecipeComponent implements OnInit {
  newRecipeForm: FormGroup;
  recipeIngredients: FormGroup;
  ingredientsList: Ingredient[] = [];
  newIngredients: Ingredient;

  constructor(private recipeService: RecipeService,
              private userService: UserService) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.recipeIngredients = new FormGroup({
        'name': new FormControl(null),
        'amount': new FormControl(null),
        'unit': new FormControl(null)
      });

    this.newRecipeForm = new FormGroup({
      'name': new FormControl(null),
      'imagePath': new FormControl(null),
      'description': new FormControl(null),
      'difficulty': new FormControl(null),
      'ingredients': this.recipeIngredients
    })
  }

  onSubmit() {
    this.newIngredients = new Ingredient(this.recipeIngredients.value['name'],
      this.recipeIngredients.value['amount'],
      this.recipeIngredients.value['unit'],);

    const newRecipe = {
      'name': this.newRecipeForm.value['name'],
      'preparation': this.newRecipeForm.value['description'],
      'imageUrl': this.newRecipeForm.value['imagePath'],
      'difficulty': this.newRecipeForm.value['difficulty'],
      'ingredients': this.ingredientsList};

    this.userService.addRecipe(newRecipe);
  }

  onAddIngredient() {
    this.ingredientsList.push(
      new Ingredient(this.newRecipeForm.get('ingredients').get('name').value,
        this.newRecipeForm.get('ingredients').get('amount').value,
        this.newRecipeForm.get('ingredients').get('unit').value)
    );
  }
}
