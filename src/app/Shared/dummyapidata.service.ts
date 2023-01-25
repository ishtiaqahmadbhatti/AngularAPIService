import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class DummyapidataService {
  baseURL = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { }

  getApiData(){
    
    return this.http.get(this.baseURL);
  }
}
