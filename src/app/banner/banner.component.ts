import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  innerWidth: any;
  mobileVideo = true;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    console.log("width", this.innerWidth);
    this.videoDimensions();
  }

  @HostListener('window:resize', ['$event']) onResize() {
    this.innerWidth = window.innerWidth;
  }

  videoDimensions(){
    if(this.innerWidth < 576){
      this.mobileVideo = true;
    }
  }
}