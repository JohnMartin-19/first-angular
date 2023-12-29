import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {HousingService} from '../housing.service';
import {HousingLocation} from '../housing_location/locationList'
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
   <article>
      <img
            class="listing-photo"
            [src]="housingLocation?.photo"
            alt="Exterior photo of {{ housingLocation?.name }}"
            crossorigin
          />
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">{{ housingLocation?.city }}, {{ housingLocation?.state }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{ housingLocation?.availableUnits }}</li>
          <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
          <li>Does this location have laundry: {{ housingLocation?.laundry }}</li>
   </article>
  `,
  styles: [
  ]
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  housingService = inject(HousingService)
  housingLocation: HousingLocation| undefined
  housingLocationId = -1
  constructor(){
    this.housingLocationId = Number(this.route.snapshot.params['id'])
  }
}
