// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { RegistrationComponent } from './registration.component';
import { RegistrationRouting } from './registration.routing';
import { DemoMaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { HttpClient } from '../../service/custom-http-client.service';

@NgModule({
    imports: [
      CommonModule,
      FormsModule, ReactiveFormsModule,
      RegistrationRouting,
      DemoMaterialModule
    ],
    declarations: [
        RegistrationComponent,
    ],
    exports: [
        RegistrationComponent,
    ]
})
export class RegistrationModule {

}
