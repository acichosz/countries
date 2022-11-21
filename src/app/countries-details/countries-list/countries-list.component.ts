import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {
  countries: any = [];
  region: string | null = '';

  constructor(private router: Router, private _apiService: ApiService, private route: ActivatedRoute) { 
    this.route.data.subscribe(value => {
      this.countries = value['countriesList'];
    });
  }

  ngOnInit(): void {
    this.region = this.route.snapshot.paramMap.get('continent');

    // this._apiService.getCountries(this.region)
    // .subscribe(response => this.countries = response);
  }

  navigateToCountryDetails(selectedCountry:string): void {
    this.router.navigate([`/continents/${this.region}/${selectedCountry}`]);
  }
}
