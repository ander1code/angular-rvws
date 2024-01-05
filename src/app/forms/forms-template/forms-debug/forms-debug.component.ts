import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forms-debug',
  templateUrl: './forms-debug.component.html',
  styleUrls: ['./forms-debug.component.css']
})
export class FormsDebugComponent implements OnInit {

  @Input() forms;
  constructor() { }
  ngOnInit() {
  }
}
