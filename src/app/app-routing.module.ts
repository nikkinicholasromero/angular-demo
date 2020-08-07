import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
},{
  path: 'login', 
  loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
},{
  path: 'registration', 
  loadChildren: () => import('./components/registration/registration.module').then(m => m.RegistrationModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
