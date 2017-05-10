import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {StudentsService} from '../view-students/students.service';

@Injectable()
export class SubjectsService {

  constructor(private http: Http, private ss: StudentsService) { }

  getAllSubjects() {
    return this.http.get('/api/subjects');
  }

  getSessions() {
    return this.ss.getSessions();
  }

  getSubjectsBySession(session: string) {
    return this.http.get('/api/subjects/'+session);
  }
}
