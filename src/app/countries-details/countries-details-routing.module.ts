import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesListResolver } from '../shared/resolvers/countries-list.resolver';
import { CountryDetailsResolver } from '../shared/resolvers/country-details.resolver';
import { ContinentsListComponent } from './continents-list/continents-list.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountryDetailsComponent } from './country-details/country-details.component';

const routes: Routes = [
  {path: '', component: ContinentsListComponent},
  {path: 'continents/:continent',
    component: CountriesListComponent,
    resolve: {
      countriesList: CountriesListResolver
    }
  },
  {path: 'continents/:continent/:country',
    component: CountryDetailsComponent,
    resolve: {
      countryDetails: CountryDetailsResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class CountriesDetailsRoutingModule { }
