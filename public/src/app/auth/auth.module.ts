import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from './auth.service';
import {LogoutComponent} from './logout/logout.component';
import {LoginComponent} from './login/login.component';
import {AuthRoutingModule} from './auth-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, LogoutComponent],
  providers: [],
  imports: [CommonModule, AuthRoutingModule, FormsModule]
})

export class AuthModule {}
