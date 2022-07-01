import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"
import { User } from "../model/user"
import { UserService } from "./user.service"

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private _loggedInUser$ = new BehaviorSubject({})
  public loggedInUser$ = this._loggedInUser$.asObservable()

  constructor(private userService: UserService) {}

  login(credentails: { name: string }) {
    this.userService.getUser$(credentails).subscribe((user) => {
      if (user !== {}) {
        this._loggedInUser$.next(user)
        sessionStorage.setItem("loggedInUser", JSON.stringify(user))
      }
    })
  }
}
