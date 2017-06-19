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
    GetAll():Observable<Bucketlist[]>{
            let option = this.header();
            return this.http.get(`${this._url}/bucketlist/`, option)
            .map((response: Response) => <Bucketlist[]>response.json())
            .catch(this.handleError);
    }

    GetSingle(id: number):Observable<Bucketlist[]>{
        let option = this.header();
        return this.http.get(`${this._url}/bucketlist/${id}`, option)
            .map((response: Response) => <Bucketlist>response.json())
            .catch(this.handleError);
    }

    Add(title: string):Observable<Bucketlist[]>{
        let option = this.header();
        let toAdd = JSON.stringify({ title: title });

        return this.http.post(`${this._url}/bucketlist/`, toAdd, option)
            .map((response: Response) => <Bucketlist>response.json())
            .catch(this.handleError);
    }

    Update(id: number, titleToUpdate: string):Observable<Bucketlist[]>{
        let option = this.header();
        let toPut = JSON.stringify({titleToUpdate: titleToUpdate})
        return this.http.put(`${this._url}/bucketlist/${id}`, toPut ,option)
            .map((response: Response) => <Bucketlist>response.json())
            .catch(this.handleError);
    }

    Delete(id: number):Observable<Bucketlist[]>{
        let option = this.header();
        return this.http.delete(`${this._url}/bucketlist/${id}`)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
    
