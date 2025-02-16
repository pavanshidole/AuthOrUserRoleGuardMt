import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDashBoaredComponent } from './product-dash-boared.component';

describe('ProductDashBoaredComponent', () => {
  let component: ProductDashBoaredComponent;
  let fixture: ComponentFixture<ProductDashBoaredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDashBoaredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDashBoaredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
