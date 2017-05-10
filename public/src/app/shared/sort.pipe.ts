import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, direction: string): any {
    if (value.length === 0) {
      return value;
    }
    value.sort((a, b) => {
      return a.localeCompare(b);
    });
    if (direction === 'asc') {
      return value;
    } else if (direction === 'desc') {
      return value.reverse();
    }
  }

}
