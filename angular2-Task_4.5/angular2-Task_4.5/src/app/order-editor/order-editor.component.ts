import { Component, OnInit } from '@angular/core';
import { BikesService } from '../bikes.service';
import { bikeData } from '../bikeData';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-order-editor',
  templateUrl: './order-editor.component.html',
  styleUrls: ['./order-editor.component.css']
})
export class OrderEditorComponent implements OnInit {
  public bikes: bikeData[] = []; 

  dropdownList!: FormGroup;
  deliveryAddress!: FormGroup;
  paymentMethod!: FormGroup;
  deliveryDate!: FormGroup;
  submitButton!: FormGroup;
  dropdown_step = false;
  address_step = false;
  payment_step = false;
  date_step = false;
  submit_step = false;
  step = 1;
  selectedBike: string = '';
  isHidden: boolean = false;

  selectBike(event: any) {
    this.selectedBike = event.target.value;
  }

  constructor(private bikesService: BikesService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getBikes();

    this.dropdownList = this.fb.group({
      dropdown: ['']
    });

    this.deliveryAddress = this.fb.group({
      country: [''],
      city: [''],
      address: ['']
    });
    
    this.paymentMethod = this.fb.group({
      card: [''],
      payPal: [''],
      cash: ['']
    });

    this.deliveryDate = this.fb.group({
      delivery: [''],
      calendar: ['']
    });

    this.submitButton = this.fb.group({

    });

    this.dropdownList.valueChanges.subscribe((v) => {
      console.log(v);
      this.dropdownList.setValue(v, {emitEvent: false});
    });

    this.deliveryDate.valueChanges.subscribe((v) => {
      console.log(v);
      if(v.delivery === 'newDate') {
        this.isHidden = true;
      } else {
        this.isHidden = false;
      }
    });
  }

  next() {
    if(this.step === 1) {
      this.dropdown_step = true;
      if(this.dropdownList.invalid) {return}
    }
    
    if(this.step === 2) {
      this.address_step = true;
      if(this.deliveryAddress.invalid) {return}
    }
    
    if(this.step === 3) {
      this.payment_step = true;
      if(this.paymentMethod.invalid) {return}
    }

    if(this.step === 4) {
      this.date_step = true;
      if(this.deliveryDate.invalid) {return}
    }
    this.step++;
  }

  previous() {
    if(this.step === 1) {
      this.dropdown_step = false;
    }
    
    if(this.step === 2) {
      this.address_step = false;
    }
    if(this.step === 3) {
      this.payment_step = false;
    }
    if(this.step === 4) {
      this.date_step = false;
    }
    this.step--;
  }

  submit() {
    if(this.step === 5) {
      this.submit_step = true;
      if(this.submitButton.invalid) {return}
    }
    console.table(this.deliveryAddress.value);
    console.table(this.deliveryDate.value);
  }

  getBikes() {
    this.bikesService.getBikes()
      .subscribe(bikes => this.bikes = bikes);
  }

}
