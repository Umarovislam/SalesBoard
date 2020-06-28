import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private htpp: HttpClient) { }

  getData() {
    return this.htpp.get('https://localhost:44335/api/order/get').pipe(tap(data => data));
  }
  
}
