import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Contact } from '../../shared/models/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

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
}
