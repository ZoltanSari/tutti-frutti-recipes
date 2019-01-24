import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
  ingredientsList: Ingredient[] = [];
  categories: string[];
  selectedCategories: string[] = [];

  constructor(private recipeService: RecipeService,
              private userService: UserService) { }

  ngOnInit() {
    this.initForm();
    this.recipeService.getRecipeCategories().subscribe(
      (categories: string[]) => {
        this.categories = categories;
      }
    );
  }

  private initForm() {
    const recipeIngredients = new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, Validators.required),
        'unit': new FormControl(null, Validators.required)
      });

    this.newRecipeForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'imagePath': new FormControl(null, Validators.required),
      'categories': new FormArray([]),
      'description': new FormControl(null, Validators.required),
      'difficulty': new FormControl(null, Validators.required),
      'ingredients': recipeIngredients
    })
  }

  onSubmit() {
    const newRecipe = {
      'name': this.newRecipeForm.value['name'],
      'imageUrl': this.newRecipeForm.value['imagePath'],
      'categories': this.selectedCategories,
      'preparation': this.newRecipeForm.value['description'],
      'difficulty': this.newRecipeForm.value['difficulty'],
      'ingredients': this.ingredientsList};

    this.userService.addRecipe(newRecipe);
  }

  onAddCategory(category: string) {
    this.selectedCategories.push(category);
  }

  onRemoveCategory(category: string) {
    this.selectedCategories.splice(this.selectedCategories.indexOf(category), 1);
  }

  onAddIngredient() {
    this.ingredientsList.push(
      new Ingredient(this.newRecipeForm.get('ingredients').get('name').value,
        this.newRecipeForm.get('ingredients').get('amount').value,
        this.newRecipeForm.get('ingredients').get('unit').value)
    );
  }

}
