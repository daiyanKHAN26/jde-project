import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatOurPeopleSayComponent } from './what-our-people-say.component';

describe('WhatOurPeopleSayComponent', () => {
  let component: WhatOurPeopleSayComponent;
  let fixture: ComponentFixture<WhatOurPeopleSayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatOurPeopleSayComponent]
    });
    fixture = TestBed.createComponent(WhatOurPeopleSayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
