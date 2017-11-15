import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/index';

@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [ AuthenticationService ],
})
export class SignUpComponent implements OnInit {
    username: '';
    password: '';
    password_re: '';
    email: '';
    loading = false;
    error = '';
 
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }
 
    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }

    signup() {
        this.loading = true;
        this.authenticationService.signup(this.username, this.password, this.password_re, this.email)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    this.router.navigate(['/login']);
                }
            }, error => {
                this.error = '가입요청이 실패했습니다.';
            });
    }

    moveToLogin() {
        this.router.navigate(['/login']);
    }
}