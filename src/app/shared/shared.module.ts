import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrenciesTransformPipe } from './pipes/currencies-transform.pipe';
import { DisplayValuesPipe } from './pipes/display-values.pipe';



@NgModule({
  declarations: [
    CurrenciesTransformPipe,
    DisplayValuesPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CurrenciesTransformPipe,
    DisplayValuesPipe,
  ]
})
export class SharedModule { }
