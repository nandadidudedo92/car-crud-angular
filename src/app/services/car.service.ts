import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) { }

  addNewCar(car: Car) {
    return this.httpClient.post<any>("/api/car/addNewCar", car)
  }

  getAllCar() {
    return this.httpClient.get<any>("/api/car/getall")
  }

}
