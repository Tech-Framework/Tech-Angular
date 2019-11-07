import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechComponentComponent } from './tech-component.component';

describe('TechComponentComponent', () => {
  let component: TechComponentComponent;
  let fixture: ComponentFixture<TechComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
