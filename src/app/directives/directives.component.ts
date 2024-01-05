import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  people: any = ['Anderson', 'Pamela', 'Paula'];

  lblButton;
  status;
  urlImage = 'assets/angular.png';
  aba = 'link1';
  statusClass;
  statusStyle;

  constructor() { }

  ngOnInit() {
    console.log('iniciando...');
    this.lblButton = 'SHOW';
    this.status = false;
    this.statusClass = true;
    this.statusStyle = true;
  }

  showHide() {
    this.status = !this.status;
    this.lblButton = this.status ? 'HIDE' : 'SHOW';
  }

  changeClass() {
    this.statusClass = !this.statusClass;
  }

  changeStyle() {
    this.statusStyle = !this.statusStyle;
  }
}
