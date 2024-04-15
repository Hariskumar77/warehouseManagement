import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSuggestionsComponent } from './location-suggestions.component';

describe('LocationSuggestionsComponent', () => {
  let component: LocationSuggestionsComponent;
  let fixture: ComponentFixture<LocationSuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationSuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
