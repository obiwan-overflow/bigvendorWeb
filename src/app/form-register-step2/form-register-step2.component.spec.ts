import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterStep2Component } from './form-register-step2.component';

describe('FormRegisterStep2Component', () => {
  let component: FormRegisterStep2Component;
  let fixture: ComponentFixture<FormRegisterStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRegisterStep2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRegisterStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
