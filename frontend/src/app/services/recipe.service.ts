import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  message = new Subject<string>();

  sendmessage(message: string){
    this.message.next(message);
  }

}
