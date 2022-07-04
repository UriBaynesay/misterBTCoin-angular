import { Component, OnInit } from "@angular/core"
import { NgForm } from "@angular/forms"
import { Router } from "@angular/router"
import { lastValueFrom } from "rxjs"
import { AuthService } from "src/app/service/auth.service"
import { UserService } from "src/app/service/user.service"

@Component({
  selector: "signup-page",
  templateUrl: "./signup-page.component.html",
  styleUrls: ["./signup-page.component.scss"],
})
export class SignupPageComponent implements OnInit {
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async onSignup(form: NgForm) {
    const newUser = await lastValueFrom(this.userService.signup(form.value))
    if (!newUser) return
    this.authService.login({ name: newUser.name })
    this.router.navigateByUrl("/")
  }
}
