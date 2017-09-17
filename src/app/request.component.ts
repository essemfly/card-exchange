import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'exchange-edit',
    templateUrl: './request.component.html',
    styleUrls: ['./request.component.scss'],
})
export class RequestComponent {

    versions = [
        'Winter',
        'Spring',
        'Summer',
        'Autumn',
    ];

    members = [
        '기억',
        '니은',
        '디귿',
        '리을',
    ];

    types = [
        '실버',
        '골드',
        '레몬',
    ]
}