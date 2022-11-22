import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/continents', pathMatch: 'full' },
  {
    path: 'continents',
    loadChildren: () =>
      import('./countries-details/countries-details.module').then(
        (m) => m.CountriesDetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
