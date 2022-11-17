import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-continents-list',
  templateUrl: './continents-list.component.html',
  styleUrls: ['./continents-list.component.scss']
})
export class ContinentsListComponent implements OnInit {
  continents: Array<Object> = [
    {
      label: 'Afryka',
      value: 'africa'
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

  constructor() { }

  ngOnInit(): void {
  }

}
