import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../app/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    
      private baseURL = "http://localhost:8085/api/v1/employees";
    
  constructor(private httpClient: HttpClient) {  }

  getEmployeeList() : Observable<Employee[]> {

    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }
  
  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`,employee);
  }

  getEmloyeeById(id: number): Observable<Employee>  {
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`)
  }

  updateEmployee(id:number, employee: Employee): Observable<Object> {
    return this.httpClient.put<Employee>(`${this.baseURL}/${id}` , employee);
  }

  deleteEmployee(id:number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
