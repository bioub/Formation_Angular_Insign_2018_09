import { ContactServiceInterface } from './contact-service.interface';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Contact } from '../../shared/models/Contact';

@Injectable({
  // Angular 6
  providedIn: 'root',
  // voir useValue, useFactory
})
export class ContactService implements ContactServiceInterface {

  private contacts: Contact[] = [{
    id: 123,
    name: 'Steve Jobs',
    email: 'sjobs@apple.com'
  }, {
    id: 456,
    name: 'Bill Gates',
    email: 'bill@microsoft.com'
  }];

  constructor() { }

  getAll(): Observable<Contact[]> {
    return of(this.contacts).pipe(
      delay(400),
    );
  }

  getById(id): Observable<Contact> {
    const contact = this.contacts.find((c) => Number(id) === c.id);

    if (Number(id) === 123) {
      return of(contact).pipe(
        delay(400),
      );
    } else {
      return of(contact).pipe(
        delay(3000),
      );
    }
  }
}
