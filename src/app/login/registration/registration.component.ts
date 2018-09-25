import { Component } from '@angular/core';
import { RegistrationC } from './registration';
import { LoginService } from '../login.service';
import { REGISTRATION } from './mock-registration';

@Component({
    selector: 'app-registration',
    templateUrl: 'registration.component.html',
    styleUrls: ['registration.component.scss']
})
export class RegistrationComponent {

  public registration: RegistrationC = REGISTRATION;

  constructor(private loginService: LoginService) {

  }

  createUser() {
    console.log(this.registration);
    this.loginService.RegistrationFormService(this.registration).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }





}
