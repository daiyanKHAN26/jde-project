import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-our-brands',
  templateUrl: './our-brands.component.html',
  styleUrls: ['./our-brands.component.scss']
})
export class OurBrandsComponent {
  logos = [
    "assets/icons/logo_kenco.png",
    "assets/icons/logo_tassimo.png",
    "assets/icons/logo_lor.png",
    "assets/icons/logo_douwe_egberts.png"
  ]
  innerWidth: any;

  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;

  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    console.log("Zidth", this.innerWidth);
  }
}
