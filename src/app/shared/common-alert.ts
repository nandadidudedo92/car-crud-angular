import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";



@Injectable({
    providedIn: 'root'
})
export class CommonAllert {

    constructor(private router: Router) { }

    showWarningAlert(message: string) {
        Swal.fire(
            'Warning',
            message,
            'warning'
        )
    }

    showErrorAlert(message: string) {
        Swal.fire(
            'Error!',
            message,
            'error'
        )
    }


    showSuccessAlert(message: string, route: string) {
        Swal.fire({
            title: 'Success',
            text: message,
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            // cancelButtonColor: '#d33',
            // confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.router.navigate([route])
            }
        })
    }


    async showConfirmDelete(): Promise<boolean> {
        let con = false;
        await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                con = true
            }
        })

        return con
    }

}