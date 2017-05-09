import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Class} from '../../shared/Class';

@Injectable()
export class ClassesService {

  classes: Class[] = [];

  constructor(private http: Http) { }

  getClasses() {
    return this.http.get('/api/classes').map(
      (response:Response) => {
        const data = response.json();
        this.classes.splice(0);
        if(!data.error) {
          for(let i=0; i<data.message.length; i++){
            let c = data.message[i];
            this.classes.push(new Class(c.id, c._id, c.name, c.superclass));
          }
        }else{
          console.log(data.error);
        }
        return this.classes;
      }
    )
  }

  addClass(newClass: Class) {
    const nClass = {
      name: newClass.name,
      id: newClass.id,
      superclass: newClass.parent
    };

    return this.http.post('/api/classes/add', nClass).map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    )
  }

}
