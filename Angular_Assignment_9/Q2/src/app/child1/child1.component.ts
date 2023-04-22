import { Component, OnInit } from '@angular/core';
import { NumserviceService } from '../numservice.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit{

  constructor(private numservice : NumserviceService)
  {

  }

  ngOnInit(): void {
      this.numservice.chkPrime(7);
      this.numservice.chkPrime(12);
  }
}
