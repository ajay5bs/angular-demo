import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeService } from '../employee.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms.component';

describe('EmployeeRegistrationComponent', () => {
  let component: ReactiveFormsComponent;
  let fixture: ComponentFixture<ReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ ReactiveFormsComponent ],
      providers: [EmployeeService, FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have header 'Employee Registration'`, () => {
    const header = fixture.nativeElement.querySelector('.header');
    expect(header.textContent).toContain('Employee Registration');
  });

  it('should have 5 form elements', () => {
    const formControls = fixture.nativeElement.querySelectorAll('.form-control');
    expect(formControls.length).toBe(5);
  });

  it('should have `Register` button', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button.textContent).toContain('Register');
  });

  it('should show error message on `Register` button click without values', () => {
    component.onSubmit();
    fixture.detectChanges();
    const error = fixture.nativeElement.querySelector('.invalid-feedback');
    expect(error.textContent).toContain('First Name is required');
  });

  it('should register an employee and show success message', () => {
    const employee = {firstName: 'Test', lastName: 'Name', gender: 'Male', dob: '2001-11-12', department: 'Human Resource'};
    component.employeeForm.patchValue(employee);
    component.onSubmit();
    fixture.detectChanges();
    const success = fixture.nativeElement.querySelector('.success');
    expect(success.textContent).toContain('*New Employee is Registered');
  });

});
