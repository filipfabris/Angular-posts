import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// <!-- Nemoj zaboravit stavit import routerlinka ako ga zelis koristit  u HTML-u-->

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
