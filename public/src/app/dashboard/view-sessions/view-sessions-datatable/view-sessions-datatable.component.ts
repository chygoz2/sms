import {Component, Input, OnInit} from '@angular/core';
import {Class} from '../../../shared/Class';

@Component({
  selector: 'sms-view-sessions-datatable',
  templateUrl: './view-sessions-datatable.component.html',
  styleUrls: ['./view-sessions-datatable.component.css']
})
export class ViewSessionsDatatableComponent implements OnInit {
  @Input() session: string;
  @Input() classes: Class[];

  constructor() { }

  ngOnInit() {

  }

}
