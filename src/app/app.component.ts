import { Component } from '@angular/core';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { Location } from '@angular/common'
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router, private location: Location) {
    this.router.events
    .pipe(
      filter(event => event instanceof NavigationStart),
      map(event => event as NavigationStart)
    )
    .subscribe(
      event => this.showBackButton = event.url === '/continents' ? false : true
    );
  };

  title = 'countries';
  showBackButton = false;

  historyBack(): void {
    this.location.back();
  }
  
}
