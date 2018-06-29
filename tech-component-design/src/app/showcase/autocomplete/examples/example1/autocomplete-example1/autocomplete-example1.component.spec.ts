import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteExample1Component } from './autocomplete-example1.component';

describe('AutocompleteExample1Component', () => {
  let component: AutocompleteExample1Component;
  let fixture: ComponentFixture<AutocompleteExample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteExample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
