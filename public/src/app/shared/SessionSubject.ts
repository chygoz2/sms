import {User} from './User';
import {Subject} from './Subject';

export class SessionSubject {
  constructor(public session: string, public subject: Subject, public teacher: User, public students: User[], public _id: string, public assessments: any[]){}
}
