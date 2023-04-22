import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';
import { tech } from '../tech';

@Component({
  selector: 'app-technology1',
  templateUrl: './technology1.component.html',
  styleUrls: ['./technology1.component.css']
})
export class Technology1Component implements OnInit{

  public techs : tech[] = [];

  constructor(private datas : DatasService){

  }
  ngOnInit(): void {
    this.datas.getTechnologies().subscribe(data=>this.techs=data);
  }
}
