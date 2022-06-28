import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { Contact } from "src/app/model/contact"

import { ContactService } from "src/app/service/contact.service"

@Component({
  selector: "contact-edit-page",
  templateUrl: "./contact-edit-page.component.html",
  styleUrls: ["./contact-edit-page.component.scss"],
})
export class ContactEditPageComponent implements OnInit {
  contact!: Contact
  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      if (data["contact"]) this.contact = data["contact"]
      else this.contact = this.contactService.getEmptyContact()
    })
  }

  onSave() {
    this.contactService.saveContact(this.contact)
    this.router.navigateByUrl("/contacts")
  }
}
