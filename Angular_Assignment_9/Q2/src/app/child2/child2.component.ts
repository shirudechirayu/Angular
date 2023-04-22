import { Component, OnInit } from '@angular/core';
import { StrserviceService } from '../strservice.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit{

  constructor(private strservice : StrserviceService){

  }

  ngOnInit() : void{
    this.strservice.chkCapital("MarvellousInfosystems");
  }
}
