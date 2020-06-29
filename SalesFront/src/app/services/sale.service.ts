import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get('http://localhost:5000/order/get').pipe(tap(data => data));
  }
}