import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user = {
    name: 'Ochoa Hyde',
    coins: 100,
    moves: [],
  };

  get getUser(){
    return this.user
  }
}
