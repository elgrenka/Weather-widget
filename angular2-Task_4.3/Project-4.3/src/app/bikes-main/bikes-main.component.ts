import { Component, OnInit } from '@angular/core';
import { BikesService } from '../bikes.service';
import { bikeData } from '../bikeData';

@Component({
  selector: 'app-bikes-main',
  templateUrl: './bikes-main.component.html',
  styleUrls: ['./bikes-main.component.css']
})
export class BikesMainComponent implements OnInit {

  public bikes: bikeData[] = []; 

  constructor(private bikesService: BikesService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.bikesService.getBikes()
      .subscribe(bikes => this.bikes = bikes);
  }

}
