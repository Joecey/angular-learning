import { Injectable } from '@angular/core';

// after adding to config, we added http client and observable to service
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentResponse } from '../types/studentTypes';

// !Note!: An observable can emit multiple values over time and be canceled or retried,
// ! while a promise handles only a single asynchronous event and cannot be canceled.

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  getStudents(url: string): Observable<StudentResponse> {
    return this.http.get<StudentResponse>(url);
  }
}
