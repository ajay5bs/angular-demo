import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the list of employees', () => {
    expect(service.getemployees().length).toBeGreaterThan(9);
  });

  it('should register an employee', () => {
    const employee = {firstName: 'Test', lastName: 'Name', gender: 'Male', dob: '2001-11-12', department: 'Human Resource'};
    const previousValue = service.getemployees().length;
    service.registerNewEmployee(employee);
    expect(service.getemployees().length).toBe(previousValue+1);
  });

});
