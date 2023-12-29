import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {HousingService} from '../housing.service';
import {HousingLocation} from '../housing_location/locationList'
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,ActivatedRoute,HousingService,HousingService],
  template: `
    <p>
      details works!
    </p>
  `,
  styles: [
  ]
})
export class DetailsComponent {

}
