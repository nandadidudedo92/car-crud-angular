import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../models/car';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  titlePage: string = "Add New Car"


  car = new Car()

  constructor(private carService: CarService, private router: Router) { }

  ngOnInit(): void {
    if (history.state) {
      const s = history.state
      if (s.data != undefined) {
        this.car = s.data
        this.titlePage = "Edit Data Car"
      }
    }
  }

  save() {
    console.log(this.car)

    if (this.car.carName == undefined) {
      alert("car name wajib diisi")
    } else if (this.car.number == undefined) {
      alert("number wajib diisi")
    } else if (this.car.color == undefined) {
      alert("color wajib diisi")
    } else if (this.car.type == undefined) {
      alert("type wajib diisi")
    } else {
      this.carService.addNewCar(this.car).subscribe(
        data => {

          this.router.navigate(['car-list'])

        }, error => {
          console.log(error)
        }
      )

    }

  }

  goBack() {
    this.router.navigate(['car-list'])
  }

}
