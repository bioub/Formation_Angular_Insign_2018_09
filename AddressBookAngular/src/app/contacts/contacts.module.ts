import { NgModule } from '@angular/core';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsShowComponent } from './contacts-show/contacts-show.component';
import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    ContactsRoutingModule,
    SharedModule,
  ],
  declarations: [
    ContactsAddComponent,
    ContactsListComponent,
    ContactsShowComponent,
  ],
})
export class ContactsModule { }
