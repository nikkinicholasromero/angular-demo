import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },{
    path: 'login', 
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  },{
    path: 'registration', 
    loadChildren: () => import('./components/registration/registration.module').then(m => m.RegistrationModule)
  }])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
