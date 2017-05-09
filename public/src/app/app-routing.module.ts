import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SignupComponent} from './auth/signup/signup.component';
import {AuthGuard} from './auth/auth-guard.service';
import {LogoutComponent} from './auth/logout/logout.component';
import {AuthModule} from './auth/auth.module';
import {ViewStudentsComponent} from './dashboard/view-students/view-students.component';
import {DashboardHomeComponent} from './dashboard/dashboard-home/dashboard-home.component';
import {ViewClassesComponent} from './dashboard/view-classes/view-classes.component';
import {EditClassComponent} from './dashboard/view-classes/edit-class/edit-class.component';
import {ViewSessionsComponent} from './dashboard/view-sessions/view-sessions.component';
import {EditSessionClassesComponent} from './dashboard/view-sessions/edit-session-classes/edit-session-classes.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'register', component: SignupComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children: [
    {path: '', component: DashboardHomeComponent},
    {path: 'students', component: ViewStudentsComponent},
    {path: 'classes', component: ViewClassesComponent},
    {path: 'classes/add', component: EditClassComponent},
    {path: 'classes/edit/:id', component: EditClassComponent},
    {path: 'session-classes', component: ViewSessionsComponent},
    {path: 'session-classes/add', component: EditSessionClassesComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    AuthModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}


