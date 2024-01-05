import { Directive, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() font;

  @HostBinding('style.color') colorFont;

  @HostListener('mouseenter') OnMouseOver() {
    this.colorFont = this.font;
  }

  @HostListener('mouseleave') OnMouseOut() {
    this.colorFont = 'black';
  }
}
