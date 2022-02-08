import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { data } from '../assets/data';
import { bikeData } from './bikeData';

@Injectable({
  providedIn: 'root'
})
export class BikesService {

  getBikes(): Observable<bikeData[]> {
    return of(data);
  }

  constructor() { }
}
