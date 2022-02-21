import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';


@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css'],
  animations: [

    trigger('toggleClick', [
      state('true', style({
        backgroundColor: 'lightblue',
        color: 'lightcoral'
      })),
      state('false', style({
        backgroundColor: 'lightcoral',
        color: 'lightblue'
      })),
      transition('true => false', animate('1000ms linear')),
      transition('false => true', animate('1000ms linear'))
    ])
  ]
})
export class ProfilesComponent implements OnInit {
  user = '';
  isGreen = 'true';


  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userData') || '{}').email;
  }

  toggleIsCorrect() {
    this.isGreen = this.isGreen === 'true' ? 'false' : 'true';
  }


}
