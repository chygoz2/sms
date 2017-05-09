import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../../shared/Student';

@Component({
  selector: 'sms-view-students-datatable',
  templateUrl: './view-students-datatable.component.html',
  styleUrls: ['./view-students-datatable.component.css']
})
export class ViewStudentsDatatableComponent implements OnInit {

  @Input() students: Student[] = [];
  @Input() className: string;

  constructor() {}

  ngOnInit() {

  }
}
