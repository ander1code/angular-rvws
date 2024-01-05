import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forms-errors',
  templateUrl: './forms-errors.component.html',
  styleUrls: ['./forms-errors.component.css']
})
export class FormsErrorsComponent implements OnInit {

  @Input() showError;
  @Input() messageError;

  constructor() { }

  ngOnInit() {
  }
}
