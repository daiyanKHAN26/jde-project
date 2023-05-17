import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSmallDeviceComponent } from './navbar-small-device.component';

describe('NavbarSmallDeviceComponent', () => {
  let component: NavbarSmallDeviceComponent;
  let fixture: ComponentFixture<NavbarSmallDeviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarSmallDeviceComponent]
    });
    fixture = TestBed.createComponent(NavbarSmallDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
