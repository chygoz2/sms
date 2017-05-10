import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ClassesService} from '../../view-classes/classes.service';
import {Class} from '../../../shared/Class';
import {SessionClass} from '../../../shared/SessionClass';
import {SessionClassesService} from '../session-classes.service';

@Component({
  selector: 'sms-edit-session-classes',
  templateUrl: './edit-session-classes.component.html',
  styleUrls: ['./edit-session-classes.component.css']
})
export class EditSessionClassesComponent implements OnInit {

  form: FormGroup;
  classes: Class[];
  validYears: number[] = [];
  editSuccess: boolean = false;
  editMessage: string = '';
  isFormSubmitted: boolean = false;

  constructor(private classesService: ClassesService, private sessionClassesService: SessionClassesService) { }

  ngOnInit() {
    const currentYear = new Date().getFullYear();
    for(let i=currentYear-50; i<currentYear+50; i++){
      this.validYears.push(i);
    }
    this.form = new FormGroup({
      'years': new FormGroup({
        'sessionStartYear': new FormControl(currentYear, Validators.required),
        'sessionEndYear': new FormControl(currentYear+1, Validators.required)
      }, this.validateEndYearGreaterThanStartYear),
      'className': new FormControl(null, Validators.required)
    });
    this.classesService.getClasses().subscribe(
      data => {
        this.classes = data;
      }
    );

    this.form.get('years').get('sessionStartYear').valueChanges.subscribe(
      newValue => {
        this.form.get('years').get('sessionEndYear').setValue(parseInt(newValue)+1);
      }
    );
  }

  validateEndYearGreaterThanStartYear(form : AbstractControl): {[key: string] : boolean} {
    let startYear = form.get('sessionStartYear').value;
    let endYear = form.get('sessionEndYear').value;
    if(parseInt(endYear) <= parseInt(startYear) || (parseInt(endYear) - parseInt(startYear)) > 1) {
      return {'startYearGreater': true};
    }
    return null;
  }

  onSubmit() {
    // console.log(this.form);

    let sc = new SessionClass(
      this.form.value.years.sessionStartYear+'-'+this.form.value.years.sessionEndYear,
      this.form.value.className,
      '',
      [],
      ''
    );

    this.sessionClassesService.addSessionClass(sc).subscribe(
      response => {
        this.isFormSubmitted = true;
        if(!response.error) {
          this.editSuccess = true;
        }
        this.editMessage = response.message;
      }
    )
  }

}
