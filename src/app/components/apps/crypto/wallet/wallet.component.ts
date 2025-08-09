import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
    selector: 'app-wallet',
    imports: [NgbDropdownModule, SpkDropdownsComponent],
    templateUrl: './wallet.component.html',
    styleUrl: './wallet.component.scss'
})
export class WalletComponent {
  WalletData = [
    {
      walletType: 'BTC Wallet Address',
      walletAddress: 'afb0dc8bc84625587b85415c86ef43ed8df',
      qrImage: './assets/images/media/media-68.png',
      receivedAmount: '6.2834',
      receivedCurrency: 'BTC',
      sentAmount: '2.7382',
      sentCurrency: 'BTC',
      walletBalance: '12.5232',
      walletBalanceCurrency: 'BTC',
    },
    {
      walletType: 'ETH Wallet Address',
      walletAddress: 'afb0dc8bc84625587b85415c86ef43ed8df',
      qrImage: './assets/images/media/media-68.png',
      receivedAmount: '6.2834',
      receivedCurrency: 'ETH',
      sentAmount: '2.7382',
      sentCurrency: 'ETH',
      walletBalance: '12.5232',
      walletBalanceCurrency: 'ETH',
    },
    {
      walletType: 'LTC Wallet Address',
      walletAddress: 'afb0dc8bc84625587b85415c86ef43ed8df',
      qrImage: './assets/images/media/media-68.png',
      receivedAmount: '6.2834',
      receivedCurrency: 'LTC',
      sentAmount: '2.7382',
      sentCurrency: 'LTC',
      walletBalance: '12.5232',
      walletBalanceCurrency: 'LTC',
    },
    {
      walletType: 'XRP Wallet Address',
      walletAddress: 'afb0dc8bc84625587b85415c86ef43ed8df',
      qrImage: './assets/images/media/media-68.png',
      receivedAmount: '6.2834',
      receivedCurrency: 'XRP',
      sentAmount: '2.7382',
      sentCurrency: 'XRP',
      walletBalance: '12.5232',
      walletBalanceCurrency: 'XRP',
    },
  ];

  Wallet = [
    {
      walletType: 'BTC WALLET',
      availableBalance: '0.05437 BTC',
      balanceCurrency: 'BTC',
      usdBalance: '$1646.94 USD',
      profitToday: '-29.76%',
      profitStatus: 'text-danger',
      profitDirection: 'ti ti-trending-down',
      avatarUrl: './assets/images/crypto-currencies/square-color/Bitcoin.svg',
    },
    {
      walletType: 'ETH WALLET',
      availableBalance: '2.3892 ETH',
      balanceCurrency: 'ETH',
      usdBalance: '$4581.24 USD',
      profitToday: '+9.57%',
      profitStatus: 'text-success',
      profitDirection: 'ti ti-trending-up',
      avatarUrl: './assets/images/crypto-currencies/square-color/Ethereum.svg',
    },
    {
      walletType: 'XRP WALLET',
      availableBalance: '234.943 XRP',
      balanceCurrency: 'XRP',
      usdBalance: '$192.29 USD',
      profitToday: '-12.67%',
      profitStatus: 'text-danger',
      profitDirection: 'ti ti-trending-down',
      avatarUrl: './assets/images/crypto-currencies/square-color/Ripple.svg',
    },
  ];
  
}
