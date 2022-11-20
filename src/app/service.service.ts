import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getContinents(): any {
    return this.http.get('https://restcountries.com/v3.1/region/europe');
  }

  getCountries(continent: any) {
    return this.http.get(`https://restcountries.com/v3.1/region/${continent}?fields=name,flags`);
  }

  getCountryDetail(country: any){
    return this.http.get(`https://restcountries.com/v3.1/name/${country}?fields=name,flags,capital,currencies,population,languages`);
  }
}
