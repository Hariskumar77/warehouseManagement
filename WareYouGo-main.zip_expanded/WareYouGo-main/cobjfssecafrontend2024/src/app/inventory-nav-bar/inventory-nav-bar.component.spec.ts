import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryNavBarComponent } from './inventory-nav-bar.component';

describe('InventoryNavBarComponent', () => {
  let component: InventoryNavBarComponent;
  let fixture: ComponentFixture<InventoryNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
