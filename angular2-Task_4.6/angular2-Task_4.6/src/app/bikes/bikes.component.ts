import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})

export class BikesComponent implements OnInit {

  today!: Date;

  constructor() {
    
  }

  ngOnInit(): void {
    this.today = new Date();
  }

}
