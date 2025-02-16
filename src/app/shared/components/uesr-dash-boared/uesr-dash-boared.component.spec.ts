import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UesrDashBoaredComponent } from './uesr-dash-boared.component';

describe('UesrDashBoaredComponent', () => {
  let component: UesrDashBoaredComponent;
  let fixture: ComponentFixture<UesrDashBoaredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UesrDashBoaredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UesrDashBoaredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
