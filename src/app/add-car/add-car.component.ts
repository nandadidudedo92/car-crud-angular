import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Car } from '../models/car';
import { CarService } from '../services/car.service';
import { CommonAllert } from '../shared/common-alert';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  titlePage: string = "Add New Car"


  car = new Car()

  constructor(private carService: CarService, private router: Router, private commonAlert: CommonAllert) { }

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
      this.commonAlert.showWarningAlert("Car Name wajib diisi")
    } else if (this.car.number == undefined) {
      this.commonAlert.showWarningAlert("Number wajib diisi")
    } else if (this.car.color == undefined) {
      this.commonAlert.showWarningAlert("Color wajib diisi")
    } else if (this.car.type == undefined) {
      this.commonAlert.showWarningAlert("Type wajib diisi")
    } else {
      this.carService.addNewCar(this.car).subscribe(
        data => {
          this.commonAlert.showSuccessAlert(this.titlePage, "car-list")
        }, error => {
          this.commonAlert.showErrorAlert(error.message)
        }
      )

    }

  }

  goBack() {
    this.router.navigate(['car-list'])
  }

}
