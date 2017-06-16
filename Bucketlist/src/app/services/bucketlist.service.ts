import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { AppConfig } from '../app.config';
import { Bucketlist } from '../models/bucketlist.model';

@Injectable()
export class BucketlistService{
    constructor(private http: Http, private config: AppConfig){}

    private _url: string = this.config.ApiUrl

    private header() {
        // create authorization header with token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers();
            headers.append('Authorization', 'Token ' + currentUser.token);
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Content-Type', 'application/json');
            return new RequestOptions({ headers: headers });
        }
    }
    GetAll(url: string){
            let option = this.header();
            return this.http.get(this._url, option)
            .map((response: Response) => <Bucketlist[]>response.json())
            .catch(this.handleError);
    }

    GetSingle(id: number){
        let option = this.header();
        return this.http.get(this._url + id, option)
            .map((response: Response) => <Bucketlist>response.json())
            .catch(this.handleError);
    }

    Add(title: string){
        let option = this.header();
        let toAdd = JSON.stringify({ title: title });

        return this.http.post(this._url, toAdd, option)
            .map((response: Response) => <Bucketlist>response.json())
            .catch(this.handleError);
    }

    Update(id: number, titleToUpdate: string){
        let option = this.header();
        let toPut = JSON.stringify({titleToUpdate: titleToUpdate})
        return this.http.put(this._url + id, toPut ,option)
            .map((response: Response) => <Bucketlist>response.json())
            .catch(this.handleError);
    }

    Delete(id: number){
        let option = this.header();
        return this.http.delete(this._url + id)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
    
