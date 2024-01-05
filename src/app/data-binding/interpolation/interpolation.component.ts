import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  title = 'DataBinding Component.';

  url = 'assets/angular.png';

  constructor() { }

  ngOnInit() {
  }

  getValue() {
    return 36;
  }
}
