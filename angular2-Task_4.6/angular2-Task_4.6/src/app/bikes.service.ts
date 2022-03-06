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

  getBike(id: number): Observable<bikeData> {
    return of(data.find(bike => bike.id === id)!);
  }

  constructor() { }
}
