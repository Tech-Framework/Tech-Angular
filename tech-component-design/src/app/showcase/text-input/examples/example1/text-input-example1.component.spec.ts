import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TextInputExample1Component } from './text-input-example1.component';


describe('Example1Component', () => {
  let component: TextInputExample1Component;
  let fixture: ComponentFixture<TextInputExample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextInputExample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
