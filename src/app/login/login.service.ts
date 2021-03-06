import { Injectable } from '@angular/core';
// import { HttpClient } from '../service/custom-http-client.service';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { projectApi } from '../service/project-api.service';
import 'rxjs/Rx';
import { HttpHeaders } from '@angular/common/http';
// import { catchError } from 'rxjs/operators';
// import { throwError } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { CookiesService } from '../service/cookies.service';

@Injectable ({
  providedIn: 'root',
})


export class LoginService {

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': this.cookiesService.cookies_token,
    })
  };

    constructor(private http: Http, private projectApi: projectApi, private httpC: HttpClient,
      private cookiesService: CookiesService
    ) {
    }

    LoginFormService(dto_data) {
        return this.http.post(this.projectApi.login, dto_data).map(res => res.json());
    }

    RegistrationFormService(dto_data) {
        return this.http.post(this.projectApi.createUser, dto_data).map(res => res.json());
    }

    varification_Form_Service_On_token_base(dto_data) {
        return this.http.post(this.projectApi.retrive_user_varification_token_bases, dto_data).map(res => res.json());
    }

    active_user (dto_data) {
        return this.http.post(this.projectApi.active_user, dto_data).map(res => res.json());
    }

    login_user (dto_data) {
      return this.http.post(this.projectApi.login, dto_data).map(res => res.json());
    }


    me () {
      return this.httpC.get(this.projectApi.me, this.httpOptions);
    }
}
