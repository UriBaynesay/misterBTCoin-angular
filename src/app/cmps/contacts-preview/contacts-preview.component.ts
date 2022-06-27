import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact'

@Component({
  selector: 'contacts-preview',
  templateUrl: './contacts-preview.component.html',
  styleUrls: ['./contacts-preview.component.scss']
})
export class ContactsPreviewComponent implements OnInit {
  @Input() contact!:Contact

  constructor() { }

  ngOnInit(): void {
    this.contact.imgUrl = 'https://robohash.org/'+this.contact._id 
  }

}
