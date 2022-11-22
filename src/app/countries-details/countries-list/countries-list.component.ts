import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { ICountry } from 'src/app/shared/models/country.model';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent implements OnInit {
  countries: Array<ICountry> = [];
  filteredCountries: Array<ICountry> = [];
  region: string | null = '';

  constructor(
    private router: Router,
    private _apiService: ApiService,
    private route: ActivatedRoute
  ) {
    this.route.data.subscribe((value) => {
      this.countries = value['countriesList'];
      this.filteredCountries = value['countriesList'];
    });
  }

  ngOnInit(): void {
    this.region = this.route.snapshot.paramMap.get('continent');
  }

  navigateToCountryDetails(selectedCountry: string): void {
    this.router.navigate([`/continents/${this.region}/${selectedCountry}`]);
  }

  filterCountries(event: Event): void {
    const searchPhrase: string = (
      event.target as HTMLInputElement
    ).value.toLocaleLowerCase();
    this.filteredCountries = this.countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchPhrase)
    );
  }
}
