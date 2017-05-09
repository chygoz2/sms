import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../../shared/Student';
import {Class} from '../../../shared/Class';

@Component({
  selector: 'sms-view-classes-datatable',
  templateUrl: './view-classes-datatable.component.html',
  styleUrls: ['./view-classes-datatable.component.css']
})
export class ViewClassesDatatableComponent implements OnInit {

  @Input() classes: Class[] = [];

  constructor() { }

  ngOnInit() {
  }

}
