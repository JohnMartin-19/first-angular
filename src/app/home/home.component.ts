import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocation} from '../housing_location/housing_location.component';
import {HousingLocationComponent} from '../housing_location/housing_location.component'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
  <app-housing-location></app-housing-location>
    </section>
    
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly baseURL = 'https://angular.dev/assets/tutorials/common'
  
  housingLocation : HousingLocation = {
    id:99,
    name:'John',
    city:'Nakuru',
    country:'Kenya',
    state:'RV',
    photo:`${this.baseURL}/example-house.jpg`,
    laundry:true,
    availableUnits:12,
    wifi:true,
  }
}
