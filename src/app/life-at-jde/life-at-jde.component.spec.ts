import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeAtJdeComponent } from './life-at-jde.component';

describe('LifeAtJdeComponent', () => {
  let component: LifeAtJdeComponent;
  let fixture: ComponentFixture<LifeAtJdeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifeAtJdeComponent]
    });
    fixture = TestBed.createComponent(LifeAtJdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
