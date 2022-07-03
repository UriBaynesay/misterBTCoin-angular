import { Component, OnInit } from "@angular/core"
import { NgForm } from "@angular/forms"
import { Router } from "@angular/router"
import { AuthService } from "src/app/service/auth.service"

@Component({
  selector: "login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent implements OnInit {
  constructor(private authService:AuthService,private router:Router) {}

  ngOnInit(): void {}

  onLogin(form: NgForm) {
    const credentials=form.value
    this.authService.login(credentials)
    this.router.navigateByUrl('/')
  }
}
