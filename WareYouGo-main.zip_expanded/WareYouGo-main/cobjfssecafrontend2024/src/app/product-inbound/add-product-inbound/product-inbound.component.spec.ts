import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInboundComponent } from './product-inbound.component';

describe('ProductInboundComponent', () => {
  let component: ProductInboundComponent;
  let fixture: ComponentFixture<ProductInboundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInboundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInboundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
