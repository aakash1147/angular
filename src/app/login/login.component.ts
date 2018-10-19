import { Component } from '@angular/core';
import { loginC } from './login';
import { LOGIN } from './login-mock';
import { LoginService } from './login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { notificationService } from '../service/notification.service';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent {
  public hide = true;

  public login_dto: loginC = LOGIN;

  constructor(private loginService: LoginService,  private activateRoute: ActivatedRoute,
    private router: Router, private NotificationService: notificationService) {
  }

  get_user_login_token () {
    console.log(this.login_dto);
    this.loginService.login_user(this.login_dto).subscribe(
      data => {
        console.log(data);
        this.NotificationService.get_Notification('success', 'Login Successfuffy');
      }, error => {
        this.NotificationService.get_Notification('error', 'Unable to login');
        console.log(error);
      }
    )
  }


}
