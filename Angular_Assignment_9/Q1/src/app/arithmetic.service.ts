import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  add(no1 : number, no2 : number) : number
  {
    return no1+no2;
  }

  sub(no1 : number, no2 : number) : number
  {
    return no1-no2;
  }
}
