import { Component, OnInit, ViewChild } from '@angular/core';
import { Contact } from '../../shared/models/Contact';
import { ContactHttpService } from '../services/contact-http.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'in-contacts-add',
  templateUrl: './contacts-add.component.html',
  styleUrls: ['./contacts-add.component.scss']
})
export class ContactsAddComponent implements OnInit {

  @ViewChild(NgForm)
  form: NgForm;

  public contact = new Contact();

  constructor(
    protected contactService: ContactHttpService,
    protected router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    // if (this.form.valid) {
      this.contactService.create(this.contact).subscribe((contact) => {
        this.contactService.events.emit('refresh');
        this.router.navigate(['contacts', contact.id]);
      });
    // }
  }
}
