import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { IndexComponent } from './index/index.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormRegisterStep2Component } from './form-register-step2/form-register-step2.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { FormRegisterSuccessComponent } from './form-register-success/form-register-success.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'index', component: IndexComponent },
      { path: 'form-register', component: FormRegisterComponent },
      { path: 'form-register-step2', component: FormRegisterStep2Component },
      { path: 'sign-in', component: SignInComponent },
      { path: 'news/detail', component: NewsDetailComponent },
      { path: 'form-register-success', component: FormRegisterSuccessComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
