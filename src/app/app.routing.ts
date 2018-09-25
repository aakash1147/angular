import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';



export const routes: Routes = [
  { path: '', loadChildren: '../app/login/login.module#LoginModule' }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
