import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import {User} from '../shared/User';

@Injectable()
export class AuthService {

  token: string;
  redirectUrl: string;
  loginResponse: {error: boolean, message: string};
  loggedInUser: User;

  constructor(private http: Http, private router: Router){

  }

  login(email:string, password:string) {
    return this.http.post('/auth/login', {email: email, password: password}).map(
      (data: Response) => {
        const jsonData = data.json();
        this.token = jsonData.token;
        const m = jsonData.user;

        if(this.token) {
          //store token in local storage
          if (typeof(Storage) !== 'undefined') {
            sessionStorage.setItem('smstoken', this.token);
            sessionStorage.setItem('firstname', m.firstname);
            sessionStorage.setItem('lastname', m.lastname);
            sessionStorage.setItem('email', m.email);
            sessionStorage.setItem('id', m.id);
            sessionStorage.setItem('_id', m._id);
            sessionStorage.setItem('role', m.role);
          }
          this.loggedInUser = new User(m.email, m.firstname, m.lastname, m.id, m._id, m.role);
          return {error: false, message: 'Authentication successful'};
        }else{
          return {error: true, message: jsonData.message};
        }
      }
    );
  }

  getToken(): string {
    return this.token;
  }

  isAuthenticated() {
    const storedToken = sessionStorage.getItem('smstoken');
    if(this.token == null && storedToken == null) return false;
    else return true;
  }

  logout() {
    this.token = null;
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
