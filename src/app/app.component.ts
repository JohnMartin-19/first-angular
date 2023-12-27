import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `
    <main>
      <a [routerLink]="['/']">
      <header class="brand-name">
        <h1><a href="/">{{ title }}</a></h1>
      </header>
      <section class="content">
        <app-home/>
        
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MILIMANI HOMES';
}
