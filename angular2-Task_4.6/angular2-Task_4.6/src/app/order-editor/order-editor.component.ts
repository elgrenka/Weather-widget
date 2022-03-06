import { Component, OnInit } from '@angular/core';
import { BikesService } from '../bikes.service';
import { bikeData } from '../bikeData';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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
  // today: Date = new Date();

  selectBike(event: any) {
    this.selectedBike = event.target.value;
  }

  constructor(private bikesService: BikesService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getBikes();

    this.dropdownList = this.fb.group({
      dropdown: ['', Validators.required]
    });

    this.deliveryAddress = this.fb.group({
      country: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\- ]+$/)]],
      city: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\- ]+$/)]],
      address: ['', Validators.required]
    });
    
    this.paymentMethod = this.fb.group({
      card: ['', [Validators.required, Validators.pattern(/^(\d{16})+$/)]],
      payPal: ['', [Validators.required, 
        Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)]],
      cash: ['', [Validators.required, Validators.pattern(/^\d+$/)]]
    });

    this.deliveryDate = this.fb.group({
      delivery: ['Today', Validators.required],
      calendar: ['', [Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]]
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

  get dropdown() {return this.dropdownList.get('dropdown');}
  get country() {return this.deliveryAddress.get('country');}
  get city() {return this.deliveryAddress.get('city');}
  get address() {return this.deliveryAddress.get('address');}
  get card() {return this.paymentMethod.get('card');}
  get payPal() {return this.paymentMethod.get('payPal');}
  get cash() {return this.paymentMethod.get('cash');}
  get calendar() {return this.deliveryDate.get('calendar');}

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
      // if(this.deliveryDate.value.invalid || this.deliveryDate.value.calendar === '') {return}
      if(this.deliveryDate.value.calendar === '' && this.deliveryDate.value.delivery !== 'Today' && this.deliveryDate.value.delivery !== 'Tomorrow') {return}
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
    console.table(this.dropdownList.value);
    console.table(this.deliveryAddress.value);
    console.table(this.paymentMethod.value);
    console.table(this.deliveryDate.value);
  }

  getBikes() {
    this.bikesService.getBikes()
      .subscribe(bikes => this.bikes = bikes);
  }

}
