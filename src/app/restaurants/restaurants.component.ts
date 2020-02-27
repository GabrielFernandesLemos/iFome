import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './restaurant-item/restaurant.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  @Input() restaurant : Restaurant[] = [
    {
      id: "bread-bakery",
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
    },
  ]

  constructor(private restaurantsService : RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.restaurants()
  }

}
