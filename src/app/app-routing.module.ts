import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { NewempComponent } from './newemp/newemp.component';
import { UpempComponent } from './upemp/upemp.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'newemp',component:NewempComponent},
  {path:'upemp/:id',component:UpempComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
