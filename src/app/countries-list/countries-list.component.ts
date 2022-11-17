import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {
  countries: any;
  constructor(private router: Router, private _apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const region= this.route.snapshot.paramMap.get('continent');

    this._apiService.getCountries(region)
    .subscribe(response=> this.countries = response);
  }

  navigateToCountryDetails(selectedCountry:string): void {
    this.router.navigate([`/continents/Europa/${selectedCountry}`]);
  }

}
