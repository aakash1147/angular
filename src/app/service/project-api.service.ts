import { Injectable } from '@angular/core';

@Injectable()

export class projectApi {
    public baseUrl = 'http://localhost:5000/';

    login = this.baseUrl + 'login';
    createUser = this.baseUrl + 'user';
    retrive_user_varification_token_bases = this.baseUrl + 'user/verifyuser';
}
