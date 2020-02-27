import { Restaurant } from './../restaurants/restaurant-item/restaurant.model';
import { RestaurantsService } from './../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant

  constructor(private restaurantsService : RestaurantsService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsService.restaurantsById(this.route.snapshot.params['id'])
    .subscribe(restaurant => this.restaurant = restaurant)
  }

}
