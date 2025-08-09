import { Component } from '@angular/core';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkNftCardComponent } from '../../../../@spk/reusable-dashboard/spk-nft-card/spk-nft-card.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
    selector: 'app-market-place',
    imports: [SharedModule, NgbNavModule, NgbModule, SpkNftCardComponent, SpkDropdownsComponent],
    templateUrl: './market-place.component.html',
    styleUrl: './market-place.component.scss'
})
export class MarketPlaceComponent {
  nftItems = [
    {
      title: 'CryptoCanvas',
      bgColor:'secondary ',
      creator: 'PixelCraftPro',
      topBid: '2.78',
      imgSrc: './assets/images/nft-images/3.jpg',
      timeLeft: '04hrs : 24m : 38s',
    },
    {
      title: 'Melodic Muses',
      bgColor:'secondary ',
      creator: 'CraftPixelWorks',
      topBid: '1.65',
      imgSrc: './assets/images/nft-images/2.jpg',
      timeLeft: '04hrs : 24m : 38s'
    },
    {
      title: 'Rhythm Realms',
      bgColor:'secondary ',
      creator: 'CraftedPixels',
      topBid: '1.85',
      imgSrc: './assets/images/nft-images/5.jpg',
      timeLeft: '04hrs : 24m : 38s'
    },
    {
      title: 'Ethereal Echoes',
      bgColor:'secondary ',
      creator: 'PixelPioneer',
      topBid: '1.86',
      imgSrc: './assets/images/nft-images/4.jpg',
      timeLeft: '04hrs : 24m : 38s'
    },
    {
      title: 'Sonic Journeys',
      bgColor:'secondary ',
      creator: 'PixelCraftPro',
      topBid: '2.64',
      imgSrc: './assets/images/nft-images/5.jpg',
      timeLeft: '04hrs : 24m : 38s'
    },
    {
      title: 'Oceanic Wonders',
      bgColor:'secondary ',
      creator: 'ArtfulPixels',
      topBid: '3.66',
      imgSrc: './assets/images/nft-images/6.jpg',
      timeLeft: '04hrs : 24m : 38s'
    },
    {
      title: 'Nebula Dreams',
      bgColor:'secondary ',
      creator: 'CodeCrafted',
      topBid: '1.45',
      imgSrc: './assets/images/nft-images/7.jpg',
      timeLeft: '04hrs : 24m : 38s'
    },
    {
      title: 'Prismatic Drift',
      bgColor:'secondary ',
      creator: 'TechArtistry',
      topBid: '7.45',
      imgSrc: './assets/images/nft-images/8.jpg',
      timeLeft: '04hrs : 24m : 38s'
    },
    {
      title: 'Bit Bubbles',
      bgColor:'secondary ',
      creator: 'CraftedPixelPro',
      topBid: '2.54',
      imgSrc: './assets/images/nft-images/9.jpg',
      timeLeft: '04hrs : 24m : 38s'
    },
    {
      title: 'Celestial Beasts',
      bgColor:'secondary ',
      creator: 'PixelCraftElite',
      topBid: '3.53',
      imgSrc: './assets/images/nft-images/10.jpg',
      timeLeft: '04hrs : 24m : 38s'
    },
  ];

  nftItemsArt = [
    {
      imgSrc: './assets/images/nft-images/8.jpg',
        bgColor:'secondary ',
      timeLeft: '04hrs : 24m : 38s',
      title: 'Earthly Essence',
      creator: 'PixelCraftPro',
      topBid: '1.54',
    },
    {
      imgSrc: './assets/images/nft-images/5.jpg',
        bgColor:'secondary ',
      timeLeft: '04hrs : 24m : 38s',
      title: 'Code Canvas',
      creator: 'PixelCraftPro',
      topBid: '0.56',
    },
    {
      imgSrc: './assets/images/nft-images/2.jpg',
        bgColor:'secondary ',
      timeLeft: '04hrs : 24m : 38s',
      title: 'Abstract Wonders',
      creator: 'PixelCraftPro',
      topBid: '9.56',
    },
  ];

  nftItemsArt1 = [
    {
      title: 'Bit Bubbles',
      bgColor:'secondary ',
      creator: 'CraftedPixelPro',
      topBid: '2.54',
      imgSrc: './assets/images/nft-images/9.jpg',
      timeLeft: '04hrs : 24m : 38s'
    },
    {
      title: 'Ethereal Echoes',
      bgColor:'secondary ',
      creator: 'PixelPioneer',
      topBid: '1.86',
      imgSrc: './assets/images/nft-images/4.jpg',
      timeLeft: '04hrs : 24m : 38s'
    },
  ];
  
}
