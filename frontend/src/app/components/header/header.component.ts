import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private recipeSevice: RecipeService) { }

  ngOnInit() {
  }

  test() {
    this.recipeSevice.sendmessage('oli');
  }

}
