import { Component, OnInit } from '@angular/core';
import { NumserviceService } from '../numservice.service';
import { StrserviceService } from '../strservice.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{

  constructor(private numservice : NumserviceService, private strservice : StrserviceService){

  }

  ngOnInit(): void {
      this.numservice.chkPrime(7);
      this.numservice.chkPrime(12);
      this.strservice.chkCapital("MarvellousInfosystems");
  }
}
