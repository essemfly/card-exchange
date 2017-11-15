import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/index';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [ AuthenticationService ],
})
export class LoginComponent implements OnInit {
    username: '';
    password: '';
    loading = false;
    error = '';
 
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }
 
    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }
 
    login() {
        this.loading = true;
        this.authenticationService.login(this.username, this.password)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    this.router.navigate(['/dashboard']);
                }
            }, error => {
                this.error = '입력하신 정보가 정확하지 않습니다.';
                this.loading = false;
            });
    }

    moveToSignUp() {
        this.router.navigate(['/signup']);
    }
}