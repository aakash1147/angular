import { Injectable } from '@angular/core';

@Injectable()

export class projectApi {
    public baseUrl = 'http://localhost:5000/';

    login = this.baseUrl + 'login';
    me = this.baseUrl + 'me';
    createUser = this.baseUrl + 'user';
    retrive_user_varification_token_bases = this.baseUrl + 'user/verifyuser';
    active_user = this.baseUrl + 'user/activeuser';
}
