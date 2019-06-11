import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Employee } from 'src/app/model/employee';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  baseUrl:string = 'http://localhost:59866/api/employee';

  /* Get All Employees */
  getEmployee() {
   debugger; 
   let emp = this.http.get<Employee[]> (this.baseUrl);
    return emp;
  }

  /* Delete */
  deleteEmployee(id: number) {
    return this.http.delete<Employee[]> (this.baseUrl);
  }

  /* Add */
  addEmployee(employe: Employee) {
    return this.http.post(this.baseUrl, employe);
  }

  /* Update */
  updateEmployee(employe: Employee) {
    return this.http.put(this.baseUrl + '/' + employe.EmployeeId, employe);
  }
}
