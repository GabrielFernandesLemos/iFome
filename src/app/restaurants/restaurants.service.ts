import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant-item/restaurant.model';

@Injectable()
export class RestaurantsService {

  rests : Restaurant[] = [
    {
      id: "brea-bakery",
      name: "Bread & Bakery",
      category: "Bakery",
      deliveryEstimate: "25m",
      rating: 4.9,
      imagePath: "assets/img/restaurants/breadbakery.png"
    },
    {
      id: "burguer-house",
      name: "Burguer House",
      category: "Hamburguers",
      deliveryEstimate: "100m",
      rating: 3.5,
      imagePath: "assets/img/restaurants/burgerhouse.png"
    }
  ]

  constructor() { }

  restaurants(): Restaurant[] {
    return this.rests;
  }

}
