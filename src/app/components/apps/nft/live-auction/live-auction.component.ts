import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkNftCardComponent } from '../../../../@spk/reusable-dashboard/spk-nft-card/spk-nft-card.component';
import { CommonModule } from '@angular/common';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
    selector: 'app-live-auction',
    imports: [SharedModule, NgbModule, SpkNftCardComponent, CommonModule, SpkDropdownsComponent],
    templateUrl: './live-auction.component.html',
    styleUrl: './live-auction.component.scss'
})
export class LiveAuctionComponent {
  nftItems = [
    {
      title: 'CryptoCanvas',
      creator: 'PixelCraftPro',
      bgColor:'secondary',
      topBid: '2.78',
      imgSrc: './assets/images/nft-images/3.jpg',
      timeLeft: '04hrs : 24m : 38s',
    },
    {
      title: 'Melodic Muses',
      creator: 'CraftPixelWorks',
      bgColor:'secondary',
      topBid: '1.65',
      imgSrc: './assets/images/nft-images/2.jpg',
      timeLeft: '04hrs : 24m : 38s'
    },
    {
      title: 'Rhythm Realms',
      creator: 'CraftedPixels',
      bgColor:'secondary',
      topBid: '1.85',
      imgSrc: './assets/images/nft-images/5.jpg',
      timeLeft: '04hrs : 24m : 38s'
    },
    {
      title: 'Ethereal Echoes',
      creator: 'PixelPioneer',
      bgColor:'secondary',
      topBid: '1.86',
      imgSrc: './assets/images/nft-images/4.jpg',
      timeLeft: '04hrs : 24m : 38s'
    },
    {
      title: 'Sonic Journeys',
      creator: 'PixelCraftPro',
      bgColor:'secondary',
      topBid: '2.64',
      imgSrc: './assets/images/nft-images/5.jpg',
      timeLeft: '04hrs : 24m : 38s'
    },
    {
      title: 'Oceanic Wonders',
      creator: 'ArtfulPixels',
      bgColor:'secondary',
      topBid: '3.66',
      imgSrc: './assets/images/nft-images/6.jpg',
      timeLeft: '04hrs : 24m : 38s'
    },
    {
      title: 'Nebula Dreams',
      creator: 'CodeCrafted',
      bgColor:'secondary',
      topBid: '1.45',
      imgSrc: './assets/images/nft-images/7.jpg',
      timeLeft: '04hrs : 24m : 38s'
    },
    {
      title: 'Prismatic Drift',
      creator: 'TechArtistry',
      bgColor:'secondary',
      topBid: '7.45',
      imgSrc: './assets/images/nft-images/8.jpg',
      timeLeft: '04hrs : 24m : 38s'
    },
  ];

  nftUsers = [
    {
      name: 'Joseph Smith',
      username: '@josephsmith',
      ethAmount: '+18.93ETH',
      nfts: '22 NFT\'s',
      image: './assets/images/nft-images/2.jpg'
    },
    {
      name: 'Elisha Sean',
      username: '@elishasean',
      ethAmount: '+12.45ETH',
      nfts: '17 NFT\'s',
      image: './assets/images/nft-images/18.jpg'
    },
    {
      name: 'Jack Miller',
      username: '@jackmiller',
      ethAmount: '+11.25ETH',
      nfts: '15 NFT\'s',
      image: './assets/images/nft-images/8.jpg'
    },
    {
      name: 'Julia Camo',
      username: '@juliacamo',
      ethAmount: '+10.48ETH',
      nfts: '14 NFT\'s',
      image: './assets/images/nft-images/11.jpg'
    },
    {
      name: 'Charles Achilles',
      username: '@charlesachilles',
      ethAmount: '+9.58ETH',
      nfts: '12 NFT\'s',
      image: './assets/images/nft-images/17.jpg'
    },
    {
      name: 'Amanda Nanes',
      username: 'amandananes@',
      ethAmount: '+7.67ETH',
      nfts: '11 NFT\'s',
      image: './assets/images/nft-images/31.png'
    }
  ];


  transactions = [
    {
      itemName: 'DreamSpace',
      imgSrc: './assets/images/nft-images/31.png',
      timeAgo: '24 mins ago',
      action: 'Purchased from you by',
      buyer: 'Mitchell',
      amount: '0.57ETH',
      amountClass: 'text-success'
    },
    {
      itemName: 'DreamSpace',
      imgSrc: './assets/images/nft-images/25.png',
      timeAgo: '16 mins ago',
      action: 'You started following',
      buyer: 'mark zensberg',
      amount: '',
      amountClass: ''
    },
    {
      itemName: 'Neo Nebulae',
      imgSrc: './assets/images/nft-images/21.png',
      timeAgo: '5 mins ago',
      action: 'Showed interest in purchasing',
      buyer: 'NeoNebulae',
      amount: '',
      amountClass: 'text-warning'
    },
    {
      itemName: 'Neo Nebulae',
      imgSrc: './assets/images/nft-images/26.png',
      timeAgo: '16 mins ago',
      action: 'Purchased from',
      buyer: 'CyberCanvas',
      amount: '1.345ETH',
      amountClass: 'text-pink'
    }
  ];
}
