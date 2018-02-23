import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

    amount = 8;

    constructor(private http: Http) {
    }

    getUsers() {
        return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=' + this.amount + '&nat=gb')
            .map(function (response) {
                return response.json();
            })
            .map(response => response.results)
            .map(users => {
                return users.map(user => {
                    return {
                        name: user.name.first + ' ' + user.name.last,
                        image: user.picture.large,
                        city: user.location.city
                    };
                });
            });
    }

    setAmount(amount) {
        this.amount = amount;
    }
}