import { ErrorHandler } from './../app.error-handler';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant-item/restaurant.model';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class RestaurantsService {

  apiRestaurants = environment.api + "restaurants/";  

  constructor(private http : Http) { }

  restaurants(): Observable<Restaurant[]> {
    return this.http.get(this.apiRestaurants)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

  restaurantsById(id: string) : Observable<Restaurant>{
    return this.http.get(this.apiRestaurants + id)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  } 

}
