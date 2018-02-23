import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';

@Component({
    selector: 'app-setup-page',
    templateUrl: './setup-page.component.html',
    styleUrls: ['./setup-page.component.scss']
})
export class SetupPageComponent implements OnInit {

    amount;

    constructor(private usersService: UsersService) {
    }

    ngOnInit() {
        this.amount = this.usersService.amount;
    }

    onChange() {
        this.usersService.setAmount(+this.amount);
    }

}
