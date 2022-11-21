import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  countryDetail: any = {};
  constructor(private _apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const country= this.route.snapshot.paramMap.get('country');

    this._apiService.getCountryDetail(country)
    .subscribe(response=> this.countryDetail = response);
  }

}
