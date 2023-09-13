import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterSearchPage } from './filter-search.page';

describe('FilterSearchPage', () => {
  let component: FilterSearchPage;
  let fixture: ComponentFixture<FilterSearchPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FilterSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
