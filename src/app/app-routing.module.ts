import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import {EmployeemodalComponent} from './employeemodal/employeemodal.component';
const routes: Routes = [
  {path:'',component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static COMPONET_FACTORY=[
    EmployeemodalComponent
  ];
 }
