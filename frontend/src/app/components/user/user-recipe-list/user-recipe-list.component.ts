import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../model/user.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-user-recipe-list',
  templateUrl: './user-recipe-list.component.html',
  styleUrls: ['./user-recipe-list.component.css']
})
export class UserRecipeListComponent implements OnInit {

  @ViewChild('dropdown') dropdownElement: ElementRef;
  user: User;

  constructor(private userService: UserService,
              private authService: AuthService,
              private recipeService: RecipeService,
              private router: Router) {}

  ngOnInit() {
    this.userService.getUser(this.authService.getUsername()).subscribe(
      user => this.user = user
    )
  }

  onDelete(username: string, recipeId: number) {
    this.userService.deleteUsersRecipe(username, recipeId);
  }

  onEnter(value: string) {
    this.recipeService.getSearchRecipe(value);
    this.router.navigate(['search']);
  }

  onDropdownMenu() {
    (<HTMLElement>this.dropdownElement.nativeElement).classList.toggle('d-block');
  }

}
