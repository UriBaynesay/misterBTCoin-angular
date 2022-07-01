import { Component, OnDestroy, OnInit } from "@angular/core"
import { Subscription } from "rxjs"
import { User } from "src/app/model/user"
import { AuthService } from "src/app/service/auth.service"
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
  userSubscription!: Subscription
  btcRateSubscription!: Subscription

  constructor(
    private authService:AuthService,
    private bitcoinService: BitcoinService
  ) {}

  ngOnInit(): void {
    this.userSubscription=this.authService.loggedInUser$.subscribe(user=>{
      if (user !== {}) this.user = user as User
    })
    setTimeout(()=>{
      this.authService.login({ name: "Ochoa Hyde" })
    },2000)
    
    this.btcRateSubscription = this.bitcoinService
      .getRate()
      .subscribe((rate) => {
        this.btcRate = rate
      })
  }

  ngOnDestroy(): void {
    this.btcRateSubscription.unsubscribe()
    this.userSubscription.unsubscribe()
  }
}
