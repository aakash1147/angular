import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { userVarificationC } from './userVarification';
import { USERVERIFICATION } from './userVarification-mock';

@Component({
    selector: 'app-uservarification',
    templateUrl: 'uservarification.component.html',
    styleUrls: ['uservarification.component.scss']
})
export class UservarificationComponent {
  public hide = true;
  public varifyToken = {
    'token': null,
  };

  public userVerifiction_dto: userVarificationC = USERVERIFICATION;

  constructor(private loginService: LoginService,  private activateRoute: ActivatedRoute, private router: Router) {
    console.log(this.router);
    console.log(this.activateRoute.snapshot.params['id']);

    this.varifyToken.token = this.activateRoute.snapshot.params['id'];
    this.get_user_data_on_token(this.varifyToken);
  }

  get_user_data_on_token(token) {
      this.loginService.varification_Form_Service_On_token_base(this.varifyToken).subscribe(
        data => {
          console.log(data);
          this.userVerifiction_dto.token = this.varifyToken.token;
          this.userVerifiction_dto.email = data.email;
        }, error => {
          console.log(error);
        });
  }

  varify_user() {
    console.log(this.userVerifiction_dto);
    this.loginService.active_user(this.userVerifiction_dto).subscribe(
      data => {
          console.log(data);
      }, error => {
          console.log(error);
      });
  }

}
