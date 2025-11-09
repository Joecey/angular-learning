import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PresidentResponse } from '../types/presidentTypes';

@Injectable({
  providedIn: 'root',
})
export class PresidentService {
  constructor(private http: HttpClient) {}

  getPresidents(url: string): Observable<PresidentResponse> {
    return this.http.get<PresidentResponse>(url);
  }
}
