import { Injectable } from '@angular/core';
import { User } from '../model/user'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user = {
    name: 'Ochoa Hyde',
    coins: 100,
    moves: [],
  };

  get getUser():User{
    return this.user as User
  }
}
