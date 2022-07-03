import { Injectable } from "@angular/core"
import { BehaviorSubject, lastValueFrom } from "rxjs"
import { User } from "../model/user"
import { UserService } from "./user.service"

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private _loggedInUser$ = new BehaviorSubject({})
  public loggedInUser$ = this._loggedInUser$.asObservable()

  constructor(private userService: UserService) {}

  public async login(credentails: { name: string }) {
    const user = await lastValueFrom(
      this.userService.getUserByName(credentails)
    )
    if (user) {
      this._loggedInUser$.next(user)
      sessionStorage.setItem("loggedInUser", JSON.stringify(user))
    }
  }
}
