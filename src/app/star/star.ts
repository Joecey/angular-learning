import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-star',
  imports: [],
  templateUrl: './star.html',
})
export class Star {
  title = signal('Star');
  count: number = 0;
  messageHidden: boolean;

  constructor() {
    this.messageHidden = true;
  }

  onPress() {
    this.count++;
  }

  onStarDoublePress() {
    this.messageHidden = !this.messageHidden;
  }
}
