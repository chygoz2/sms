import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SubjectsService} from '../subjects.service';
import {SessionYearsValidator} from '../../../shared/validateEndYearGreaterThanStartYear';

@Component({
  selector: 'sms-register-subject',
  templateUrl: './register-subject.component.html',
  styleUrls: ['./register-subject.component.css']
})
export class RegisterSubjectComponent implements OnInit {

  form: FormGroup;
  subjects = [];
  validYears: number[] = [];
  editSuccess: boolean = false;
  editMessage: string = '';
  isFormSubmitted: boolean = false;

  constructor(private ss: SubjectsService) { }

  ngOnInit() {
    const currentYear = new Date().getFullYear();
    for(let i=currentYear-50; i<currentYear+50; i++){
      this.validYears.push(i);
    }
    this.form = new FormGroup({
      'years': new FormGroup({
        'sessionStartYear': new FormControl(currentYear, Validators.required),
        'sessionEndYear': new FormControl(currentYear+1, Validators.required)
      }, new SessionYearsValidator().validateEndYearGreaterThanStartYear),
      'subject': new FormControl(null, Validators.required)
    });
    this.ss.getAllSubjects().subscribe(
      response => {
        const data = response.json();
        this.subjects = data.message;
      }
    );
  }

  onSubmit() {
    let ssub = {
      session: this.form.value.years.sessionStartYear+'-'+this.form.value.years.sessionEndYear,
      subject: this.form.value.subject
    }

    this.ss.addSessionSubject(ssub).subscribe(
      response => {
        const data = response.json();
        this.editSuccess = !data.error;
        this.editMessage = data.message;
        this.isFormSubmitted = true;
      }
    )
  }
}
