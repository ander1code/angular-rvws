import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild-cmp',
  templateUrl: './viewchild-cmp.component.html',
  styleUrls: ['./viewchild-cmp.component.css']
})
export class ViewchildCmpComponent implements OnInit {

  @ViewChild('inputChild') inputChild: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ShowValue() {
    if (this.inputChild.nativeElement.value) {
      alert(this.inputChild.nativeElement.value);
      this.inputChild.nativeElement.value = '';
    }
  }
}
