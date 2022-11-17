import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CountryDetailsComponent } from './country-details/country-details.component';
import { ContinentComponent } from './continent/continent.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { ContinentsListComponent } from './continents-list/continents-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryDetailsComponent,
    ContinentComponent,
    CountriesListComponent,
    ContinentsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
