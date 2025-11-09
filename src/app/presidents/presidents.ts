import { Component } from '@angular/core';
import { PresidentService } from '../services/president-service';
import { PresidentItem, PresidentResponse } from '../types/presidentTypes';

@Component({
  selector: 'app-presidents',
  imports: [],
  templateUrl: './presidents.html',
})
export class Presidents {
  presidents: PresidentItem[] | null = null;
  pageTitle: string = '';

  // NgZone used to update listName hidden to detect
  constructor(private ps: PresidentService) {}

  // on component mount, call service
  ngOnInit() {
    this.ps.getPresidents('https://api.npoint.io/2c56ecb85376777f3c08').subscribe({
      next: (data: PresidentResponse) => {
        console.log(data);
        this.pageTitle = data.title;
        this.presidents = data.presidents.map((president) => {
          return {
            ...president,
            surname: president.surname.toUpperCase(),
            termEnd: parseInt(president.termEnd),
            termStart: parseInt(president.termStart),
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
