// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { ForgotPosswordComponent } from './forgot-possword.component';
import { ForgotPasswordRouting } from './forgot-password.routing';
import { DemoMaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
      CommonModule,
      ForgotPasswordRouting,
      DemoMaterialModule
    ],
    declarations: [
        ForgotPosswordComponent,
    ],
    exports: [
        ForgotPosswordComponent,
    ]
})
export class ForgotPosswordModule {

}
