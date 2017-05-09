import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {DropdownMenuComponent} from './dropdown-menu.component';

@Injectable()
export class DropdownMenuService {

  dropdownStatusChanged: Subject<any> = new Subject<DropdownMenuComponent>();

  constructor() { }

}
