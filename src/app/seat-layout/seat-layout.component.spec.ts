import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatLayoutComponent } from './seat-layout.component';

describe('SeatLayoutComponent', () => {
  let component: SeatLayoutComponent;
  let fixture: ComponentFixture<SeatLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeatLayoutComponent]
    });
    fixture = TestBed.createComponent(SeatLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
