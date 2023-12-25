import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

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
    <p>housing-location works!</p>
  `,
  styleUrls: ['./housing_location.component.css'],

  
})


export class HousingLocationComponent {

}

