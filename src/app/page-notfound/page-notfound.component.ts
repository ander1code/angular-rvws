import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-notfound',
  templateUrl: './page-notfound.component.html',
  styleUrls: ['./page-notfound.component.css']
})
export class PageNotfoundComponent implements OnInit {

  imgUrl = '/assets/404.png';

  constructor() { }

  ngOnInit() {
  }
}
