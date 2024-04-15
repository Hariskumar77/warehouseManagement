import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRelocationComponent } from './product-relocation.component';

describe('ProductRelocationComponent', () => {
  let component: ProductRelocationComponent;
  let fixture: ComponentFixture<ProductRelocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRelocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRelocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
