import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipo'
})
export class TipoPipe implements PipeTransform {

  transform(value: number, tipe: string): string {
    if(tipe == "internacional") {
      return value + " $"
    } else {
      return value + " Bs"
    }
  }

}