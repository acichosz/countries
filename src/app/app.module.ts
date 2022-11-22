import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountriesDetailsModule } from './countries-details/countries-details.module';
import { AngularMaterialComponentsModule } from './angular-material-components/angular-material-components.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [AppComponent, AboutMeComponent, LogoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CountriesDetailsModule,
    AngularMaterialComponentsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
