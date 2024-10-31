import { Directive } from '@angular/core';
import {  HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  standalone: true
})
export class DropdownDirective {

  constructor() { }

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
