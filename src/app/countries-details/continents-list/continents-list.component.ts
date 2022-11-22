import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IContinent } from 'src/app/shared/models/continents.model';

@Component({
  selector: 'app-continents-list',
  templateUrl: './continents-list.component.html',
  styleUrls: ['./continents-list.component.scss'],
})
export class ContinentsListComponent {
  continents: Array<IContinent> = [
    {
      label: 'Afryka',
      value: 'africa',
    },
    {
      label: 'Ameryka',
      value: 'americas',
    },
    {
      label: 'Azja',
      value: 'asia',
    },
    {
      label: 'Europa',
      value: 'europe',
    },
    {
      label: 'Oceania',
      value: 'oceania',
    },
  ];

  constructor(private router: Router) {}

  navigateToCountriesList(selectedContinent: string): void {
    this.router.navigate([`continents/${selectedContinent}`]);
  }
}
