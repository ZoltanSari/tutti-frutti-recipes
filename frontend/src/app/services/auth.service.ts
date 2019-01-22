import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {

  isLoggedIn = new Subject<boolean>();
  isUser = false;

  constructor(private router: Router) {}

  saveToken(token: string) {
    sessionStorage.setItem('token', token.substring(7));
  }

  isLogin() {
    return sessionStorage.getItem('token') === null;
  }

  logOutUser() {
    this.isLoggedIn.next(false);
  }
}
