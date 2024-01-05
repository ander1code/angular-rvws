import { Component, OnInit } from '@angular/core';

@Component({
  styles: ['h1{color:red;}', 'img{margin-left:10%; width:70%;}'],
  selector: 'app-hello',
  template: ` <div class="row">
                <div class="col-md-offset-2 col-md-8 col-md-offset-2">
                  <h1>Hello, World!</h1>
                  <p>Project with the concepts seen in the course of Angular.</p>
                  <img src="{{ imgUrl }}" alt="404">
                </div>
             </div>
            `,
})
export class HomeComponent implements OnInit {

  imgUrl = '/assets/angular.png';

  constructor() { }

  ngOnInit() {
  }
}
