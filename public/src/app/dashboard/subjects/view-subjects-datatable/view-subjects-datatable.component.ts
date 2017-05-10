import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'sms-view-subjects-datatable',
  templateUrl: './view-subjects-datatable.component.html',
  styleUrls: ['./view-subjects-datatable.component.css']
})
export class ViewSubjectsDatatableComponent implements OnInit {

  @Input() subjects;

  constructor() { }

  ngOnInit() {
  }

}
