import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { ContinentsListComponent } from './continents-list/continents-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/continents', pathMatch: 'full'},
  {path: 'continents', component: ContinentsListComponent},
  {path: 'continents/:continent', component: CountriesListComponent},
  {path: 'continents/:continent/:country', component: CountryDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }