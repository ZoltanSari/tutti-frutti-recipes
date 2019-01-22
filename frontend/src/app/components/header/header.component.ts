import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService,
              private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logOutUser();
  }

  onEnter(value: string){
    this.recipeService.getSearchRecipe(value);
    this.router.navigate(['search']);

  }
}
