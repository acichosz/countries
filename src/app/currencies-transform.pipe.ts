import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currenciesTransform'
})
export class CurrenciesTransformPipe implements PipeTransform {

  transform(value: Object, ...args: unknown[]): String {
    let mappedCurrencies = Object.values(value).map(currency => (`${currency.name}(${currency.symbol})`));
    return mappedCurrencies.join(', ');
  }

}
