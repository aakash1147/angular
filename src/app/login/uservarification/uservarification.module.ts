// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { UservarificationComponent } from './uservarification.component';
import { DemoMaterialModule } from '../../material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserVarificationRouting } from './uservarification.routing';

@NgModule({
    imports: [
      CommonModule,
      FormsModule, ReactiveFormsModule,
      DemoMaterialModule, UserVarificationRouting
    ],
    declarations: [
        UservarificationComponent,
    ],
    exports: [
        UservarificationComponent,
    ]
})
export class UservarificationModule {

}
