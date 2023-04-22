import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StrserviceService {

  constructor() { }

  chkCapital(str : String) : void{
    var count : number = 0;
    for(var i : number = 0; i < str.length; i++)
    {
      if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90)
      {
        count++;
      }
    }

    console.log("Number of capitals are "+count);
  }
}
