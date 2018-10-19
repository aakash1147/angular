// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { LoginComponent } from './login.component';
import { LoginRouting } from './login.routing';
import { DemoMaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { LoginService } from './login.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [
      CommonModule,
      FormsModule, ReactiveFormsModule,
      DemoMaterialModule,
      LoginRouting
    ],
    declarations: [
        LoginComponent,
    ],
    exports: [
        LoginComponent,
    ],
    providers: [LoginService]
})
export class LoginModule {

}
