import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { firstpagenavComponent } from './firstpagenav.component';

describe('firstpagenavComponent', () => {
  let component: firstpagenavComponent;
  let fixture: ComponentFixture<firstpagenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ firstpagenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(firstpagenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
