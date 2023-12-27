import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocation} from '../housing_location/locationList';
import { RouterLink,RouterOutlet } from '@angular/router';

@Component(
  {
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  template: `
    <section class="listing">
    <img class="listing-photo" [src]="housingLocation.photo" alt="exterior photo of {{ housingLocation.name}}">

    <h2 class="listing-heading">{{ housingLocation.name}}</h2>

    <p class="listing-location">{{ housingLocation.city}}, {{ housingLocation.state}}</p>
    <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>

  `,
  styleUrls: ['./housing_location.component.css'],

  
})


export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation
}

