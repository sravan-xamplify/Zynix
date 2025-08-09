import {  Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import {  NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkApexchartsComponent } from '../../../@spk/spk-apexcharts/apexcharts.component';
import { AssetsChartData,  PortfolioChartData,  PortfolioChartData1,  PortfolioChartData2,  PortfolioChartData3,  PortfolioChartData4,  PortfolioChartData5,  SparkData1,  SparkData2,  SparkData3,  SparkData4,  SparkData5,  SparkData6,  SparkData7,  StatiscticChartData } from '../../../shared/data/dashboard_chartData/cryptocharts.data';
import Swiper from 'swiper'
import { register } from 'swiper/element';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SpkSchoolCardComponent } from '../../../@spk/reusable-dashboard/spk-school-card/spk-school-card.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { NgSelectModule } from '@ng-select/ng-select';
Swiper.use([Autoplay, Navigation, Pagination]);
register();

@Component({
    selector: 'app-crypto',
    imports: [RouterModule, SharedModule, NgApexchartsModule, NgbModule, SpkApexchartsComponent, CommonModule, SpkSchoolCardComponent, SpkDropdownsComponent, NgSelectModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './crypto.component.html',
    styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent  {
  public chartOptions = StatiscticChartData;
  public chartOptions1 = AssetsChartData;
  public chartOptions2 = SparkData1;
  public chartOptions3 = SparkData2;
  public chartOptions4 = SparkData3;
  public chartOptions5 = SparkData4;
  public chartOptions6 = SparkData4;
  public chartOptions7 = SparkData5;
  public chartOptions8 = SparkData6;
  public chartOptions9 = SparkData7;

	@ViewChild('swiperContainer') swiperContainer!: ElementRef;

	ngAfterViewInit(): void {
		const swiperEl = this.swiperContainer.nativeElement;
	
		Object.assign(swiperEl, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: {
          delay: 1000,
          disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
      },
          500: {
              slidesPerView: 2,
              spaceBetween: 20,
          },
          768: {
              slidesPerView: 3,
              spaceBetween: 20,
          },
          1024: {
              slidesPerView: 3,
              spaceBetween: 20,
          },
          1200: {
              slidesPerView: 3,
              spaceBetween: 20,
          },
          1400: {
              slidesPerView: 4,
              spaceBetween: 20,
          },
          1600: {
              slidesPerView: 5,
              spaceBetween: 20,
          },
          1800: {
              slidesPerView: 5,
              spaceBetween: 20,
          },
      },
	  });
	}
	thumbsSwiper: any;
	setThumbsSwiper(swiper: any) {
		this.thumbsSwiper = swiper;
	  }

  swiperData = [
    {
      icon: './assets/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg',
      symbol: 'BTC',
      name: 'Bitcoin',
      amount: '3.4563 BTC',
      change: 0.57,
      marketCapId: 'btc-marketcap',
      chartOptions:SparkData1
    },
    {
      icon: './assets/images/crypto-currencies/crypto-icons/binance-usd-busd-logo.svg',
      symbol: 'BNB',
      name: 'Binance',
      amount: '1,533 BNB',
      change: -0.12,
      marketCapId: 'bnb-marketcap',
      chartOptions:SparkData2
    },
    {
      icon: './assets/images/crypto-currencies/crypto-icons/cardano-ada-logo.svg',
      symbol: 'ADA',
      name: 'Cardano',
      amount: '4,125 ADA',
      change: 0.23,
      marketCapId: 'ada-marketcap',
      chartOptions:SparkData3
    },
    {
      icon: './assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg',
      symbol: 'ETH',
      name: 'Ethereum',
      amount: '5.327 ETH',
      change: 0.23,
      marketCapId: 'eth-marketcap',
      chartOptions:SparkData4
    },
    {
      icon: './assets/images/crypto-currencies/crypto-icons/tether-usdt-logo.svg',
      symbol: 'USDT',
      name: 'Tether',
      amount: '5.327 USDT',
      change: -0.27,
      marketCapId: 'usdt-marketcap',
      chartOptions:SparkData5
    },
    {
      icon: './assets/images/crypto-currencies/crypto-icons/xrp-xrp-logo.svg',
      symbol: 'XRP',
      name: 'Ripple',
      amount: '833 XRP',
      change: 0.34,
      marketCapId: 'xrp-marketcap',
      chartOptions:SparkData6
    },
    {
      icon: './assets/images/crypto-currencies/crypto-icons/solana-sol-logo.svg',
      symbol: 'SOL',
      name: 'Solana',
      amount: '1.244 SOL',
      change: -0.045,
      marketCapId: 'sol-marketcap',
      chartOptions:SparkData7
    }
  ];

  cryptoColumn = [
    {
      header :'#'
    },
    {
      header :'Coin'
    },
    {
      header :'Last Price'
    },
    {
      header :'Price Graph'
    },
    {
      header :'24h %'
    },
    {
      header :'Market Cap'
    },
    {
      header :'Actions'
    },
  ]
  Cryptocurrency = [
    {
      id: 1,
      name: 'Bitcoin - BTC',
      logo: './assets/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg',
      price: '$34,283.53',
      changeId: 'bitcoin-change',
      percentageChange: '39.23%',
      marketCap: '$669,649,033,571',
      chartOptions:PortfolioChartData
    },
    {
      id: 2,
      name: 'Ethereum - ETH',
      logo: './assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg',
      price: '$1,800.81',
      changeId: 'ethereum-change',
      percentageChange: '58.63%',
      marketCap: '$216,466,869,907',
      chartOptions:PortfolioChartData1
    },
    {
      id: 3,
      name: 'Tether - USDT',
      logo: './assets/images/crypto-currencies/crypto-icons/tether-usdt-logo.svg',
      price: '$1.00',
      changeId: 'tether-change',
      percentageChange: '49.30%',
      marketCap: '$84,641,938,780',
      chartOptions:PortfolioChartData2
    },
    {
      id: 4,
      name: 'Solana - SOL',
      logo: './assets/images/crypto-currencies/crypto-icons/solana-sol-logo.svg',
      price: '$35.97',
      changeId: 'solana-change',
      percentageChange: '144.58%',
      marketCap: '$15,083,616,607',
      chartOptions:PortfolioChartData3
    },
    {
      id: 5,
      name: 'Cardano - ADA',
      logo: './assets/images/crypto-currencies/crypto-icons/cardano-ada-logo.svg',
      price: '$0.3008',
      changeId: 'cardano-change',
      percentageChange: '51.15%',
      marketCap: '$10,600,249,889',
      chartOptions:PortfolioChartData4
    },
    {
      id: 6,
      name: 'Binance - BNB',
      logo: './assets/images/crypto-currencies/crypto-icons/binance-usd-busd-logo.svg',
      price: '$227.36',
      changeId: 'binance-change',
      percentageChange: '25.85%',
      marketCap: '$34,488,924,548',
      chartOptions:PortfolioChartData5
    }
  ];

  marketCapList = [
    {
      name: 'Bitcoin',
      symbol: 'BTC |  $15 Billion',
      price: '$18,907.01',
      changeValue: '+1,308.90  |  2.98%',
      changeClass: 'success',
      trendIcon: 'ti ti-arrow-narrow-up',
      bgClass: 'primary-transparent svg-primary avatar-rounded',
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 128 128">
                  <path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z"></path>
                  <path fill="#fff" d="M94.3 71.4c-.5-3.6-2.3-6.4-5.4-8.2-1.4-.8-3.1-1.4-4.7-2.1.2-.1.3-.3.4-.3 7.9-4.1 7.2-16.3 1.5-20.5-2.3-1.7-4.9-2.8-7.7-3.4-2-.4-3.9-.7-6-1.1 0-3.5.1-8.5.1-12.4H65c0 3.8-.1 8.7-.1 12.1H59c0-3.5 0-8.3.1-12.1h-7.4c0 4-.1 8.8-.1 12.3-5.1 0-10-.1-15-.1 0 2.7 0 5.3-.1 7.9h3c.9 0 1.9 0 2.8.1 2.6.2 3.9 1.6 3.9 4.2l-.3 31.9c0 2.3-1 3.3-3.3 3.3h-5c-.5 3-1 5.9-1.6 8.9 5 .1 10 .1 15 .2 0 3.8 0 8.7-.1 12.7h7.4c0-4 .1-8.7.1-12.5 2.1.1 4 .1 5.9.2 0 3.8-.1 8.4-.1 12.3h7.4c0-4 .1-8.7.1-12.4.3 0 .5-.1.6-.1 3.5-.6 7.2-.9 10.6-1.7 4.5-1.1 8.1-3.7 9.9-8.2 1.7-3.6 2-7.2 1.5-11zM59 44.3c4.6 0 9.1-.4 13.4 1.5 2.8 1.2 4.2 3.5 4 6.3-.2 2.9-1.9 5-4.8 6-4.1 1.3-8.3 1.3-12.7 1.1 0-5 .1-9.8.1-14.9zm16.2 37.1c-4.1 1.8-8.5 1.8-12.8 1.9-1.2 0-2.4-.1-3.8-.1.1-5.5.1-10.9.2-16.4 5.6 0 11.2-.4 16.5 1.9 2.7 1.2 4.3 3.3 4.3 6.4 0 3.1-1.6 5.1-4.4 6.3z"></path>
                </svg>`
    },
    {
      name: 'Ethereum',
      symbol: 'ETH | $11 Billion',
      price: '$15,135.25',
      changeValue: '+1,076.09 | 3.07%',
      changeClass: 'success',
      trendIcon: 'ti ti-arrow-narrow-up',
      bgClass: 'secondary-transparent svg-secondary avatar-rounded',
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 128 128">
                  <path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z"></path>
                  <path fill="#fff" d="M65.2 87.2v22.7l28.1-39.5zM92.3 63.1l-27.1-45v32.7zM65.2 53.3v28l26.9-15.7zM35.8 63.1l27-45v32.7zM62.8 53.3v28L35.9 65.6zM62.8 87.2v22.7L34.7 70.4z"></path>
                </svg>`
    },
    {
      name: 'Dash',
      symbol: 'DASH $23 Billion',
      price: '$15,176.46',
      changeValue: '-1,088.01 | 0.15%',
      changeClass: 'danger',
      textColor: 'muted',
      trendIcon: 'ti ti-arrow-narrow-down',
      bgClass: 'success-transparent svg-success avatar-rounded',
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 128 128">
                  <path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z"></path>
                  <path fill="#fff" d="M20.8 89.3c1.4-4.1 2.7-7.9 4.1-11.8c.1-.4.9-.7 1.3-.7 2.3-.1 4.7 0 7 0H79c1.2 0 1.8-.4 2.1-1.5 2.5-7.5 5.2-15 7.8-22.5.1-.4.2-.8.4-1.4H33.8c1.4-4.2 2.8-8.1 4.1-12 .1-.3.7-.6 1.1-.6 1.4-.1 2.8 0 4.2 0 18.8 0 37.6.1 56.3-.1 5.6-.1 11.6 4.3 9.2 12.5-1.8 6.1-4.1 12.1-6.2 18.2-.7 2.1-1.4 4.1-2.1 6.2-2.6 7.2-7.9 11.6-15.2 13.6-.7.2-1.4.2-2.1.2H22.3c-.4-.1-.8-.1-1.5-.1z"></path>
                </svg>`
    },
    {
      name: 'Golem',
      symbol: 'GLM | $14 Billion',
      price: '$11,576.21',
      changeValue: '+1,0267.08 | 0.03%',
      changeClass: 'success',
      trendIcon: 'ti ti-arrow-narrow-up',
      bgClass: 'warning-transparent svg-warning avatar-rounded',
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 128 128">
                  <path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z"></path>
                  <path fill="#fff" d="M63.8 22.6c3.7-.1 7.2.6 10.2 2.7c1.4.9 2.4.8 3.6-.5c2.4-2.6 5-5 7.5-7.6c.9-.9 1.8-1.5 2.9-.2c1.1 1.1.8 2-.2 2.9-2.6 2.6-5 5.2-7.6 7.8c-1.1 1.1-1.3 1.9-.5 3.3 5.8 10.4 2.9 22.5-8.6 28.1c-1.1.5-2.3.8-3.5 1c-1.4.3-1.9 1-1.9 2.5c.1 3 .1 6 0 8.9c0 1.6.5 2.3 2.1 2.7c6.2 1.5 10.6 5.2 13.3 10.9c2.6 5.5 1.9 15.4-3.8 21.3c-4.8 4.9-13.2 6.9-19.5 4.4c-7.5-3-12.1-9.6-12.2-17.5c-.1-9.6 5.1-16.4 14.3-19c1.4-.4 2.2-1 2.1-2.5c-.1-3.4 0-6.8-.2-10.2c0-.6-1.1-1.4-1.8-1.6c-6-1.6-10.4-5.2-12.9-10.8c-5.6-13 4.3-27.4 16.7-26.6z"></path>
                </svg>`
    },
    {
      name: 'Litecoin',
      symbol: 'LTC | $13 Billion',
      price: '$16,581.81',
      changeValue: '-1,018.05 | 3.80%',
      changeClass: 'danger',
      textColor: 'muted',
      trendIcon: 'ti ti-arrow-narrow-down',
      bgClass: 'info-transparent svg-info avatar-rounded',
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 128 128">
                  <path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z"></path>
                  <path fill="#fff" d="M59.5 87.6l5-19 11.9-4.4 3-11.2-.1-.2-11.7 4.3L76 25.2H52L40.9 66.8l-9.2 3.4-3.1 11.5 9.3-3.4-6.6 24.5h64l4.1-15.2z"></path>
                </svg>`
    },
    {
      name: 'Augur',
      symbol: 'REP | $13 Billion',
      price: '$10,107.51',
      changeValue: '+1,108.30 | 1.89%',
      changeClass: 'success',
      trendIcon: 'ti ti-arrow-narrow-up',
      bgClass: 'danger-transparent svg-danger avatar-rounded',
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 128 128">
                  <path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z"></path>
                  <path fill="#fff" d="M63.9 111.8c-.9-.4-1.7-.7-2.4-1.1-11.8-7-23.7-14.1-35.5-21.2-2.7-1.6-3.2-3.2-1.6-6.1 12-21.5 24-43 35.9-64.5.8-1.5 1.8-2.6 3.6-2.6s2.8 1.2 3.6 2.7c11.9 21.4 23.9 42.9 35.8 64.3 1.6 2.9 1.2 4.5-1.6 6.2l-35.1 21c-.8.5-1.8.9-2.7 1.3z"></path>
                </svg>`
    }
  ];

  cryptoTrendingAssetsList = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      quantity: '2.5 BTC',
      price: '$96,250',
      changeValue: '-0.78% (1hr)',
      changeClass: ' fw-semibold h6 mb-0',
      textColor: 'muted',
      svgColor: 'light p-2 avatar-rounded',
      cryptotextBg: 'danger',
      bgClass: 'primary-transparent svg-primary avatar-rounded',
      trendIcon: 'down',
      logo: './assets/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg',
      timeFrame: '1hr',
      cryptovalue:true
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      quantity: '10 ETH',
      price: '$27,000',
      changeValue: '-0.74% (1hr)',
      svgColor: 'light p-2 avatar-rounded',
      changeClass: ' fw-semibold h6 mb-0',
      textColor: 'muted',
      cryptotextBg: 'danger',
      trendIcon: 'down',
      logo: './assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg',
      timeFrame: '1hr',
      cryptovalue:true
    },
    {
      name: 'Binance Coin',
      symbol: 'BNB',
      quantity: '50 BNB',
      price: '$19,000',
      changeValue: '-0.53% (1hr)',
      cryptotextBg: 'danger',
      svgColor: 'light p-2 avatar-rounded',
      changeClass: ' fw-semibold h6 mb-0',
      textColor: 'muted',
      trendIcon: 'down',
      logo: './assets/images/crypto-currencies/crypto-icons/binance-usd-busd-logo.svg',
      timeFrame: '1hr',
      cryptovalue:true
    },
    {
      name: 'Cardano',
      symbol: 'ADA',
      quantity: '500 ADA',
      price: '$900',
      changeValue: '-1.11% (1hr)',
      cryptotextBg: 'danger',
      changeClass: 'fw-semibold h6 mb-0',
      textColor: 'muted',
      svgColor: 'light p-2 avatar-rounded',
      trendIcon: 'down',
      logo: './assets/images/crypto-currencies/crypto-icons/cardano-ada-logo.svg',
      timeFrame: '1hr',
      cryptovalue:true
    },
    {
      name: 'Solana',
      symbol: 'SOL',
      quantity: '20 SOL',
      price: '$900',
      changeValue: '-1.11% (1hr)',
      cryptotextBg: 'danger',
      changeClass: ' fw-semibold h6 mb-0',
      textColor: 'muted',
      svgColor: 'light p-2 avatar-rounded',
      trendIcon: 'down',
      logo: './assets/images/crypto-currencies/crypto-icons/solana-sol-logo.svg',
      timeFrame: '1hr',
      cryptovalue:true
    },
    {
      name: 'Tether',
      symbol: 'USDT',
      quantity: '1000 USDT',
      price: '$1000',
      changeValue: '0.00% (1hr)' ,
      cryptotextBg: 'success',
      changeClass: 'fw-semibold h6 mb-0',
      textColor: 'muted',
      svgColor: 'light p-2 avatar-rounded',
      trendIcon: 'up',
      logo: './assets/images/crypto-currencies/crypto-icons/tether-usdt-logo.svg',
      timeFrame: '1hr',
      cryptovalue:true
    }
  ];

  transactions = [
    {
      icon: './assets/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg',
      name: 'Bitcoin (BTC)',
      type: 'Deposit',
      typeClass: 'text-success',
      amount: '+ 25,00 BTC',
      amountIcon: 'ri-arrow-up-line',
      amountIconClass: 'text-success',
      date: '01 Mar, 2024',
    },
    {
      icon: './assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg',
      name: 'Etherium (ETH)',
      type: 'Withdraw',
      typeClass: 'text-danger',
      amount: '- 25,00 ETH',
      amountIcon: 'ri-arrow-down-line',
      amountIconClass: 'text-danger',
      date: '02 Mar, 2024',
    },
    {
      icon: './assets/images/crypto-currencies/crypto-icons/bitcoin-btc-logo.svg',
      name: 'Bitcoin (BTC)',
      type: 'Deposit',
      typeClass: 'text-success',
      amount: '+ 25,00 BTC',
      amountIcon: 'ri-arrow-up-line',
      amountIconClass: 'text-success',
      date: '01 Mar, 2024',
    },
    {
      icon: './assets/images/crypto-currencies/crypto-icons/tether-usdt-logo.svg',
      name: 'Tether (USDT)',
      type: 'Convert',
      typeClass: 'text-info',
      amount: '+ $84,610,539 USDT',
      amountIcon: 'ri-arrow-up-line',
      amountIconClass: 'text-success',
      date: '01 Mar, 2024',
    },
    {
      icon: './assets/images/crypto-currencies/crypto-icons/ethereum-eth-logo.svg',
      name: 'Etherium (ETH)',
      type: 'Withdraw',
      typeClass: 'text-danger',
      amount: '- 25,00 ETH',
      amountIcon: 'ri-arrow-down-line',
      amountIconClass: 'text-danger',
      date: '02 Mar, 2024',
    },
  ];
  
  constructor(private sanitizer: DomSanitizer) {}

  sanitizesvgIcon(svgIcon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgIcon);
  }
  Crypto=[
    {label:'BTC',value:1},
    {label:'ETH',value:2},
    {label:'XRP',value:3},
    {label:'DASH',value:4},
    {label:'NEO',value:5},  
    {label:'LTC',value:6},
    {label:'BSD',value:7},
  ]
  Crypto1=[
    {label:'USD',value:1},
    {label:'AED',value:2},
    {label:'AUD',value:3},
    {label:'ARS',value:4},
    {label:'AZN',value:5},  
    {label:'BGN',value:6},
    {label:'BRL',value:7},
  ]
  handleSelectChange(value: any | any[]) {
}
}