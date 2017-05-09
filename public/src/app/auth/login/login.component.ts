import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'sms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: {error: boolean, message: string};
  @ViewChild('f') form: NgForm;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if(this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit() {
    const username = this.form.value.username;
    const password = this.form.value.password;
    this.authService.login(username, password).subscribe(
      data => {
        // console.log(data);
        this.message = data;
        if(!this.message.error) {
          this.router.navigate(['/dashboard']);
        }
      }
    );
  }

}
