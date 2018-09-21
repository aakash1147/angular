import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';
import { ForgotPosswordComponent } from "./forgot-possword.component";

export const routes: Routes = [
    { path: '', component: ForgotPosswordComponent }
];

export const ForgotPasswordRouting: ModuleWithProviders = RouterModule.forChild(routes);
