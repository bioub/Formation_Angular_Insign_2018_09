import { NotFoundComponent } from './core/not-found/not-found.component';
import { HomeComponent } from './core/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  data: {
    title: 'AddressBook',
  },
}, {
  path: 'contacts',
  loadChildren: './contacts/contacts.module#ContactsModule',
}, {
  path: '**',
  component: NotFoundComponent,
  data: {
    title: 'Not Found',
  },
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
