import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-continents-list',
  templateUrl: './continents-list.component.html',
  styleUrls: ['./continents-list.component.scss']
})
export class ContinentsListComponent implements OnInit {
  continents: Array<any> = [
    {
      label: 'Afryka',
      value: 'africa',

    },
    {
      label: 'Ameryka',
      value: 'americas'
    },
    {
      label: 'Azja',
      value: 'asia'
    },
    {
      label: 'Europa',
      value: 'europe'
    },
    {
      label: 'Oceania',
      value: 'oceania'
    },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToCountriesList(selectedContinent: String): void {
    this.router.navigate([`continents/${selectedContinent}`]);
  }
}
