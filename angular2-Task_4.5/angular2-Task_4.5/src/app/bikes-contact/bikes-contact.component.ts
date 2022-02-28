import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikes-contact',
  templateUrl: './bikes-contact.component.html',
  styleUrls: ['./bikes-contact.component.css']
})
export class BikesContactComponent implements OnInit {

  onSubmit(contactForm: any) {
    console.table(contactForm.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
