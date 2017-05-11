import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SubjectsService} from '../subjects.service';

@Component({
  selector: 'sms-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent implements OnInit {

  form: FormGroup;
  error = false;
  errorMessage = '';
  isFormSubmitted = false;

  constructor(private ss: SubjectsService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'id': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    let name = this.form.value.name;
    let id = this.form.value.id;

    this.ss.addSubject(name,id).subscribe(
      response => {
        const data = response.json();
        if(data.error){
          this.error = true;
          this.errorMessage = data.message;
        }else{
          this.error = false;
          this.errorMessage = 'Subject has been created successfully';
        }
        this.isFormSubmitted = true;
      }
    )

  }

}
