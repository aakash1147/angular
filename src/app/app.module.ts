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
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,   HttpClientModule,
    DemoMaterialModule,
    RouterModule,
    routing, LoginModule,

    NotifierModule.withConfig(customNotifierOptions)
  ],
  providers: [projectApi, notificationService, CookieService
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class AppModule { }
