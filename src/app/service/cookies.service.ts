import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Injectable ({
  providedIn: 'root',
})

export class CookiesService {

  public cookies_token = null;

  constructor( private cookieService: CookieService) {

  }

  set_token (token) {
    this.cookieService.set('Token', token);
  }

  get_cookies_token () {
    this.cookies_token = this.cookieService.get('Token');
    return this.cookies_token;

  }


}
