import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { EmployeeService } from '../resources/employee.service';
import { Employee } from '../resources/employee.model';
import { MatDialog } from '@angular/material/dialog';
import { EmployeemodalComponent } from '../employeemodal/employeemodal.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  displayedColums: string[] = ['id', 'active', 'area', 'surname', 'options'];
  dataSource: MatTableDataSource<Employee>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private employeeService: EmployeeService, private dialog:MatDialog) {

  }

  ngOnInit(): void {
    this.synch();
  }

  synch() {
    this.employeeService.readAll().subscribe(
      data => {
        this.dataSource = new MatTableDataSource<Employee>(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      }
    )
  }

  create(){
    const dialogRef=this.dialog.open(EmployeemodalComponent);
    dialogRef.componentInstance.edit=false;
    dialogRef.afterClosed().subscribe(
      result=>this.synch()
    )
  }
  edit(employee:Employee){
    const dialogRef=this.dialog.open(EmployeemodalComponent);
    dialogRef.componentInstance.edit=true;
    dialogRef.componentInstance.employee=employee;
    dialogRef.afterClosed().subscribe(
      result=>this.synch()
    )
  }

}
