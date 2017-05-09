import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Class} from '../../shared/Class';
import {StudentsService} from '../view-students/students.service';
import {SessionClassesService} from './session-classes.service';

@Component({
  selector: 'sms-view-sessions',
  templateUrl: './view-sessions.component.html',
  styleUrls: ['./view-sessions.component.css']
})
export class ViewSessionsComponent implements OnInit {

  queryForm: FormGroup;
  fetchError: boolean = false;
  fetchErrorMessage: string = '';
  classes: Class[] = [];
  selectedSession: string;
  sessions: string[] = [];

  constructor(private studentsService: StudentsService, private sessionClassesService: SessionClassesService) { }

  ngOnInit() {
    this.queryForm = new FormGroup({
      'session': new FormControl(null, Validators.required)
    });
    this.studentsService.getSessions().subscribe(
      response => {
        if(response.error) {
          this.fetchError = true;
          this.fetchErrorMessage = response.message;
        }else{
          this.fetchError = false;
          this.fetchErrorMessage = '';
          this.sessions = response.message;
        }
      }
    )
  }

  onSubmit() {
    this.selectedSession = this.queryForm.value.session;
    this.classes = [];
    //get the classes for that session
    this.sessionClassesService.getSessionClasses(this.selectedSession).subscribe(
      response => {
        if(response.error){
          this.fetchError = true;
          this.fetchErrorMessage = response.message;
        }else{
          this.fetchError = false;
          this.fetchErrorMessage = '';
          for(let i=0; i<response.message.length; i++){
            this.classes.push(new Class(response.message[i].classId.id, response.message[i].classId._id,
              response.message[i].classId.name, response.message[i].classId.superclass));
          }
        }
      }
    )
  }

}
