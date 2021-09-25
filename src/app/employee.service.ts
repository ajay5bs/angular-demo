import { Injectable } from '@angular/core';

export interface Employee{
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  department: string;
}

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  employeeList: Array<Employee> = [{firstName: 'Sandesh', lastName: 'Pandey', gender: 'Male', dob: '2000-12-12', department: 'Accounts'},
  {firstName: 'Ramesh', lastName: 'Rao', gender: 'Male', dob: '1999-01-10', department: 'Sales'},
  {firstName: 'Suresh', lastName: 'Patil', gender: 'Male', dob: '1998-02-20', department: 'Human Resource'},
  {firstName: 'Sujay', lastName: 'Patel', gender: 'Male', dob: '1992-03-30', department: 'Accounts'},
  {firstName: 'Aarav', lastName: 'Murthy', gender: 'Male', dob: '1985-04-08', department: 'Sales'},
  {firstName: 'Bhadri', lastName: 'Suresh', gender: 'Male', dob: '1974-04-07', department: 'Accounts'},
  {firstName: 'Deepak', lastName: 'Jadeja', gender: 'Male', dob: '1994-08-05', department: 'Accounts'},
  {firstName: 'Pankaj', lastName: 'Gandhi', gender: 'Male', dob: '1989-09-04', department: 'Human Resource'},
  {firstName: 'Zeeshan', lastName: 'Ahamed', gender: 'Male', dob: '1999-10-01', department: 'Sales'},
  {firstName: 'Joseph', lastName: 'Thomas', gender: 'Male', dob: '2001-11-12', department: 'Human Resource'}
  ];
  constructor() { 
    if(localStorage.getItem('EmployeeList') == null){
      localStorage.setItem('EmployeeList', JSON.stringify(this.employeeList));
    } else {
      let list = localStorage.getItem('EmployeeList');
      this.employeeList = list && JSON.parse(list);
    }
  }

  getemployees(): Array<Employee> {
    return this.employeeList;
  }

  registerNewEmployee(employee: Employee) {
    this.employeeList.push(employee);
    localStorage.setItem('EmployeeList', JSON.stringify(this.employeeList));
  }

}
