import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SpkApexchartsComponent } from '../../../@spk/spk-apexcharts/apexcharts.component';
import { RevenueOverviewsData } from '../../../shared/data/dashboard_chartData/ecommercecharts.data';
import { SpkNftCardComponent } from '../../../@spk/reusable-dashboard/spk-nft-card/spk-nft-card.component';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import Swiper from 'swiper'
import { register } from 'swiper/element';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
Swiper.use([Autoplay, Navigation, Pagination]);
register();
@Component({
    selector: 'app-nft',
    imports: [RouterModule, NgApexchartsModule, NgbModule, CommonModule, SpkApexchartsComponent, SpkNftCardComponent, SpkDropdownsComponent, SpkReusableTablesComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './nft.component.html',
    styleUrls: ['./nft.component.scss']
})
export class NftComponent {
  public chartOptions = RevenueOverviewsData;
 @Input() avatarIcon:boolean = false;
 @Input() Image:boolean = false;


 @ViewChild('swiperContainer') swiperContainer!: ElementRef;

 ngAfterViewInit(): void {
   const swiperEl = this.swiperContainer.nativeElement;
 
   Object.assign(swiperEl, {
     loop: true,
     slidesPerView: 1,
     spaceBetween: 30,
     breakpoints: {
       320: {
         slidesPerView: 1,
         spaceBetween: 20,
     },
         500: {
             slidesPerView: 1,
             spaceBetween: 20,
         },
         768: {
             slidesPerView:1,
             spaceBetween: 20,
         },
         1024: {
             slidesPerView: 1,
             spaceBetween: 20,
         },
         1200: {
             slidesPerView: 1,
             spaceBetween: 20,
         },
         1400: {
             slidesPerView:1,
             spaceBetween: 20,
         },
         1600: {
             slidesPerView: 1,
             spaceBetween: 20,
         },
         1800: {
             slidesPerView: 1,
             spaceBetween: 20,
         },
     },
   });
 }

 constructor(private sanitizer : DomSanitizer) { }
  
 sanitizeIcon(svg: string): SafeHtml {
   return this.sanitizer.bypassSecurityTrustHtml(svg);
 }

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
  ];

  cardsData = [
    {
      title: 'Total Assets',
      value: '12,432',
      percentage: '2.5%',
      status: 'Increased',
      icon: 'primary',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="152 224 104 152 76.36 193.46 60 168 24 224 152 224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M192,224h8a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>',
    },
    {
      title: 'Total Value',
      value: '$9,432',
      percentage: '2.5%',
      status: 'Decreased',
      icon: 'secondary',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="128" y1="24" x2="128" y2="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="208" x2="128" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M184,88a40,40,0,0,0-40-40H112a40,40,0,0,0,0,80h40a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>',
    },
    {
      title: 'Total Sales',
      value: '3,132',
      percentage: '2.5%',
      status: 'Increased',
      icon: 'success',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M54.46,201.54c-9.2-9.2-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128S214.18,150,209.32,161.69c-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68C83,204.64,63.66,210.74,54.46,201.54Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="96" cy="96" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="160" cy="160" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="88" y1="168" x2="168" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>',
    },
    {
      title: 'Total Revenue',
      value: '$2,561.09',
      percentage: '2.5%',
      status: 'Increased',
      icon: 'info',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M40,56V184a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V80a8,8,0,0,0-8-8H56A16,16,0,0,1,40,56h0A16,16,0,0,1,56,40H192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="180" cy="132" r="12"/></svg>',
    },
  ];

  CreatorsColumn = [
    {
      header:' Creator Name '
    },
    {
      header:'Total NFTs'
    },
    {
      header:'Followers'
    },
    {
      header:'Total Sales'
    },
  ]
  
  CreatorsData = [
    {
      username: 'JohnDoe',
      avatar: './assets/images/faces/1.jpg',
      handle: 'johndoe123',
      score: 100,
      value: 10000,
      ethAmount: '500 ETH',
      changePercentage: '4.25%',
      avatarIcon:false,
      Image:true
    },
    {
      username: 'JaneSmith',
      avatar: './assets/images/faces/2.jpg',
      handle: 'jane_smith',
      score: 80,
      value: 8500,
      ethAmount: '400 ETH',
      changePercentage: '-0.84%',
      avatarIcon:false,
      Image:true
    },
    {
      username: 'CryptoArt123',
      avatar: './assets/images/faces/3.jpg',
      handle: 'crypto_123',
      score: 70,
      value: 7200,
      ethAmount: '300 ETH',
      changePercentage: '1.66%',
      avatarIcon:true,
      Image:false
    },
    {
      username: 'ArtisanX',
      avatar: './assets/images/faces/10.jpg',
      handle: 'artisan_x',
      score: 60,
      value: 6800,
      ethAmount: '250 ETH',
      changePercentage: '12.85%',
      avatarIcon:false,
      Image:true
    },
    {
      username: 'ArtisanX',
      avatar: './assets/images/faces/12.jpg',
      handle: 'artisan_x',
      score: 60,
      value: 5500,
      ethAmount: '250 ETH',
      changePercentage: '-1.37%',
      avatarIcon:false,
      Image:true
    },
  ];
 
  NftColumn = [
    {
      header :'Collection'
    },
    {
      header:'Rank'
    },
    {
      header:'Volume'
    },
    {
      header:'24h %'
    },
    {
      header:'7d %'
    },
    {
      header:'Floor Price'
    },
    {
      header:'Items'
    },
  ]

  NftData = [
    {
      name: 'Starter Sense NFT',
      avatar: './assets/images/nft-images/09.jpg',
      creator: '@irukasensei229',
      rank: 1,
      price: '2.56ETH',
      priceChange: '15.2%',
      volumeChange: '3.1%',
      lastSale: '2.31ETH',
      views:' 12.4K',
      direction:'up',
      direction1:'up',
      textColor:'success',
      textColor1:'success',
    },
    {
      name: 'Lorem Kekkei',
      avatar: './assets/images/nft-images/10.jpg',
      creator: '@clansound209',
      rank: 2,
      price: '1.25ETH',
      priceChange: '3.7%',
      volumeChange: '-0.5%',
      lastSale: '0.25ETH',
      views: '10.1K',
      direction:'up',
      direction1:'down',
      textColor:'success',
      textColor1:'danger',
    },
    {
      name: 'NFT Uchiha',
      avatar: './assets/images/nft-images/11.jpg',
      creator: '@sasukeuhi990',
      rank: 3,
      price: '2,092ETH',
      priceChange: '-23.1%',
      volumeChange: '9.12%',
      lastSale: '2,000ETH',
      views: '52.7K',
      direction:'down',
      direction1:'up',
      textColor:'danger',
      textColor1:'success',
    },
    {
      name: 'Lorem Ipsum Uch',
      avatar: './assets/images/nft-images/12.jpg',
      creator: '@kakashi092',
      rank: 4,
      price: '36.25ETH',
      priceChange: '-5.2%',
      volumeChange: '-4.1%',
      lastSale: '30.12ETH',
      views: '31.4K',
      direction:'down',
      direction1:'down',
      textColor:'danger',
      textColor1:'danger',
    },
    {
      name: 'Ivan Shomer Har',
      avatar: './assets/images/nft-images/13.jpg',
      creator: '@narutouze025',
      rank: 5,
      price: '12.52ETH',
      priceChange: '7.0%',
      volumeChange: '12.5%',
      lastSale: '12.50ETH',
      views: '121.5K',
      direction:'up',
      direction1:'up',
      textColor:'success',
      textColor1:'success',
    },
  ];
}

