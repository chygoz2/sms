import { Component, OnInit } from '@angular/core';
import {ClassesService} from './classes.service';
import {Class} from '../../shared/Class';

@Component({
  selector: 'sms-view-classes',
  templateUrl: './view-classes.component.html',
  styleUrls: ['./view-classes.component.css']
})
export class ViewClassesComponent implements OnInit {

  classes: Class[] = [];

  constructor(private classesService: ClassesService) { }

  ngOnInit() {
    this.classesService.getClasses().subscribe(
      (data) => {
        this.classes = data;
      }
    );

  }

}
