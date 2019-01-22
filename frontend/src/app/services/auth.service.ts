import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { UserService } from './user.service';
import { Recipe } from '../model/recipe.model';

@Injectable()
export class AuthService {

  isLoggedIn = new Subject<boolean>();
  isUser = false;

  constructor(private userService: UserService,
              private router: Router) {
  }

  registerUser(userDTO: {
    username: string,
    password: string,
    registrationDate: string,
    recipes: Recipe[],
    likedRecipes: Recipe[]
  }) {
    this.userService.addUser(userDTO);
    this.router.navigate(['login']);
  }

  isLogin(username: string, password: string) {
    this.userService.getUser(username, password).subscribe(
      user => {
        if (user != null) {
          console.log('bent vok');
          this.isUser= true;
          this.userService.user = user;
          this.router.navigate(['/']);
        } else {
          this.isUser = false;
          alert('Register please');
          this.router.navigate(['registration'])
        }
      });
  }

  logOutUser() {
    this.isUser = false
  }

}
