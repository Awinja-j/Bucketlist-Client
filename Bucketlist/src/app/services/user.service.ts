import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../app.config';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
    constructor(private http: Http, private config: AppConfig) { }
	
	private _url=this.config.ApiUrl
    
    create(user: any) {
        return this.http.post(this._url + '/auth/register', user, this.header());
    }
	
	  private header() {
        // create authorization header with token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.Authorization) {
            let headers = new Headers();
            headers.append('Authorization', 'Token' + currentUser.Authorization);
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Content-Type', 'application/json');
            return new RequestOptions({ headers: headers });
        }
    }
}