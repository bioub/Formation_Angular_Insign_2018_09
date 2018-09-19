import { ContactService } from './contact.service';
import { Observable } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { environment } from '../../../environments/environment';
import { Contact } from '../../shared/models/Contact';
import { ContactServiceInterface } from './contact-service.interface';

@Injectable({
  providedIn: 'root',
  // useClass: ContactService
})
export class ContactHttpService implements ContactServiceInterface {

  public events = new EventEmitter<string>();

  constructor(protected httpClient: HttpClient) { }

  getAll(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(environment.baseApiUrl + '/users');
  }

  getById(id): Observable<Contact> {
    return this.httpClient.get<Contact>(environment.baseApiUrl + '/users/' + id);
  }

  create(contact: Contact): Observable<Contact> {
    return this.httpClient.post<Contact>(environment.baseApiUrl + '/users', contact);
  }
}
