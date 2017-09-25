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
    public requestResults = []
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
                this.convertRequestData()
            })
    }

    convertRequestData() {
        for (let i=0; i<this.requests.length; i++) {
            this.requestResults.push({
                "id": this.requests[i].id,
                "have_card": this.requests[i].have_card.member + " / " + this.requests[i].have_card.type + " / " + this.requests[i].have_card.version,
                "want_card": this.requests[i].want_card.member + " / " + this.requests[i].want_card.type + " / " + this.requests[i].want_card.version,
                "created_at": this.convertTime(this.requests[i].created_date),
                "status": this.convertStatus(this.requests[i].status),
            })
        }
    }

    convertStatus(status) {
        switch(status) {
            case 0:
                return '취소됨'
            case 1:
                return '대기중'
            case 2:
                return '매칭됨'
        }
    }

    convertTime(time) {
        let newTime = new Date(time)
        return newTime.getFullYear() + '년 ' + newTime.getMonth() + '월 ' + newTime.getDate() + '일 ' + newTime.getHours() + '시 ' + newTime.getMinutes() + '분'
    }
}