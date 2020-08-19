import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipo'
})
export class TipoPipe implements PipeTransform {

  transform(value: any, tipe: any): any {
    if(tipe == "internacional") {
      return value + " $"
    } else {
      return value + " Bs"
    }
    return null;
  }

}