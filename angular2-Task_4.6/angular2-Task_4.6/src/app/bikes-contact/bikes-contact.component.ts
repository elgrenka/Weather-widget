import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/assets/contact';

@Component({
  selector: 'app-bikes-contact',
  templateUrl: './bikes-contact.component.html',
  styleUrls: ['./bikes-contact.component.css']
})

export class BikesContactComponent implements OnInit {

  newContact = new Contact('', '', '', '');

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(`Name: ${this.newContact.userName}`)
    console.log(`Surname: ${this.newContact.userSurname}`)
    console.log(`Email: ${this.newContact.userEmail}`)
    console.log(`Description: ${this.newContact.userDescription}`)
  }

  constructor() { }

  ngOnInit(): void {
   
  }
}

