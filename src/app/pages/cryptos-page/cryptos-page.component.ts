import { Component, OnInit} from '@angular/core';
import { CryptosService } from 'src/app/services/cryptos.service';
import { CryptoItem } from 'src/app/shared/models/cryptos';

@Component({
  selector: 'app-cryptos-page',
  templateUrl: './cryptos-page.component.html',
  styleUrls: ['../../../assets/styles/pages/cryptos-page.component.scss']
})
export class CryptosPageComponent implements OnInit {
 
  cryptos: CryptoItem[] = [];

  constructor(private cryptosService: CryptosService) { }

  ngOnInit(): void {
    this.cryptosService.getCryptos();

    this.cryptosService.getCryptosList().subscribe(cryptosList => {
      this.cryptos = cryptosList;
    })
  
  }
}
