import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from '../login/login.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login',  pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', loadChildren: './forgot-possword/forgot-possword.module#ForgotPosswordModule' },
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationModule' },
  { path: 'userverifivation/:id', loadChildren: './uservarification/uservarification.module#UservarificationModule'},
];


export const LoginRouting: ModuleWithProviders = RouterModule.forChild(routes);
