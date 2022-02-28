import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BikesService } from '../bikes.service';
import { bikeData } from '../bikeData';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bikes-details',
  templateUrl: './bikes-details.component.html',
  styleUrls: ['./bikes-details.component.css']
})
export class BikesDetailsComponent implements OnInit {
  faStar = faStar;

  bike: bikeData | undefined;

  constructor(
    private route: ActivatedRoute,
    private bikesService: BikesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getBike();
  }

  getBike(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bikesService.getBike(id)
    .subscribe(bike => this.bike = bike);
  }

  goBack(): void {
    this.location.back();
  }

}
