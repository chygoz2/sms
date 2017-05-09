import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {ClassesService} from '../view-classes/classes.service';

@Injectable()
export class StudentsService {

  constructor(private http: Http, private classesService: ClassesService) { }

  getSessions(): Observable<any> {
    return this.http.get('/api/sessions').map(
      (response:Response) => {
        const resp = response.json();
        return resp;
      }
    )
  }

  getClasses()  {
    return this.classesService.getClasses();
  }

  getStudentsBySessionAndClass(session: string, className: string) {
    return this.http.get('/api/students/'+session+'/'+className).map(
      (response: Response) => {
        const resp = response.json();
        return resp;
      }
    )
  }
}
