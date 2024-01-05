import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  actualValue;

  valuesave;

  valueBlur;

  statusMouse;

  constructor() { }

  ngOnInit() {
    this.statusMouse = false;
  }

  onClick() {
    alert('Hello, World!');
  }

  onKey(key: KeyboardEvent) {
    // Preciso colocar a interface para poder acessar as propriedades:
    this.actualValue = ((<HTMLInputElement>key.target).value);
  }

  saveValue(value) {
    this.valuesave = value;
  }

  saveValueBlur(value) {
    this.valueBlur = value;
  }

  onMouseOverOut() {
    this.statusMouse = !this.statusMouse;
  }
}
