import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumserviceService {

  constructor() { }

  chkPrime(no : number) : void{
    if(no===1)
    {
      console.log("no is not prime");
      return;
    }

    if(no===2)
    {
      console.log("no is prime");
      return;
    }

    var count : number = 0;
    for(var i : number=2; i<=no/2; i++)
    {
      if(no%i==0)
        break;
      count++;
    }
    
    if(count===Math.floor((no/2))-1)
      console.log(no+" is prime");
    else
      console.log(no+" is not prime");
  }
}
