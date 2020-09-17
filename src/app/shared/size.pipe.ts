import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'size'
})
export class SizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value >= 0 && value < 21) {
        return 'XS';
    } else if (value >= 21 && value < 31) {
        return 'S';
    } else if (value >= 31 && value < 51) {
        return 'M';
    } else if (value >= 51 && value < 71) {
        return 'L';
    } else if (value >= 71 && value < 101) {
        return 'XL';
    }

    
  }

}