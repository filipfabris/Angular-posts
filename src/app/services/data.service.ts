import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class DataService {
  users: User[];
  data: Observable<any>

  constructor() {
    this.users = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "auto@gmail.com"
      },
      {
        firstName: "Kevin",
        lastName: "Johnson",

      },
      {
        firstName: "Karen",
        lastName: "Williams",
      }
    ]

  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User) {
    this.users.unshift(user);
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);
    });

    return this.data;
  }
}

