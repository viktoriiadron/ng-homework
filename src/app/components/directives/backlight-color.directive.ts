import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBacklightColor]'
})
export class BacklightColorDirective {

    constructor(private el: ElementRef) {

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.backlight(this.appBacklightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backlight('');
  }

  @Input() appBacklightColor = '';

    private backlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
      this.el.nativeElement.style.transition = '.8s'
  }
}
