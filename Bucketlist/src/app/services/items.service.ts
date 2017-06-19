import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { AppConfig } from '../app.config';
import { Item } from '../models/items.model';

@Injectable()
export class ItemsService{
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

    Add(b_id: number, title: string):Observable<Item[]>{
        let option = this.header();
        let toAdd = JSON.stringify({ title: title });

        return this.http.post(`${this._url}/bucketlist/${b_id}/items`, toAdd, option)
            .map((response: Response) => <Item>response.json())
            .catch(this.handleError);
    }

    Update(b_id: number, id: number, titleToUpdate: string):Observable<Item[]>{
        let option = this.header();
        let toPut = JSON.stringify({titleToUpdate: titleToUpdate})
        return this.http.put(`${this._url}/bucketlist/${b_id}/items/${id}`, toPut ,option)
            .map((response: Response) => <Item>response.json())
            .catch(this.handleError);
    }

    Delete(b_id: number, id: number):Observable<Item[]>{
        let option = this.header();
        return this.http.delete(`${this._url}/bucketlist/${b_id}/items/${id}` ,option)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
    
