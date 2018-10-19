import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material.module';
import { routing } from './app.routing';
import { LoginModule } from '../app/login/login.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { projectApi } from './service/project-api.service';
import { HttpModule } from '@angular/http';
import { notificationService } from './service/notification.service';
import { NotifierModule } from 'angular-notifier';
import { customNotifierOptions } from './notificationConfig';
// import { HttpClient } from './service/custom-http-client.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    RouterModule,
    routing, LoginModule,

    NotifierModule.withConfig(customNotifierOptions)
  ],
  providers: [projectApi, notificationService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class AppModule { }
