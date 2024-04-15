import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotAnalyticsComponent } from './robot-analytics.component';

describe('RobotAnalyticsComponent', () => {
  let component: RobotAnalyticsComponent;
  let fixture: ComponentFixture<RobotAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
