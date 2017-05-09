import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {SessionClass} from '../../shared/SessionClass';

@Injectable()
export class SessionClassesService {

  constructor(private http: Http) {}

  addSessionClass(sessionClass: SessionClass) {
    let d = {
      session: sessionClass.session,
      classId: sessionClass.classId,
      teacher: sessionClass.teacher,
      students: sessionClass.students
    };

    return this.http.post('/api/session-classes/add', d).map(
      (response: Response) => {
        return response.json();
      }
    );
  }

  getSessionClasses(session: string) {
    return this.http.get('/api/session-classes/'+session).map(
      (response: Response) => {
        return response.json();
      }
    )
  }

}
