import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Batch } from './Batch';

@Injectable({
  providedIn: 'root'
})
export class TriggerService {

  constructor(public httpClient : HttpClient) {

  
  }

  private baseUrl : string= "http://localhost:5100/getBatches";

  public getBatches() : Observable<Batch[]>{

    return this.httpClient.get<Batch[]>(this.baseUrl);

  }
}
