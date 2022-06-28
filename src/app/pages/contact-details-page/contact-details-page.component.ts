import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Contact } from 'src/app/model/contact'

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {
  contact!:Contact

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data=>{
      this.contact = data['contact']
    })
  }

}
