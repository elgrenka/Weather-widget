import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesContactComponent } from './bikes-contact.component';

describe('BikesContactComponent', () => {
  let component: BikesContactComponent;
  let fixture: ComponentFixture<BikesContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikesContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
