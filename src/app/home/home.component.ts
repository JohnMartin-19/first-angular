import {Component,inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingService} from '../housing.service'
import {HousingLocation} from '../housing_location/locationList';
import {HousingLocationComponent} from '../housing_location/housing_location.component'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HousingLocationComponent],
  template: `
    <section>
    <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button class="primary" type="button" (click)="filterResult(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      
      <app-housing-location 
      *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation">
    </app-housing-location>
      
    </section>
    
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = []

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList
  }
  filterResult(text:string){
    if(!text){
      this.filteredLocationList = this.housingLocationList
    } 
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
     housingLocation?.city.toLowerCase().includes(text.toLocaleLowerCase()),)
  }
}
