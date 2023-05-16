import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterSuccessComponent } from './form-register-success.component';

describe('FormRegisterSuccessComponent', () => {
  let component: FormRegisterSuccessComponent;
  let fixture: ComponentFixture<FormRegisterSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegisterSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRegisterSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
