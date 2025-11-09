import { Component } from '@angular/core';
import { StudentService } from '../services/student-service';
import { StudentItem, StudentResponse } from '../types/studentTypes';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.html',
})
export class Student {
  students: StudentItem[] = [];

  constructor(private ss: StudentService) {}

  // on component mount, call service
  ngOnInit() {
    this.ss.getStudents('https://api.npoint.io/3ec5f029f8928bdf2a7f').subscribe({
      next: (data: StudentResponse) => {
        this.students = data.students.map((student) => {
          return {
            ...student,
            age: parseInt(student.age),
            sex: ['M', 'F'].includes(student.sex) ? (student.sex as 'M' | 'F') : 'Undefined',
          };
        });
      },
      error: (e) => {
        console.error(e);
      },
      complete: () => {},
    });
  }
}
