import {Ingredient} from "./ingredient.model";
import { User } from './user.model';

export class Recipe {
  id: number;
  name: string;
  preparation: string;
  imageUrl: string;
  difficulty: string;
  totalLikes: number;
  ingredients: Ingredient[];
  user: User;


  constructor(id: number, name: string, preparation: string, imageUrl: string, difficulty: string, totalLikes: number, ingredients: Ingredient[], user: User) {
    this.id = id;
    this.name = name;
    this.preparation = preparation;
    this.imageUrl = imageUrl;
    this.difficulty = difficulty;
    this.totalLikes = totalLikes;
    this.ingredients = ingredients;
    this.user = user;
  }
}
