import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core"
import { Contact } from "src/app/model/contact"

@Component({
  selector: "contacts-preview",
  templateUrl: "./contacts-preview.component.html",
  styleUrls: ["./contacts-preview.component.scss"],
})
export class ContactsPreviewComponent implements OnInit {
  @Input() contact!: Contact
  @Output() removeContact= new EventEmitter<string>()

  constructor() {}

  ngOnInit(): void {
    this.contact.imgUrl = "https://robohash.org/" + this.contact._id
  }

  onRemove() {
    this.removeContact.emit(this.contact._id)
  }
}
