import { ContactHttpService } from './contact-http.service';
import { Observable } from 'rxjs';
import { Contact } from '../../shared/models/Contact';
import { Injectable } from '@angular/core';

export interface ContactServiceInterface {
  getAll(): Observable<Contact[]>;
  getById(id): Observable<Contact>;
}
