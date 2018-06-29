import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagingSearchResultGridComponent } from './paging-search-result-grid.component';

describe('PagingSearchResultGridComponent', () => {
  let component: PagingSearchResultGridComponent;
  let fixture: ComponentFixture<PagingSearchResultGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagingSearchResultGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagingSearchResultGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
