import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appSilver]'
})
export class SilverDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click')
  changeColor(): void {
    console.log();
    this.renderer.setStyle(this.el.nativeElement, 'color', 'silver');

  }

}
