import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-what-our-people-say',
  templateUrl: './what-our-people-say.component.html',
  styleUrls: ['./what-our-people-say.component.scss']
})
export class WhatOurPeopleSayComponent {
  innerWidth: any;

  constructor(){}
  
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    
  }

  @HostListener('window:resize', ['$event']) 
  onResize() {
    this.innerWidth = window.innerWidth;
    console.log("Zidth", this.innerWidth);
  }
}
