import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { CommonAllert } from 'src/app/shared/common-alert';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  carList: Car[] = []

  constructor(private router: Router, private carService: CarService, private commonAlert: CommonAllert) { }

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
        this.commonAlert.showErrorAlert(error.message)
      }
    )
  }

  edit(car: Car) {
    console.log(car)
    this.router.navigate(['add-car'], { state: { data: car } })
  }

  async delete(car: Car) {

    let confirmDelete = await this.commonAlert.showConfirmDelete()

    if (confirmDelete) {
      this.carService.deleteCar(car.id!).subscribe(
        data => {

          if (data.status == 200) {

            this.getAllCar()
          } else {
            this.commonAlert.showErrorAlert(data.message)
          }

        }, error => {
          this.commonAlert.showErrorAlert(error.message)
        }
      )

    }




  }
}
