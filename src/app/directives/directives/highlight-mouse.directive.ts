import { Directive, HostListener, Renderer, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  constructor(private elem: ElementRef, private rend: Renderer) { }

  // Resumindo o acesso ao atributo de uma tag:
  @HostBinding('style.backgroundColor') back;

  @HostListener('mouseenter') onMouseOver() {
    // this.rend.setElementStyle(this.elem.nativeElement, 'background-color', 'yellow');
    this.back = 'yellow';
    this.rend.setElementStyle(this.elem.nativeElement, 'color', 'red');
    this.rend.setElementStyle(this.elem.nativeElement, 'font-weight', 'bold');
    this.rend.setElementStyle(this.elem.nativeElement, 'border', '3px solid red');
  }

  @HostListener('mouseleave') onMouseOut() {
    //  this.rend.setElementStyle(this.elem.nativeElement, 'background-color', 'white');
    this.back = 'white';
    this.rend.setElementStyle(this.elem.nativeElement, 'color', 'black');
    this.rend.setElementStyle(this.elem.nativeElement, 'font-weight', 'normal');
    this.rend.setElementStyle(this.elem.nativeElement, 'border', 'none');
  }
}
