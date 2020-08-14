import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expo'
})
export class ExpoPipe implements PipeTransform {

  transform(value: any, exponent: any, text?:string): any {
    return text + ' ' + Math.pow(value,isNaN(exponent) ? 1 : exponent);
  }

}