import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './restaurant-item/restaurant.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  constructor(private restaurantsService: RestaurantsService) { }

  restaurant: Restaurant[]

  ngOnInit() {
    this.restaurantsService.restaurants().
      subscribe(
        restaurants => this.restaurant = restaurants)
  }

}
