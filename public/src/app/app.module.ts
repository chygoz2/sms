import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import {DropdownMenuComponent} from './sidebar-menu/dropdown-menu/dropdown-menu.component';
import {DropdownMenuBodyComponent} from './sidebar-menu/dropdown-menu/dropdown-menu-body/dropdown-menu-body.component';
import {DropdownMenuService} from './sidebar-menu/dropdown-menu/dropdown-menu.service';
import { SignupComponent } from './auth/signup/signup.component';
import {AuthGuard} from './auth/auth-guard.service';
import { ViewStudentsComponent } from './dashboard/view-students/view-students.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import {StudentsService} from './dashboard/view-students/students.service';
import {DataTableModule} from 'primeng/primeng';
import {ViewStudentsDatatableComponent} from './dashboard/view-students/view-students-datatable/view-students-datatable.component';
import {AuthService} from './auth/auth.service';
import { ViewClassesComponent } from './dashboard/view-classes/view-classes.component';
import {ClassesService} from './dashboard/view-classes/classes.service';
import { ViewClassesDatatableComponent } from './dashboard/view-classes/view-classes-datatable/view-classes-datatable.component';
import { EditClassComponent } from './dashboard/view-classes/edit-class/edit-class.component';
import { ViewSessionsComponent } from './dashboard/view-sessions/view-sessions.component';
import { ViewSessionsDatatableComponent } from './dashboard/view-sessions/view-sessions-datatable/view-sessions-datatable.component';
import { EditSessionClassesComponent } from './dashboard/view-sessions/edit-session-classes/edit-session-classes.component';
import {SessionClassesService} from './dashboard/view-sessions/session-classes.service';
import { SubjectsComponent } from './dashboard/subjects/subjects.component';
import { EditSubjectComponent } from './dashboard/subjects/edit-subject/edit-subject.component';
import { ViewSubjectsDatatableComponent } from './dashboard/subjects/view-subjects-datatable/view-subjects-datatable.component';
import {SubjectsService} from './dashboard/subjects/subjects.service';
import {SortPipe} from './shared/sort.pipe';
import { RegisterSubjectComponent } from './dashboard/subjects/register-subject/register-subject.component';
import { TeachersComponent } from './dashboard/teachers/teachers.component';
import { EditTeachersComponent } from './dashboard/teachers/edit-teachers/edit-teachers.component';
import { ViewTeachersDatatableComponent } from './dashboard/teachers/view-teachers-datatable/view-teachers-datatable.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DropdownDirective,
    DropdownMenuComponent,
    DropdownMenuBodyComponent,
    SidebarMenuComponent,
    SignupComponent,
    ViewStudentsComponent,
    DashboardHomeComponent,
    ViewStudentsDatatableComponent,
    ViewClassesComponent,
    ViewClassesDatatableComponent,
    EditClassComponent,
    ViewSessionsComponent,
    ViewSessionsDatatableComponent,
    EditSessionClassesComponent,
    SubjectsComponent,
    EditSubjectComponent,
    ViewSubjectsDatatableComponent,
    SortPipe,
    RegisterSubjectComponent,
    TeachersComponent,
    EditTeachersComponent,
    ViewTeachersDatatableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DataTableModule
  ],
  providers: [DropdownMenuService, AuthGuard, AuthService, StudentsService, ClassesService, SessionClassesService, SubjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
