import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Technology1Component } from './technology1.component';

describe('Technology1Component', () => {
  let component: Technology1Component;
  let fixture: ComponentFixture<Technology1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Technology1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Technology1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
