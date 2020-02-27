import { Restaurant } from './restaurant-item/restaurant.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  @Input() restaurant : Restaurant[] = [
    
  ]

  constructor() { }

  ngOnInit() {
  }

}
