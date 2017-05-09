import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Class} from '../../../shared/Class';
import {ClassesService} from '../classes.service';

@Component({
  selector: 'sms-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.css']
})
export class EditClassComponent implements OnInit {

  form: FormGroup;
  editSuccess: boolean = false;
  editMessage: string = '';
  isFormSubmitted: boolean = false;

  constructor(private classesService: ClassesService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'className': new FormControl(null, Validators.required),
      'classId': new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    this.isFormSubmitted = true;
    let className = this.form.value['className'];
    let classId = this.form.value['classId'];
    let parent = null;
    if(className.charAt(0) === 'J'){
      parent = className.substr(0,4);
    }else if(className.charAt(0) == 'S'){
      parent = className.substr(0,3);
    }
    let newClass = new Class(classId,'',className,parent);
    this.classesService.addClass(newClass).subscribe(
      data => {
        if(!data.error) {
          this.editSuccess = true;
          this.editMessage = "Class has been added!";
          this.form.reset();
        }else{
          this.editSuccess = false;
          this.editMessage = "An error occured during submission. Please try again";
        }
      }
    );
  }

}
