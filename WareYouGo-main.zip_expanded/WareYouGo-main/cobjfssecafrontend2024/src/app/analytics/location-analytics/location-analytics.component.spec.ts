import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAnalyticsComponent } from './location-analytics.component';

describe('LocationAnalyticsComponent', () => {
  let component: LocationAnalyticsComponent;
  let fixture: ComponentFixture<LocationAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
