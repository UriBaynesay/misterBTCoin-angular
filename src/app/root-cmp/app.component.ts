import { Component} from '@angular/core';

import { BitcoinService } from '../service/bitcoin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{
  title = 'misterBITcoin';
  constructor(private BitcoinServe: BitcoinService) {}


}
