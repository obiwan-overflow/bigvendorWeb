import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-register-step2',
  templateUrl: './form-register-step2.component.html',
  styleUrls: ['./form-register-step2.component.scss']
})
export class FormRegisterStep2Component {
  vendorRegister:FormGroup;
  constructor(){
    this.vendorRegister = new FormGroup({
      file1: new FormControl(''),
      file2: new FormControl(''),
      file3: new FormControl(''),
      file4: new FormControl(''),
    });
  }
  async onSubmit(){
    
  }
}
