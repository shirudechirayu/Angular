import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';
import { book } from '../book';

@Component({
  selector: 'app-books2',
  templateUrl: './books2.component.html',
  styleUrls: ['./books2.component.css']
})
export class Books2Component implements OnInit{

  public books : book[] = [];
  constructor(private datas : DatasService){

  }
  ngOnInit(): void {
    this.datas.getBooks().subscribe(data=>this.books=data);
  }
}
