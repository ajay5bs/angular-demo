import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  employeeForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private fb: FormBuilder,
    private employeeService:EmployeeService
    ) { 
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      department: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  // convenience getter for easy access to form fields
  get f() { return this.employeeForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.employeeForm.invalid) {
      return;
    }
    // TODO: Use EventEmitter with form value
    console.log(this.employeeForm.value);
    this.employeeService.registerNewEmployee(this.employeeForm.value);
    this.success = true;
    this.submitted = false;
    this.employeeForm.reset();
  }

}
