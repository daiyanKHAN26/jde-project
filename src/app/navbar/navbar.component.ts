import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
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
