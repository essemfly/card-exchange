import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { RequestService, AuthenticationService } from '../_services/index';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [ RequestService, AuthenticationService ]
})
export class DashboardComponent implements OnInit {
    public requests = []
    constructor(
        private requestService: RequestService,
        private authenticationService: AuthenticationService,
    ) {}

    ngOnInit() {
        this.getRequests()
    }

    getRequests() {
        this.requestService.getRequests(this.authenticationService.token)
            .subscribe(requests => {
                this.requests = requests
            })
    }
}