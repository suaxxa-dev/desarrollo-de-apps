import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private api = 'https://api.thecatapi.com/v1/images/search?limit=5';

  constructor(private http: HttpClient) { }

  getCats(): Observable<any> {
    return this.http.get<any>(this.api);
  }
}
