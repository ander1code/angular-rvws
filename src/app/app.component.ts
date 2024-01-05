import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-review';

  constructor() {
  }

  ngOnInit() {
  }

  redirectToRoute() {
    if (confirm('The route example is in another project. Would you like to be redirected?')) {
      window.location.href = 'https://angular-rvws-route.herokuapp.com/';
    }
  }
}
