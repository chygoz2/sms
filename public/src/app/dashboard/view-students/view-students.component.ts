import {Component, OnInit, ViewChild} from '@angular/core';
import {StudentsService} from './students.service';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Student} from '../../shared/Student';

@Component({
  selector: 'sms-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {

  sessions: string[];
  classes;
  queryForm: FormGroup;
  fetchError: boolean = false;
  fetchErrorMessage: string;
  students:Student[] = [];
  selectedClass: string;

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
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
    );

    this.studentsService.getClasses().subscribe(
      data => {
        this.classes = data;
      }
    )

    this.queryForm = new FormGroup({
      'session': new FormControl(null, [Validators.required]),
      'className': new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    const session = this.queryForm.value['session'];
    const className = this.queryForm.value['className'];
    this.selectedClass = className;
    this.students = [];

    this.studentsService.getStudentsBySessionAndClass(session,className).subscribe(
      data => {
        if(data.error){
          this.fetchError = true;
        }else{
          this.fetchError = false;
          for(let i=0; i<data.message.length; i++){
            let d = data.message[i];
            let s = new Student(d.email, d.firstname, d.lastname, d.id, d._id);
            this.students.push(s);
          }
        }
        this.fetchErrorMessage = data.message;
      }
    );

  }

}
