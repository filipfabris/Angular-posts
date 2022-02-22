import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User"

@Component({
    selector: 'app-user',
    //template: '<h2> John Doe </h2>' //Bolja je praksa napraviti user.component.html pa koristimo:
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    // styles: [`
    //     h2{
    //         color: blue
    //     }
    //     `]
})

export class UserComponent implements OnInit {

    user: User;


    constructor() {

    }

    ngOnInit(): void { //Inicialaizor
        this.user = {
            firstName: "John",
            lastName: "Doe",
        }
    }
}
