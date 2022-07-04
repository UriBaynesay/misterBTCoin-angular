import { Component, EventEmitter, Output } from "@angular/core"

@Component({
  selector: "contacts-filter",
  templateUrl: "./contacts-filter.component.html",
  styleUrls: ["./contacts-filter.component.scss"],
})
export class ContactsFilterComponent  {
  filterBy = { name: "" }
  @Output() onFilter=new EventEmitter<{name:string}>()

  constructor() {}

  public onChange=()=>{
    this.onFilter.emit(this.filterBy)
  }

}
