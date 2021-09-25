import { Component, OnInit, SimpleChange } from '@angular/core';
import { Employee, EmployeeService } from '../employee.service';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit {

  employees: Array<Employee> = [];
  count: number = 0;
  interval:any;
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    console.log('EmployeeDetailsComponent ngOnInit');
    this.employees = this.employeeService.getemployees();
    this.employees = this.employees.sort(this.compare);
    //this.interval = setInterval(()=>{this.count++;},1000);
  }

  changeSortOrder(){
    this.employees = this.employees.reverse();
  }

  ngOnChanges(changes: SimpleChange): void {
    console.log('EmployeeDetailsComponent ngOnChanges');
  }

  ngDoCheck(): void {
    console.log('EmployeeDetailsComponent ngDoCheck');
  }

  ngAfterViewInit(): void {
    console.log('EmployeeDetailsComponent ngAfterViewInit');
  }

  ngAfterContentInit(): void {
    console.log('EmployeeDetailsComponent ngAfterContentInit');
  }

  ngAfterViewChecked(): void {
    console.log('EmployeeDetailsComponent ngAfterViewChecked');
  }

  ngAfterContentChecked(): void {
    console.log('EmployeeDetailsComponent ngAfterContentChecked');
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
   }
    console.log('EmployeeDetailsComponent ngOnDestroy');
  }

  compare(a:Employee,b:Employee) {
    if ( a.firstName.toLowerCase() < b.firstName.toLowerCase() ){
      return -1;
    }
    if ( a.firstName.toLowerCase() > b.firstName.toLowerCase() ){
      return 1;
    }
    return 0;
  }

}
