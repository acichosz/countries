import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinentsListComponent } from './continents-list/continents-list.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountryDetailsComponent } from './country-details/country-details.component';

const routes: Routes = [
  {path: '', component: ContinentsListComponent},
  {path: 'continents/:continent', component: CountriesListComponent},
  {path: 'continents/:continent/:country', component: CountryDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class CountriesDetailsRoutingModule { }
