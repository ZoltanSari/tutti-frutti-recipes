import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class AuthService {

  isLoggedIn = new Subject<boolean>();

  constructor() {}

  saveToken(token: string) {
    sessionStorage.setItem('token', token.substring(7));
    this.isLoggedIn.next(true);
  }

  loggedIn(): boolean {
    return sessionStorage.getItem('token') !== null;
  }

  logOutUser() {
    this.isLoggedIn.next(false);
  }

  getUsername() {
    return this.loggedIn() ? jwt_decode(sessionStorage.getItem('token'))['sub'] : null;
  }

}
