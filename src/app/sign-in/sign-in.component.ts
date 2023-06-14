import { Component } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { RestApiService } from '../rest-api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  signIn:FormGroup;
  constructor(private sessionStorageService: SessionStorageService,public router:Router,private api:RestApiService,private authService: AuthService){
    this.signIn = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    });
  }
  async onSubmit(){
    this.authService.login(this.signIn.value.username,this.signIn.value.password);
  }
}
