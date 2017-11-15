import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import 'rxjs/add/operator/map'
 
@Injectable()
export class CardService {
    constructor(
        private http: Http) {}
 
    getCards(token: String, group: Number) {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'JWT ' + token });
        let options = new RequestOptions({ headers: headers });
        // get users from api
        return this.http.get(environment.serverUrl + 'exchange/cards?group=1', options)
            .map((response: Response) => {
                return response.json()
            }).catch((error) => {
                return Observable.throw(error);
            });
    }
}