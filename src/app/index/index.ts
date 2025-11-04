import { Component, signal } from '@angular/core';

type Student = {
  name: string;
  age: number;
};

@Component({
  selector: 'app-index',
  imports: [],
  templateUrl: './index.html',
})
export class Index {
  title = signal('Home');
  students: Student[] = [
    {
      name: 'Joe',
      age: 25,
    },
    {
      name: 'Emma',
      age: 23,
    },
  ];
}
