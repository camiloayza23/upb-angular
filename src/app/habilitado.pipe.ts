import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'habilitado'
})
export class HabilitadoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === "true") {
      return 'Habilitado';
    } else {
      return 'Deshabilitado'
    }
  }

}