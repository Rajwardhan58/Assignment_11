import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberChk'
})
export class NumberChkPipe implements PipeTransform {

  transform(value: number, Param: string): string {
    let num = value
    if(Param=="Prime")
    {
      let i =2 ;
      let cnt = 0;
        while(i<=num/2)
        {
          if(num%i==0)
          {
            cnt++;
              break;
          }
          i++
        }
        if(cnt)
        {
          return "The number is not Prime"
        }
        else
        {
          return "The number is Prime"
        }
    }
    else if(Param=="Perfect")
    {
      let i =1;
      let add = 0;
        while(i<num)
        {
          if(num%i==0)
          {
            add=add+i;
          }
          i++
        }
        if(add==num)
        {
          return "The number is perfect number"
        }
        else
      {
        return "The number is not perfect number"
      }
    }
    else if(Param=="Even")
    {
        if(num%2==0)
        {
          return "The number is even number"
        }
        else
        {
          return "The number is not even number"
        }
    }
  else if(Param=="Odd")
    {
        if(num%2!=0)
        {
          return "The number is odd number"
        }
        else
        {
          return "The number is not odd number"
        }
    }
    else
    {
      return " "
    }
  }
}
