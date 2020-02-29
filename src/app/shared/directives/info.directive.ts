import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

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
  ) { }

  @HostListener('mouseenter', ['$event']) public onEnter(event: Element) {
    if (!this.product) {
      return;
    }
    const tooltip = document.createElement('span');
    tooltip.innerHTML = this.product ? `Product ID: ${this.product.id}` : 'Product doesn\'t have ID';
    tooltip.classList.add('tooltip');
    // this.tooltipWrap = this.sanitizer.bypassSecurityTrustHtml(
    //   `<span class="tooltip">${this.product ? this.product.id : 'Product doesn\'t have ID'}</span>`
    // );
    this.renderer.appendChild(this.el.nativeElement, tooltip);
  }

  @HostListener('mouseleave') public onLeave() {
    const childrenElements = this.el.nativeElement.children;
    if (!this.product) {
      return;
    } else if (childrenElements) {
      for (const child of childrenElements) {
        if (child.classList.contains('tooltip')) {
          this.renderer.removeChild(this.el.nativeElement, child);
        }
      }
    }
  }

}
