import { Directive, HostListener, ElementRef, Renderer2, Input, Inject } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appInfo]',
})
export class InfoDirective {
  @Input('appInfo') public product = null;

  public tooltipWrap: SafeHtml;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private document,
  ) { }

  @HostListener('mouseenter', ['$event']) public onEnter(event: Element) {
    const tooltip = document.createElement('span');
    tooltip.innerHTML = this.product ? this.product.id : 'Product doesn\'t have ID';
    tooltip.classList.add('tooltip');
    // this.tooltipWrap = this.sanitizer.bypassSecurityTrustHtml(
    //   `<span class="tooltip">${this.product ? this.product.id : 'Product doesn\'t have ID'}</span>`
    // );
    this.renderer.appendChild(this.el.nativeElement, tooltip);
  }

  @HostListener('mouseleave') public onLeave() {
    const tooltip = this.renderer.
    this.renderer.removeChild(this.el.nativeElement, child);
  }

}
