import { ContactsShowComponent } from './contacts-show/contacts-show.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { ContactsComponent } from './contacts.component';
import { SharedModule } from './../shared/shared.module';
import { ContactsRoutingModule } from './contacts-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    ContactsRoutingModule,
    SharedModule,
  ],
  declarations: [
    ContactsComponent,
    ContactsAddComponent,
    ContactsListComponent,
    ContactsShowComponent,
  ],
})
export class ContactsModule { }
