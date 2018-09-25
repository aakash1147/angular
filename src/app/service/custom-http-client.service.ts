import { OnInit, Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import { CookieService } from 'ngx-cookie';

@Injectable()

export class HttpClient implements OnInit {
    private authToken;

    constructor(private http: Http) {
        // this.authToken = this.cookiesService.get('Token');
    }

    // createAuthorizationHeader(headers: Headers) {
    //       headers.append('Content-Type', 'application/json');
    //       headers.append('Access-Control-Allow-Origin', '*');
    //       // headers.delete('Content-Type');
    //       headers.append('Accept', 'application/json');
    //       // headers.append('Authorization', 'Token ' + this.authToken);
    // }


    ngOnInit() {
    }

    // get(url) {
    //   // this.authToken =  this.cookiesService.get('Token');
    //   const headers = new Headers();
    //   this.createAuthorizationHeader(headers);
    //   return this.http.get(url, {
    //     headers: headers,
    //   });
    // }

    // post(url, data) {
    //   // this.authToken =  this.cookiesService.get('Token');
    //   const headers = new Headers();
    //   this.createAuthorizationHeader(headers);
    //   return this.http.post(url, data, {
    //     headers: headers,
    //   });
    // }
    // put(url, data) {
    // // this.authToken =  this.cookiesService.get('Token');
    //   const headers = new Headers();
    //   this.createAuthorizationHeader(headers);
    //   return this.http.put(url, data, {
    //     headers: headers,
    //   });
    // }

    // delete(url) {
    //   // this.authToken =  this.cookiesService.get('Token');
    //   const headers = new Headers();
    //   this.createAuthorizationHeader(headers);
    //   return this.http.delete(url, {
    //     headers: headers,
    //   });
    // }



}
