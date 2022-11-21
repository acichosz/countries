import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { ContinentsListComponent } from './continents-list/continents-list.component';
import { AngularMaterialComponentsModule } from '../angular-material-components/angular-material-components.module';



@NgModule({
  declarations: [
    CountryDetailsComponent,
    CountriesListComponent,
    ContinentsListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AngularMaterialComponentsModule
  ]
})
export class CountriesDetailsModule { }
