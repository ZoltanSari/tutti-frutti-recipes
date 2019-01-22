import { Router } from '@angular/router';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../model/recipe.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('dropdown') dropdownElement: ElementRef;
  searchRecipe: Recipe[];

  constructor(private recipeService: RecipeService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {

    this.recipeService.searchResultRecipe.subscribe(
      recipe => this.searchRecipe = recipe
    )
  }

  onEnter(value: string) {
    this.recipeService.getSearchRecipe(value);
    this.router.navigate(['search']);
  }

  onDropdownMenu() {
    (<HTMLElement>this.dropdownElement.nativeElement).classList.toggle('d-block');
  }

}
