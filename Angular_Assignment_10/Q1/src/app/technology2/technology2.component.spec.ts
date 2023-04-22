import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Technology2Component } from './technology2.component';

describe('Technology2Component', () => {
  let component: Technology2Component;
  let fixture: ComponentFixture<Technology2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Technology2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Technology2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
