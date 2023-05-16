import { Component } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  signIn:boolean;
  constructor(private sessionStorageService: SessionStorageService){
    this.signIn = false;
  }
  ngOnInit(){
    let status = this.sessionStorageService.retrieve('signIn');
    if(status){
      this.signIn = true;
    }
    console.log(this.signIn);
  }
  async signOut(){
    await this.sessionStorageService.clear('signIn');
    await location.reload();
  }
}
