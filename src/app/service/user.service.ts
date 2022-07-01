import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"
import { User } from "../model/user"

@Injectable({
  providedIn: "root",
})
export class UserService {
  private user = {
    name: "Ochoa Hyde",
    coins: 100,
    moves: [],
  }

  getUser$(credentails: { name: string}): BehaviorSubject<User|object>{
    const user$=new BehaviorSubject({})
    if(this.user.name===credentails.name) user$.next(this.user)
    return user$
  }

  getLoggedInUser(){
    const user = sessionStorage.getItem('loggedInUser')
    if(!user) return {}
    return JSON.parse(user)
  }
}
