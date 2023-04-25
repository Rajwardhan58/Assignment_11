import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    let str = value
    let iEnd=str.length-1;
    let temp:string="";
      while(iEnd>=0)
      {
        temp=temp+str[iEnd--]
      }

    return temp;
  }

}
