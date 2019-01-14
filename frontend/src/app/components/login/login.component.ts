import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  login: boolean;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.login = this.route.routeConfig.path === 'login';
    this.initForm();
  }

  onSubmit() {
    if (!this.login) {
      const date = new Date();
      const month = date.getMonth() < 10 ? '0' + parseInt(date.getMonth().toString() + 1) : date.getMonth() + 1;
      const userDetails = {
        'username': this.loginForm.value['username'],
        'password': this.loginForm.value['password'],
        'registrationDate': date.getFullYear() + '-' + month + '-' + date.getDate(),
        'recipes': [],
        'likedRecipes': []
      };
      this.userService.addUser(userDetails);
    } else {
      if (this.isLogin()) {
        alert('Register please');
        this.router.navigate(['registration'])
      } else {
        this.userService.getUser(this.loginForm.value['username'], this.loginForm.value['password'])
          .subscribe(
            user => this.userService.user = user
          )
      }
    }
  }

  private initForm() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
    })
  }

  private isLogin(){
    const username = this.loginForm.value['username'];
    const  password = this.loginForm.value['password'];
    return this.userService.getUser(username, password).subscribe() == null;
  }
}
