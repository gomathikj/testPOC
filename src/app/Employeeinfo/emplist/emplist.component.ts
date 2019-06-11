import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/service/employee.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
  Employees: Employee[];
  baseUrl:string = 'http://localhost:59866/api/employee';
  constructor(private empService:EmployeeService, private router: Router, private http: HttpClient) { }

  ngOnInit() {

  this.empService.getEmployee()
  .subscribe((data: Employee[])=>{
    this.Employees=data;
  });
}

  deleteEmp(employee: Employee) {
    this.empService.deleteEmployee(employee.EmployeeId)
      .subscribe(data => {
        this.Employees = this.Employees.filter(u => u !== employee);
      })

 }

//  editEmp(employee:Employee){
//    this.empService.updateEmployee(employee.EmployeeId)
//    .subscribe(data => {
//      this.Employees=this.Employees.filter(u=>)
//    })
//  }

}
