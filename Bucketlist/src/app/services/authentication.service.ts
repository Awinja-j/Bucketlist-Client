import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { AppConfig } from '../app.config';

@Injectable()
export class AuthenticationService{
    constructor(private http: Http, private config: AppConfig){}
    private _url: string = this.config.ApiUrl
    createHeader(): Headers{
       let headers = new Headers();
       headers.append('Access-Control-Allow-Origin', '*');
       headers.append('Content-Type', 'application/json');
       return headers;
    }

    login(email: string, password: string){
        this._url = `${this._url}`
        let header = this.createHeader();
        let option = new RequestOptions(header);
        console.log(option)
        return this.http.post(this._url + '/auth/login', {email: email, password: password}, option)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                console.log(user.Authorization)
                if (user && user.Authorization) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }
    logout(){
        localStorage.removeItem('currentUser');
    }
    
}