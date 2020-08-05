import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Employee } from '../resources/employee.model';
import { EmployeeService } from '../resources/employee.service'


@Component({
  selector: 'app-employeemodal',
  templateUrl: './employeemodal.component.html',
  styleUrls: ['./employeemodal.component.css']
})
export class EmployeemodalComponent implements OnInit {
  edit: boolean;
  employee: Employee;

  constructor(public dialogRef: MatDialogRef<EmployeemodalComponent>, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    if (!this.employee) {
      this.employee = { id: undefined, active: true, area: '', surname: '' }
    }
  }

  create(): void {
    this.employeeService.create(this.employee).subscribe(
      data => this.dialogRef.close(),
      erro => this.dialogRef.close()
    )
  }
  save():void{
    this.employeeService.edit(this.employee.id,this.employee).subscribe(
      data => this.dialogRef.close(),
      erro => this.dialogRef.close()
    )
  }

}
