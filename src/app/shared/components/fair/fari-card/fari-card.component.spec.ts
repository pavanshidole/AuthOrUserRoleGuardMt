import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FariCardComponent } from './fari-card.component';

describe('FariCardComponent', () => {
  let component: FariCardComponent;
  let fixture: ComponentFixture<FariCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FariCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FariCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
