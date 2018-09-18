// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { LoginComponent } from './login.component';
import { LoginRouting } from './login.routing';

@NgModule({
    imports: [
      LoginRouting
    ],
    declarations: [
        LoginComponent,
    ],
    exports: [
        LoginComponent,
    ]
})
export class LoginModule {

}
