import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { ContactsShowComponent } from './contacts-show/contacts-show.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

const routes: Routes = [{
  path: 'contacts',
  children: [{
    path: '',
    component: ContactsListComponent,
  }, {
    path: 'add',
    component: ContactsAddComponent,
  }, {
    path: ':id',
    component: ContactsShowComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
