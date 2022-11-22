import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent {
  countryDetails: any = {};
  constructor(private _apiService: ApiService, private route: ActivatedRoute) {
    this.route.data.subscribe((value) => {
      this.countryDetails = value['countryDetails'];
    });
  }
}
