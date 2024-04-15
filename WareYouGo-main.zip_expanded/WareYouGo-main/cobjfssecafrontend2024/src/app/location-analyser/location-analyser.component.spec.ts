import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAnalyserComponent } from './location-analyser.component';

describe('LocationAnalyserComponent', () => {
  let component: LocationAnalyserComponent;
  let fixture: ComponentFixture<LocationAnalyserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationAnalyserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationAnalyserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
