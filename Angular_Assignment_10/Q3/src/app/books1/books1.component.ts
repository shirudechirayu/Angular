import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';
import { book } from '../book';

@Component({
  selector: 'app-books1',
  templateUrl: './books1.component.html',
  styleUrls: ['./books1.component.css']
})
export class Books1Component implements OnInit{

  public books : book[] = [];

  constructor(private datas : DatasService){

  }
  ngOnInit(): void {
    this.datas.getBooks().subscribe(data=>this.books=data);
  }
}
