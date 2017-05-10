import { Component, OnInit } from '@angular/core';
import {SubjectsService} from './subjects.service';
import {Subject} from '../../shared/Subject';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Session} from 'selenium-webdriver';

@Component({
  selector: 'sms-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjects = [];
  fetchError = false;
  fetchErrorMessage = '';
  queryForm: FormGroup;
  sessions: string[] = [];
  isFormSubmitted = false;

  constructor(private subjectsService: SubjectsService) { }

  ngOnInit() {

    this.subjectsService.getSessions().subscribe(
      data => {
        this.sessions = <string[]>data.message;
      }
    );

    this.queryForm = new FormGroup({
      queryType: new FormControl(null, Validators.required),
      session: new FormControl(null)
    }, this.isFormValid);
  }

  isFormValid(formGroup: FormGroup): {[key: string]: boolean} {
    let queryValue = formGroup.get('queryType').value;
    let session = formGroup.get('session').value;
    if(queryValue==='session' && session === null){
      return {'sessionEmpty': true};
    }
    return null;
  }

  onSubmit() {
    this.isFormSubmitted = true;
    const values = this.queryForm.value;
    if(values.queryType === 'all') {
      this.subjectsService.getAllSubjects().subscribe(
        response => {
          const data = response.json();
          this.subjects = [];
          if(!data.error) {
            this.fetchErrorMessage = '';
            this.fetchError = false;
            for(let i=0; i<data.message.length; i++) {
              this.subjects.push(new Subject(data.message[i].id, data.message[i]._id, data.message[i].name));
            }
          }else{
            this.fetchErrorMessage = data.message;
            this.fetchError = true;
          }
        }
      );
    }else{
      this.subjectsService.getSubjectsBySession(values.session).subscribe(
        response => {
          const data = response.json();
          const cl = data.message;
          this.subjects = [];
          for(let i=0; i<cl.length; i++){
            let sub = cl[i].subject;
            this.subjects.push({
              id: sub.id,
              _id: sub._id,
              name: sub.name,
              teacher: cl[i].teacher.fullName
            });
          }
        }
      );
    }
  }

}
