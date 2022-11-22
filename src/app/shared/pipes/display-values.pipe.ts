import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayValues',
})
export class DisplayValuesPipe implements PipeTransform {
  transform(value: Object): string {
    return Object.values(value).join(', ');
  }
}
