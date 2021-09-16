import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './add-car/add-car.component';
import { CarListComponent } from './add-car/car-list/car-list.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [

  { path: '', component: HomepageComponent },
  { path: 'add-car', component: AddCarComponent },
  { path: 'car-list', component: CarListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
