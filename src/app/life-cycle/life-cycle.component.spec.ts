import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Employee, EmployeeService } from '../employee.service';
import { LifeCycleComponent } from './life-cycle.component';

describe('LifeCycleComponent', () => {
  let component: LifeCycleComponent;
  let fixture: ComponentFixture<LifeCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCycleComponent ],
      providers: [EmployeeService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the table with header dark theme', () => {
    fixture.detectChanges();
    const table = fixture.nativeElement.querySelector('.thead-dark');
    expect(table).toBeTruthy();
  });

  it(`should fetch values from service to display the employee details`, () => {
    fixture.detectChanges();
    expect(component.employees.length).toBeGreaterThan(9);
  });

});
