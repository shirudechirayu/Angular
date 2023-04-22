import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';
import { tech } from '../tech';

@Component({
  selector: 'app-technology2',
  templateUrl: './technology2.component.html',
  styleUrls: ['./technology2.component.css']
})
export class Technology2Component implements OnInit{

  public techs : tech[] = [];

  constructor(private datas : DatasService){

  }
  ngOnInit(): void {
    this.datas.getTechnologies().subscribe(data=>this.techs=data);
  }
}
