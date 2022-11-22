import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getCountries(continent: any): Observable<Object> {
    return this.http.get(
      `https://restcountries.com/v3.1/region/${continent}?fields=name,flags`
    );
  }

  getCountryDetail(country: any): Observable<Object> {
    return this.http.get(
      `https://restcountries.com/v3.1/name/${country}?fields=name,flags,capital,currencies,population,languages`
    );
  }
}
