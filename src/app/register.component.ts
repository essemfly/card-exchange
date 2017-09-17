import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'exchange-register',
    templateUrl: './register.component.html',
    styleUrls: ['./request.component.scss'],
})
export class RegisterComponent {
    favoriteSeason: string;

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