import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-small-device',
  templateUrl: './navbar-small-device.component.html',
  styleUrls: ['./navbar-small-device.component.scss']
})

export class NavbarSmallDeviceComponent implements OnInit {
  navbarOpen = false;
  innerWidth: any;

  constructor(){}

  ngOnInit() {
    
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;    
  }

  menuIcon(){
    if (this.navbarOpen) {
      return "x-icon";
    } else return "hamburger-icon";
  }
}
