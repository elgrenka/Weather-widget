import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesOrderComponent } from './bikes-order.component';

describe('BikesOrderComponent', () => {
  let component: BikesOrderComponent;
  let fixture: ComponentFixture<BikesOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikesOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
