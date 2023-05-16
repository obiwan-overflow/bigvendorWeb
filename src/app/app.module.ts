import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxWebstorageModule } from 'ngx-webstorage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './inc/header/header.component';
import { FooterComponent } from './inc/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { IndexComponent } from './index/index.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { FormRegisterStep2Component } from './form-register-step2/form-register-step2.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { FormRegisterSuccessComponent } from './form-register-success/form-register-success.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    IndexComponent,
    FormRegisterComponent,
    FormRegisterStep2Component,
    SignInComponent,
    NewsDetailComponent,
    FormRegisterSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
