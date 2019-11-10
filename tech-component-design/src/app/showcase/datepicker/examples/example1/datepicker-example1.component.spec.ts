import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerExample1Component } from './datepicker-example1.component';

describe('Example1Component', () => {
  let component: DatepickerExample1Component;
  let fixture: ComponentFixture<DatepickerExample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerExample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
