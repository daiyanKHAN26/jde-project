import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLargeDeviceComponent } from './navbar-large-device.component';

describe('NavbarLargeDeviceComponent', () => {
  let component: NavbarLargeDeviceComponent;
  let fixture: ComponentFixture<NavbarLargeDeviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarLargeDeviceComponent]
    });
    fixture = TestBed.createComponent(NavbarLargeDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
