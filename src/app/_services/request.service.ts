import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class RequestService {
    constructor(
        private http: Http
    ) {}

    getRequest(token, id) {
        let headers = new Headers({ 'Authorization': 'JWT ' + token });
        let options = new RequestOptions({ headers: headers });
        return this.http.get('http://localhost:8000/exchange/requests/' + id, options)
            .map((response: Response) => {
                return response.json()
            })
    }

    getRequests(token) {
        let headers = new Headers({ 'Authorization': 'JWT ' + token });
        let options = new RequestOptions({ headers: headers });
        return this.http.get('http://localhost:8000/exchange/requests/', options)
            .map((response: Response) => {
                return response.json()
            })
    }

    postRequest(token, haveCard, wantCard) {
        let headers = new Headers({ 'Authorization': 'JWT ' + token });
        let options = new RequestOptions({ headers: headers });
        let postData = {
            "have_card_id" : haveCard,
            "want_card_id" : wantCard
        };
        return this.http.post('http://localhost:8000/exchange/requests/', postData, options)
            .map((response: Response) => {
                return response.json()
            });
    }

    editRequest(token, requestId, haveCard, wantCard) {
        let headers = new Headers({ 'Authorization': 'JWT ' + token });
        let options = new RequestOptions({ headers: headers });
        let postData = {
            "have_card_id" : haveCard,
            "want_card_id" : wantCard
        };
        return this.http.put('http://localhost:8000/exchange/requests/'+ requestId, postData, options)
        .map((response: Response) => {
            return response.json()
        });
    }

    deleteRequest(token, requestId) {
        let headers = new Headers({ 'Authorization': 'JWT ' + token });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete('http://localhost:8000/exchange/requests/'+ requestId,  options)
        .map((response: Response) => {
            return response.json()
        });
    }
}
