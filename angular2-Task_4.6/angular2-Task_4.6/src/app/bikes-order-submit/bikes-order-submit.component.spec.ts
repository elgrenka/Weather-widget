import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesOrderSubmitComponent } from './bikes-order-submit.component';

describe('BikesOrderSubmitComponent', () => {
  let component: BikesOrderSubmitComponent;
  let fixture: ComponentFixture<BikesOrderSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikesOrderSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesOrderSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
