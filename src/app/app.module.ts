import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { NavbarSmallDeviceComponent } from './navbar/navbar-small-device/navbar-small-device.component';
import { NavbarLargeDeviceComponent } from './navbar/navbar-large-device/navbar-large-device.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LifeAtJdeComponent } from './life-at-jde/life-at-jde.component';
import { WhatOurPeopleSayComponent } from './what-our-people-say/what-our-people-say.component';
import { OurBrandsComponent } from './our-brands/our-brands.component';
import { FollowUsComponent } from './follow-us/follow-us.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    NavbarSmallDeviceComponent,
    NavbarLargeDeviceComponent,
    AboutUsComponent,
    LifeAtJdeComponent,
    WhatOurPeopleSayComponent,
    OurBrandsComponent,
    FollowUsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
