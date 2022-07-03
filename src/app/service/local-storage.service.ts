import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  constructor() {}

  public save(type: string, value: any) {
    localStorage.setItem(type, JSON.stringify(value))
  }

  public get(type: string) {
    const value = localStorage.getItem(type)
    if (value) return JSON.parse(value)
    return null
  }
}
