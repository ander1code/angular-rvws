import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  aba = 'dlink1';

  initialValue = 33;

  actualValue = '';

  valuesave = '';

  valueBlur = '';

  statusMouse;

  attribute = 'Hello, World!';

  constructor() { }

  ngOnInit() {
  }

  onchangeValue(event) {
    this.actualValue = event.newValue;
  }
}
