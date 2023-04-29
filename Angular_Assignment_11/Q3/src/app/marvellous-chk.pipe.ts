import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, arg: string): string {
    if(arg === "Prime")
    {
      if(value === 1)
      {
        return "It is not prime."
      }

      if(value === 2)
      {
        return "It is prime."
      }

      for(var i : number = 2; i <= value/2; i++)
      {
        if(value%i === 0)
        {
          return "It is not prime."
        }
      }

      return "It is Prime";
    }
    else if(arg === "Perfect")
    {
      var sum : number = 0;
      for(var i : number = 1; i<=value/2; i++)
      {
        if(value%i === 0)
        {
          sum+= i;
        }
      }

      if(sum === value)
      {
        return "It is a perfect number";
      }
      else
      {
        return "It is not a perfect number";
      }
    }
    else if(arg === "Even")
    {
      if(value%2 === 0)
      {
        return "It is even.";
      }
      else
      {
        return "It is not even.";
      }
    }
    else if(arg === "Odd")
    {
      if(value%2 === 0)
      {
        return "It is not odd.";
      }
      else
      {
        return "It is odd.";
      }
    }
    return "Wrong choice.";
  }

}
