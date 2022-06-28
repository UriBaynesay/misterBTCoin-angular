import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core"
import { Contact } from "src/app/model/contact"

@Component({
  selector: "contacts-list",
  templateUrl: "./contacts-list.component.html",
  styleUrls: ["./contacts-list.component.scss"],
})
export class ContactsListComponent implements OnInit {
  @Input() contacts!: Contact[]
  @Output() removeContact= new EventEmitter<string>()

  constructor() {}

  ngOnInit(): void {}
}
