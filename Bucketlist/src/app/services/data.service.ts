import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../app.config';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class dataService {
    constructor(private http: Http, private config: AppConfig) { }
    

    private _url=this.config.ApiUrl

    private header() {
        // create authorization header with Authorization
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log('this is ', currentUser)
        if (currentUser && currentUser.Authorization) {
            let headers = new Headers();
            headers.append('Authorization', 'Token ' + currentUser.Authorization);
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Content-Type', 'application/json');
            return new RequestOptions({ headers: headers });
        }
    }

    get(url:string){
        let option = this.header();
        console.log(option)
        console.log(this._url)
        return this.http.get(this._url + url, option)
            .map(this.retrieveData);
    }

    post(url:string, body:any){
        console.log(this._url)
        let option = this.header();
        console.log(option)
        return this.http.post(this._url + url ,body, option)
            .map(this.retrieveData);
    }

    put(url:string, body:any){
        let option = this.header();
        return this.http.put(this._url + url ,body, option)
            .map(this.retrieveData);
    }

    delete(url:string, id:number ){
        let option = this.header();
        return this.http.delete(this._url + url + id.toString(), option)
            .map(this.retrieveData);
    }

    private retrieveData(response: Response) {
    let body = response.json();
    return body || {};
  }

}