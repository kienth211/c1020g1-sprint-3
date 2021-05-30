import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  public API = 'http://localhost:8080/api/dish';

  constructor(public http: HttpClient) { }

  findDishById(dishId: number) {
    return this.http.get(this.API + '/' + dishId);
  }
}
