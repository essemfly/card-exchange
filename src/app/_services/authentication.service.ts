import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class AuthenticationService {
    public token: string;
    public headers: Headers

    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        this.headers = new Headers(
            {
                'Content-Type': 'application/json',
            })
    }

    login(username: string, password: string): Observable<boolean> {
        return this.http.post(environment.serverUrl + 'login/', JSON.stringify({
            username: username,
            password: password,
        }), { headers: this.headers }
        ).map((response: Response) => {
            // login successful if there's a jwt token in the response
            let token = response.json() && response.json().token;
            if (token) {
                // set token property
                this.token = token;

                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                // return true to indicate successful login
                return true;
            } else {
                // return false to indicate failed login
                return false;
            }
        }).catch((error) => {
            return Observable.throw(error);
        });
    }

    signup(username: string, password: string, re_password: string, email: string): Observable<boolean> {
        return this.http.post(environment.serverUrl + 'registration/', JSON.stringify({
            username: username,
            password1: password,
            password2: re_password,
            email: email,
        }), { headers: this.headers }
        ).map((response: Response) => {
            // login successful if there's a jwt token in the response
            let token = response.json() && response.json().token;
            if (token) {
                // set token property
                this.token = token;

                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                // return true to indicate successful login
                return true;
            } else {
                // return false to indicate failed login
                return false;
            }
        }).catch((error) => {
            return Observable.throw(error);
        });;
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}

