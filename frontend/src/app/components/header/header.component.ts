import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLoggedIn: boolean = false;

  constructor(private authService: AuthService,
              private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit() {
    // this.userLoggedIn = this.authService.isLoggedIn.subscribe(
    //   state => this.userLoggedIn = state
    // );
  }

  onLogout() {
    this.authService.logOutUser();
  }

}
