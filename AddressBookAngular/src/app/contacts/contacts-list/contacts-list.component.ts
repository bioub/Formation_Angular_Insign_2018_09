import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../../shared/models/Contact';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'in-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit, OnDestroy {


  public contacts: Contact[];
  public contacts$: Observable<Contact[]>;
  public subscribtion: Subscription;

  constructor(
    protected contactService: ContactService,
  ) {}

  ngOnInit() {
    // On passe l'observable à la vue (nécessite le pipe async)
    this.contacts$ = this.contactService.getAll();

    // On passe le résultat de l'observable à la vue
    this.subscribtion = this.contactService.getAll().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  ngOnDestroy() {
    // Bonne pratique unsubscribe pour éviter les fuites mémoires
    // (si l'utilisateur change de page avant la réponse)
    this.subscribtion.unsubscribe();
  }

}
