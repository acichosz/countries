import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { CountryDetailsComponent } from './country-details/country-details.component';
import { ContinentComponent } from './continent/continent.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { ContinentsListComponent } from './continents-list/continents-list.component';
import { CurrenciesTransformPipe } from './currencies-transform.pipe';
import { DisplayValuesPipe } from './display-values.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CountryDetailsComponent,
    ContinentComponent,
    CountriesListComponent,
    ContinentsListComponent,
    CurrenciesTransformPipe,
    DisplayValuesPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
