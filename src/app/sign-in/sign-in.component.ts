import { Component } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { FormBuilder, FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  signIn:FormGroup;
  constructor(private sessionStorageService: SessionStorageService,public router:Router,private api:RestApiService){
    this.signIn = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }
  async onSubmit(){
    let body = new URLSearchParams();
    body.set('username',this.signIn.value.username);
    body.set('password',this.signIn.value.password);
    this.api.postdata('vendorSignin',body).subscribe((res)=>{
      console.log(res);
    },err=>{
      console.log(err);
    });
    // let data = 'signIn';
    // await this.sessionStorageService.store('signIn',data);
    // await this.router.navigateByUrl('index');
  }
}
