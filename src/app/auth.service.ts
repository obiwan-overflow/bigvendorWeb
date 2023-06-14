import { Injectable } from '@angular/core';
import { RestApiService } from './rest-api.service';
import { SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private api:RestApiService,private sessionStorageService:SessionStorageService,public router: Router) {
    let check = this.sessionStorageService.retrieve('userDetail');
    if(check){
      this.isAuthenticated = true;
      this.isLoggedInSubject.next(true);
    }
  }
  login(email:any,password:any) {
    let body = new URLSearchParams();
    body.set('username',email);
    body.set('password',password);
    this.api.postdata('vendorSignin',body).subscribe((res)=>{
      if(res.success){
        this.isAuthenticated = true;
        this.isLoggedInSubject.next(true);
        this.sessionStorageService.store('userDetail',res.data);
        this.router.navigateByUrl('index');
      }
    },err=>{
      console.log(err);
    });
  }
  logout() {
    // ล็อกเอาท์ของผู้ใช้
    this.isAuthenticated = false;
    this.isLoggedInSubject.next(false);
  }

  isLoggedIn() {
    // ตรวจสอบสถานะล็อกอินของผู้ใช้
    return this.isAuthenticated;
  }
}
