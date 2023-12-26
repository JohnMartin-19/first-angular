import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocation} from '../housing_location/housing_location.component';
export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
  country:string
}

@Component(
  {
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
    <img class="listing-photo" [src]="housingLocation.photo" alt="exterior photo of {{ housingLocation.name}}">

    <h2 class="listing-heading">{{ housingLocation.name}}</h2>

    <p class="listing-location">{{ housingLocation.city}}, {{ housingLocation.state}}</p>
    </section>

  `,
  styleUrls: ['./housing_location.component.css'],

  
})


export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation
}
