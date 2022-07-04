import { Injectable } from "@angular/core"
import { BehaviorSubject, lastValueFrom, of } from "rxjs"
import { User } from "../model/user"
import { LocalStorageService } from "./local-storage.service"

const LOCAL_STORAGE_KEY = "users"
setLocalStorage()

@Injectable({
  providedIn: "root",
})
export class UserService {
  private _users$ = new BehaviorSubject([])
  users$ = this._users$.asObservable()

  constructor(private localStorageService: LocalStorageService) {}

  public query() {
    const users = this.localStorageService.get(LOCAL_STORAGE_KEY)
    this._users$.next(users)
    return this.users$
  }

  public getUserByName(credentails: { name: string }) {
    const users = this.localStorageService.get(LOCAL_STORAGE_KEY)
    const user = users.find((user: User) => user.name === credentails.name)
    return of(user)
  }

  public getLoggedInUser() {
    const user = sessionStorage.getItem("loggedInUser")
    if (!user) return {}
    return JSON.parse(user)
  }

  public signup(credentails: { name: string }) {
    const users = this.localStorageService.get(LOCAL_STORAGE_KEY)
    if (users.find((user: User) => user.name === credentails.name)) return of(null)

    const newUser = this.getEmptyUser()
    newUser.name = credentails.name
    users.push(newUser)
    this.localStorageService.save(LOCAL_STORAGE_KEY, users)
    this._users$.next(users)
    return of(newUser)
  }
  public getEmptyUser() {
    return {
      name: "",
      coins: 100,
      moves: [],
    }
  }
}

function setLocalStorage() {
  const localStorageService = new LocalStorageService()
  localStorageService.save(LOCAL_STORAGE_KEY, [
    {
      name: "Ochoa Hyde",
      coins: 100,
      moves: [],
    },
  ])
}
