import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() value = 0;

  @Output() changedValue = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.value++;
    this.changedValue.emit({ newValue: this.value });
  }

  decrement() {
    this.value--;
    this.changedValue.emit({ newValue: this.value });
  }
}
