import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { UservarificationComponent } from './uservarification.component';


export const routes: Routes = [
    { path: '', component: UservarificationComponent }
];

export const UserVarificationRouting: ModuleWithProviders = RouterModule.forChild(routes);
