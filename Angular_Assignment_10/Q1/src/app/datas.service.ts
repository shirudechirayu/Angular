import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tech } from './tech';
import { book } from './book';

@Injectable({
  providedIn: 'root'
})
export class DatasService {

  constructor(private httpClient: HttpClient) { }

  public TechUrl = "/assets/Data/Techdata.json/";
  public BooksUrl = "/assets/Data/Booksdata.json/";

  getTechnologies() : Observable<tech[]>{
      return this.httpClient.get<tech[]>(this.TechUrl);
  }

  getBooks() : Observable<book[]>{
    return this.httpClient.get<book[]>(this.BooksUrl);
  }
}
