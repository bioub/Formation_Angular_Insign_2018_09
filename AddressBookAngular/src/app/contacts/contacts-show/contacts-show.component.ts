import { Contact } from './../../shared/models/Contact';
import { ContactService } from './../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ContactHttpService } from '../services/contact-http.service';

@Component({
  selector: 'in-contacts-show',
  templateUrl: './contacts-show.component.html',
  styleUrls: ['./contacts-show.component.scss']
})
export class ContactsShowComponent implements OnInit {

  public contact$: Observable<Contact>;

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected contactService: ContactHttpService,
  ) { }

  ngOnInit() {
    this.contact$ = this.activatedRoute.params.pipe(
      map((params) => params.id),
      switchMap((id) => this.contactService.getById(id)),
    );
  }

}
