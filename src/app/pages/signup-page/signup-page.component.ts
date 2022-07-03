import { Component, OnInit } from "@angular/core"
import { NgForm } from "@angular/forms"

@Component({
  selector: "signup-page",
  templateUrl: "./signup-page.component.html",
  styleUrls: ["./signup-page.component.scss"],
})
export class SignupPageComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  onSignup(form: NgForm) {
    
  }
}
