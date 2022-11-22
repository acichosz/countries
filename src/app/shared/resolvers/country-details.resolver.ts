import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root',
})
export class CountryDetailsResolver implements Resolve<Observable<Object>> {
  constructor(private _apiService: ApiService) {}
  resolve(
    route: ActivatedRouteSnapshot,
  ): Observable<Object> {
    return this._apiService.getCountryDetail(route.paramMap.get('country'));
  }
}
