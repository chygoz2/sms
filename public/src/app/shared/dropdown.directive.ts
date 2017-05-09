import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[smsDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.active') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    const elUl = this.el.nativeElement.childNodes[2];
    elUl.style.display = this.isOpen ? 'block': 'none';
  }

  constructor(private el: ElementRef) { }

}
