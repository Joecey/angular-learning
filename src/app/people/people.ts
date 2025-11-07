import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-people',
  imports: [FormsModule],
  templateUrl: './people.html',
})
export class People {
  people: string[];
  nameInput: string = '';

  constructor() {
    this.people = ['John'];
  }

  submitName() {
    this.people.push(this.nameInput);
    this.nameInput = '';
  }

  removeLast() {
    this.people.pop();
  }
}
