import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOutboundComponent } from './product-outbound.component';

describe('ProductOutboundComponent', () => {
  let component: ProductOutboundComponent;
  let fixture: ComponentFixture<ProductOutboundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOutboundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOutboundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
