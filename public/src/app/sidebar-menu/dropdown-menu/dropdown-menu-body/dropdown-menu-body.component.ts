import {Component, Input, OnInit} from '@angular/core';
import {DropdownMenuService} from '../dropdown-menu.service';
import {DropdownMenuComponent} from '../dropdown-menu.component';

@Component({
  selector: 'sms-dropdown-menu-body',
  templateUrl: './dropdown-menu-body.component.html',
  styleUrls: ['./dropdown-menu-body.component.css']
})
export class DropdownMenuBodyComponent implements OnInit {

  display = 'none';
  @Input() submenus;

  constructor(private dropdownMenuService: DropdownMenuService, private parentComponent: DropdownMenuComponent) { }

  ngOnInit() {
    this.dropdownMenuService.dropdownStatusChanged.subscribe(
      (comp: DropdownMenuComponent) => {
        if(comp === this.parentComponent) {
          this.display = this.display === 'none' ? 'block' : 'none';
        }
      }
    )
  }
}
