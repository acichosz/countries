import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayValues'
})
export class DisplayValuesPipe implements PipeTransform {

  transform(value: Object): String {
    return  Object.values(value).join(', ');
  }

}
