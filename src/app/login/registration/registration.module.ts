// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { RegistrationComponent } from './registration.component';
import { RegistrationRouting } from './registration.routing';
import { DemoMaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
      CommonModule,
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
