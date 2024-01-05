import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  alerts: any = [];

  constructor() { }

  ngOnInit() {
    this.alerts = [
      { name: 'Success', class: 'alert-success' },
      { name: 'Info', class: 'alert-info' },
      { name: 'Warning', class: 'alert-warning' },
      { name: 'Danger', class: 'alert-danger' },
    ];
  }

  changeStyle(event) {
    console.log(event.srcElement.selectedOptions['0'].value);
  }
}
