import { LiteralExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;



  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      console.log(data);
    });



    this.users = this.dataService.getUsers();
  }

  addUser(user: User) {
    this.dataService.addUser(user);
  }

}
