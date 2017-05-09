import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {User} from '../shared/User';

@Component({
  selector: 'sms-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit() {
    this.user = new User(
                  sessionStorage.getItem('email'),
                  sessionStorage.getItem('firstname'),
                  sessionStorage.getItem('lastname'),
                  sessionStorage.getItem('id'),
                  sessionStorage.getItem('_id'),
                  sessionStorage.getItem('role')
            );
  }

}
