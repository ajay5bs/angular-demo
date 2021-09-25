import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have title as 'Angular Features Demo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angular Features Demo');
  });

  it(`should have navigation link 'Reactive Forms'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const anchor = fixture.nativeElement.querySelector('.reactiveforms');
    expect(anchor.textContent).toContain(app.reactiveforms);
  });

  it(`should have navigation link 'Life Cycle Events'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const anchor = fixture.nativeElement.querySelector('.lifecycle');
    expect(anchor.textContent).toContain(app.lifecycle);
  });

  it(`should have navigation link 'NG Zone Demo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const anchor = fixture.nativeElement.querySelector('.ngZone');
    expect(anchor.textContent).toContain(app.ngZone);
  });

});
