import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  constructor(private http: HttpClient) { }

  baseCardUrl = 'https://randomuser.me/api/';

  public getCards(): Observable<any> {
    const url = this.baseCardUrl;
    return this.http.get<any>(url);
  }
}
