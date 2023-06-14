import { Component } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isSignIn:boolean = false;
  isLoggedIn: boolean = false;
  username:any;
  constructor(private sessionStorageService: SessionStorageService,private authService: AuthService,public router:Router){
    if(this.isLoggedIn){
      let data = this.sessionStorageService.retrieve('userdetail');
      this.username = data.username;
    }
    // if(username){
    //   this.isSignIn = true;
    // }
    // this.isLoggedIn = this.authService.isLoggedIn();
    // console.log(this.isLoggedIn);
  }
  ngOnInit(){
    // this.isLoggedIn = this.authService.isLoggedIn();
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }
  async signOut(){
    this.sessionStorageService.clear('permission');
    this.sessionStorageService.clear('userdetail');
    this.authService.logout();
    this.router.navigateByUrl('sign-in');
  }
}
