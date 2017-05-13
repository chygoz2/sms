import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sms-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {

  menus = [
    {
      'title': 'Dashboard',
      'icon': 'fa fa-home',
      'link': 'dashboard',
    },
    {
      'title': 'Students',
      'icon': 'fa fa-edit',
      'submenus': [
        {title:'Add Student', link:'students/add'},
        {title:'View Students', link:'students'},
      ]
    },
    {
      'title': 'Classes',
      'icon': 'fa fa-edit',
      'submenus': [
        {title:'Add Class', link:'classes/add'},
        {title:'View Classes', link:'classes'},
      ]
    },
    {
      'title': 'Session',
      'icon': 'fa fa-edit',
      'submenus': [
        {title:'Add Session Class', link:'session-classes/add'},
        {title:'View Session Classes', link:'session-classes'},
      ]
    },
    {
      'title': 'Subjects',
      'icon': 'fa fa-edit',
      'submenus': [
        {title:'Add Subject', link:'subjects/add'},
        {title:'View Subjects', link:'subjects'},
        {title:'Register Subject on Session', link:'subjects/register'}
      ]
    },
    {
      'title': 'Teachers',
      'icon': 'fa fa-edit',
      'submenus': [
        {title:'Add Teacher', link:'teachers/add'},
        {title:'View Teachers', link:'teachers'},
        {title:'Assign Teacher to Subject', link:'teachers/assign-to-subject'}
      ]
    },
    {
      'title': 'Forms',
      'icon': 'fa fa-edit',
      'submenus': [
        'General Form',
        'Advanced Components',
        'Form Validation',
        'Form wizard',
        'Form Upload',
        'Form Buttons'
      ]
    },
    {
      'title': 'UI Elements',
      'icon': 'fa fa-desktop'
    },
    {
      'title': 'Tables',
      'icon': 'fa fa-table'
    },
    {
      'title': 'Data Presentation',
      'icon': 'fa fa-bar-chart-o'
    },
    {
      'title': 'Layouts',
      'icon': 'fa fa-clone'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
