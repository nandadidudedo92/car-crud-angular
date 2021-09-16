import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  carList: Car[] = []

  constructor(private router: Router, private carService: CarService) { }

  ngOnInit(): void {
    this.getAllCar()
  }

  addCar() {
    this.router.navigate(['add-car'])
  }

  getAllCar() {
    this.carService.getAllCar().subscribe(
      data => {
        console.log(data)
        this.carList = data.datas
      }, error => {

      }
    )
  }

  edit(car: Car) {
    console.log(car)
    this.router.navigate(['add-car'], { state: { data: car } })
  }

}
