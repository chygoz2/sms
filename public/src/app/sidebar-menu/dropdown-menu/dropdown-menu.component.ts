import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {DropdownMenuService} from './dropdown-menu.service';

@Component({
  selector: 'sms-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css'],
})
export class DropdownMenuComponent implements OnInit {
  @Input() menuDetails;
  isOpen = false;

  @HostListener('click') toggleOpen() {
    if(!this.menuDetails.link){
      this.isOpen = !this.isOpen;
      this.dropdownMenuService.dropdownStatusChanged.next(this);
    }
  }

  constructor(private dropdownMenuService: DropdownMenuService) { }

  ngOnInit() {
  }

}
