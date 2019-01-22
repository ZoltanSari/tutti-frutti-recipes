import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {}
  canActivate(){
    if (!this.authService.isLoggedIn) {
      console.log(this.authService.isLoggedIn);
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
