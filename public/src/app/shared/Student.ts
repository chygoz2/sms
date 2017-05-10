import {User} from './User';

export class Student extends User{

  constructor(public email: string, public firstname: string, public lastname: string, public id:string, public _id:string, public fullName: string) {
    super(email, firstname, lastname, id, _id, 'student', fullName);
  }
}
