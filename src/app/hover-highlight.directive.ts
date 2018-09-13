import { Directive,
         ElementRef,
         Renderer2,
         HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {

  constructor( private elRef: ElementRef,
               private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'aqua');
  }

  @HostListener('mouseleave') mouseExit(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }

}
