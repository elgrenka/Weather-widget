import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikesMainComponent } from './bikes-main.component';

describe('BikesMainComponent', () => {
  let component: BikesMainComponent;
  let fixture: ComponentFixture<BikesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikesMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
