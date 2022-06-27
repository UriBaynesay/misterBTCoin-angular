import { Component, OnDestroy, OnInit } from "@angular/core"
import { Subscription } from "rxjs"
import { User } from "src/app/model/user"
import { BitcoinService } from "src/app/service/bitcoin.service"
import { UserService } from "src/app/service/user.service"

@Component({
  selector: "homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"],
})
export class HomepageComponent implements OnInit, OnDestroy {
  user!: User
  btcRate!: number
  subscription!: Subscription

  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.getUser
    this.subscription = this.bitcoinService.getRate().subscribe((rate) => {
      this.btcRate = rate
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
