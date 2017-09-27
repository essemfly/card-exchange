import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { AuthenticationService, CardService, RequestService } from '../_services/index';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'exchange-edit',
    templateUrl: './request.component.html',
    styleUrls: ['./request.component.scss'],
    providers: [AuthenticationService, CardService, RequestService],
})
export class RequestComponent {
    public cards = []
    public members = []
    public versions = []
    public types = []
    public haveVersion = ''
    public haveMember = ''
    public haveType = ''
    public wantVersion = ''
    public wantMember = ''
    public wantType = ''


    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private cardService: CardService,
        private requestService: RequestService,
        private route: ActivatedRoute,
    ) { }


    ngOnInit() {
        this.getCards();
        this.route.paramMap
        .switchMap((params: ParamMap) =>
          this.requestService.getRequest(this.authenticationService.token, params.get('id')))
          .subscribe(request => {
              this.haveVersion = request.have_card.version;
              this.haveMember = request.have_card.member;
              this.haveType = request.have_card.type;
              this.wantVersion = request.want_card.version;
              this.wantMember = request.want_card.member;
              this.wantType = request.want_card.type;
          })
    }

    getCards() {
        this.cardService.getCards(this.authenticationService.token, 1)
            .subscribe(cards => {
                this.cards = cards
                this.arrangeCards()
            });
    }

    arrangeCards() {
        for (let i = 0; i < this.cards.length; i++) {
            if (this.members.indexOf(this.cards[i].member) == -1) {
                this.members.push(this.cards[i].member)
            }
            if (this.versions.indexOf(this.cards[i].version) == -1) {
                this.versions.push(this.cards[i].version)
            }
            if (this.types.indexOf(this.cards[i].type) == -1) {
                this.types.push(this.cards[i].type)
            }
        }
    }

    applyRequest() {
        let haveCardId = -1
        let wantCardId = -1
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].member == this.haveMember
                && this.cards[i].version == this.haveVersion
                && this.cards[i].type == this.haveType) {
                haveCardId = this.cards[i].id
            }
            if (this.cards[i].member == this.wantMember
                && this.cards[i].version == this.wantVersion
                && this.cards[i].type == this.wantType) {
                wantCardId = this.cards[i].id
            }
        }
        this.requestService.postRequest(this.authenticationService.token, haveCardId, wantCardId)
            .subscribe(result => {
                this.router.navigate(['/dashboard']);
            })
    }
}