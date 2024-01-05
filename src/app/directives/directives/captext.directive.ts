import { Directive, ElementRef, OnInit, Renderer } from '@angular/core';

@Directive({
  selector: '[appCaptext]'
})
export class CaptextDirective implements OnInit {

  constructor(private elem: ElementRef, private rend: Renderer) {
    this.rend.setElementStyle(this.elem.nativeElement, 'background-color', 'yellow');
    this.rend.setElementStyle(this.elem.nativeElement, 'color', 'red');
    this.rend.setElementStyle(this.elem.nativeElement, 'font-weight', 'bold');
    this.rend.setElementStyle(this.elem.nativeElement, 'font-size', '30px');
    this.rend.setElementStyle(this.elem.nativeElement, 'width', '200px');
  }

  ngOnInit() {
    console.log(this.elem);
  }
}
