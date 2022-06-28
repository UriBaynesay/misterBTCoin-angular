import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { Contact } from 'src/app/model/contact'
import { ContactService } from 'src/app/service/contact.service'

@Component({
  selector: "contacts-page",
  templateUrl: "./contacts-page.component.html",
  styleUrls: ["./contacts-page.component.scss"],
})
export class ContactsPageComponent implements OnInit {
  contacts$!: Observable<Contact[]>

  constructor(private contactsService: ContactService) {}

  ngOnInit(): void {
    this.contactsService.loadContacts()
    this.contacts$ = this.contactsService.contacts$
  }

  removeContact(contactId:string){
    this.contactsService.deleteContact(contactId)
  }
}
