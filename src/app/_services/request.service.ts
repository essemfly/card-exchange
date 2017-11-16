import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import 'rxjs/add/operator/map'

@Injectable()
export class RequestService {
    constructor(
        private http: Http
    ) {}

    getRequest(token, id) {
        let headers = new Headers({ 'Authorization': 'JWT ' + token });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(environment.serverUrl + 'exchange/requests/' + id, options)
            .map((response: Response) => {
                return response.json()
            }).catch((error) => {
                return Observable.throw(error);
            });
    }

    getRequests(token) {
        let headers = new Headers({ 'Authorization': 'JWT ' + token });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(environment.serverUrl + 'exchange/requests/', options)
            .map((response: Response) => {
                return response.json()
            }).catch((error) => {
                return Observable.throw(error);
            });
    }

    postRequest(token, haveCard, wantCard) {
        let headers = new Headers({ 'Authorization': 'JWT ' + token });
        let options = new RequestOptions({ headers: headers });
        let postData = {
            "have_card_id" : haveCard,
            "want_card_id" : wantCard
        };
        return this.http.post(environment.serverUrl + 'exchange/requests/', postData, options)
            .map((response: Response) => {
                return response.json()
            }).catch((error) => {
                return Observable.throw(error);
            });
    }

    editRequest(token, requestId, haveCard, wantCard) {
        let headers = new Headers({ 'Authorization': 'JWT ' + token });
        let options = new RequestOptions({ headers: headers });
        let postData = {
            "have_card_id" : haveCard,
            "want_card_id" : wantCard
        };
        return this.http.put(environment.serverUrl + 'exchange/requests/'+ requestId, postData, options)
            .map((response: Response) => {
                return response.json()
            }).catch((error) => {
                return Observable.throw(error);
            });
    }

    deleteRequest(token, requestId) {
        let headers = new Headers({ 'Authorization': 'JWT ' + token });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(environment.serverUrl + 'exchange/requests/'+ requestId,  options)
            .map((response: Response) => {
                return response.json()
            }).catch((error) => {
                return Observable.throw(error);
            });
    }
}
