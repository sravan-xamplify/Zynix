import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
    selector: 'app-wallet-integration',
    imports: [SharedModule, NgbDropdownModule, CommonModule, SpkDropdownsComponent],
    templateUrl: './wallet-integration.component.html',
    styleUrl: './wallet-integration.component.scss'
})
export class WalletIntegrationComponent {

  transactions = [
    {
      type: 'ETH Received',
      iconClass: 'ri-exchange-line',
      badgeClass: 'bg-primary-transparent',
      timeAgo: '24 mins ago',
      amount: '2.1 ETH',
      amountClass: 'text-success',
    },
    {
      type: 'ETH Sent',
      iconClass: 'ri-arrow-right-line',
      badgeClass: 'bg-secondary-transparent',
      timeAgo: '16 mins ago',
      amount: '1.5 ETH',
      amountClass: 'text-danger',
    },
    {
      type: 'NFT Purchase',
      iconClass: 'ri-coin-line',
      badgeClass: 'bg-success-transparent',
      timeAgo: '5 mins ago',
      amount: '$350',
      amountClass: 'text-muted',
    },
    {
      type: 'ETH Withdrawal',
      iconClass: 'ri-arrow-left-line',
      badgeClass: 'bg-info-transparent',
      timeAgo: '2 hours ago',
      amount: '5.0 ETH',
      amountClass: 'text-danger',
    }
  ];
  Network = [
    {
      name: 'Etherium',
      imgSrc: './assets/images/nft-images/34.png',
      bgClass: 'bg-light', 
      ActiveClass:'active'
    },
    {
      name: 'Binance',
      imgSrc: './assets/images/nft-images/33.png',
      bgClass: 'bg-primary-transparent',
       ActiveClass:''
    },
    {
      name: 'Solana',
      imgSrc: './assets/images/nft-images/32.png',
      bgClass: 'bg-primary-transparent',
       ActiveClass:''
    },
    {
      name: 'Tezos',
      imgSrc: './assets/images/nft-images/28.png',
      bgClass: 'bg-primary-transparent',
       ActiveClass:''
    },
    {
      name: 'Avalanche',
      imgSrc: './assets/images/nft-images/30.png',
      bgClass: 'bg-primary-transparent',
       ActiveClass:''
    },
    {
      name: 'Cardano',
      imgSrc: './assets/images/nft-images/29.png',
      bgClass: 'bg-primary-transparent',
       ActiveClass:''
    }
  ];

  wallets = [
    {
      name: 'MetaMask',
      activeCard:'-card',
      imgSrc: './assets/images/nft-images/22.png',
    },
    {
      name: 'Enjin Wallet',
      imgSrc: './assets/images/nft-images/23.png',
      activeCard:'',
    },
    {
      name: 'Trust Wallet',
      imgSrc: './assets/images/nft-images/20.png',
      activeCard:'',
    },
    {
      name: 'Coinbase Wallet',
      imgSrc: './assets/images/nft-images/24.png',
      activeCard:'',
    },
    {
      name: 'Lido',
      imgSrc: './assets/images/nft-images/19.png',
      activeCard:'',
    },
    {
      name: 'Huobi Wallet',
      imgSrc: './assets/images/nft-images/27.png',
      activeCard:'',
    }
  ];
}
