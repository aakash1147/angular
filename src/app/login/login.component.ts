import { Component } from '@angular/core';
import { loginC } from './login';
import { LOGIN } from './login-mock';
import { LoginService } from './login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { notificationService } from '../service/notification.service';
import { CookiesService } from '../service/cookies.service';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent {
  public hide = true;

  public login_dto: loginC = LOGIN;

  constructor(private loginService: LoginService,  private activateRoute: ActivatedRoute,
    private router: Router, private NotificationService: notificationService,
    private cookiesService: CookiesService) {
  }

  get_user_login_token () {
    console.log(this.login_dto);
    this.loginService.login_user(this.login_dto).subscribe(
      data => {
        console.log(data);
        this.cookiesService.set_token(data.token);
        this.get_user_data_me ();
        // this.NotificationService.get_Notification('success', 'Login Successfuffy');
      }, error => {
        this.NotificationService.get_Notification('error', 'Unable to login');
        console.log(error);
      }
    )
  }

  get_user_data_me () {
      this.loginService.me().subscribe(
        data => {
          console.log(data);
        }, error => {
          console.log(error);
        })
  }

}
