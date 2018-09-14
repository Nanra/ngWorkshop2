import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'find'
})
export class FindPipe implements PipeTransform {

  transform(value: any, propertyName: string, searchStr: string): any {
    if (value.length === 0 || searchStr.trim().length === 0) {
      return value;
    } // End of If

    let resultArray = [];
    searchStr = searchStr.toLowerCase();
    for (const elem of value) {
      const str = elem[propertyName].toLowerCase();

      if (str.indexOf(searchStr) !== -1) {
        resultArray.push(elem);

      } // End of If2
    } // End of For
    return resultArray;
  } // End of Transform Method

}
