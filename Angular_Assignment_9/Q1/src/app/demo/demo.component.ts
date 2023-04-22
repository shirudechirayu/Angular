import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit{

  addResult : number = 0;
  subResult : number = 0;
  constructor(public arithmeticService : ArithmeticService){

  }

  ngOnInit(): void {
      this.addResult=this.arithmeticService.add(4,3);
      this.subResult=this.arithmeticService.sub(4,3);
  }

}
