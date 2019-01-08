import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from "../../services/recipe.service";

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
              private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.message
      .subscribe( message => {
        console.log('login component: ' + message)
      }
  );
    this.login = this.route.routeConfig.path === 'login';
    this.initForm();
  }

  onSubmit() {
    this.userService;
  }

  private initForm() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })
  }
}
