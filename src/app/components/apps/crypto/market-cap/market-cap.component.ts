import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../../shared/shared.module';
import { BitcoinData, BitSendData, DashData, EthereumData } from '../../../../shared/data/charts/marketcap_chart';
import { SpkCryptoMarketcapCardComponent } from '../../../../@spk/reusable-apps/spk-crypto-marketcap-card/spk-crypto-marketcap-card.component';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
    selector: 'app-market-cap',
  imports: [SharedModule, NgSelectModule, FormsModule, NgbModule, SpkCryptoMarketcapCardComponent, SpkReusableTablesComponent, SpkDropdownsComponent],
    templateUrl: './market-cap.component.html',
    styleUrl: './market-cap.component.scss'
})
export class MarketCapComponent {
  public chartOptions1 = BitcoinData;
  public chartOptions2 = EthereumData;
  public chartOptions3 = DashData;
  public chartOptions4 = BitSendData;

  cryptoCards = [
    {
      title: 'Bitcoin',
      currency: 'BTC',
      icon: 'bg-primary',
      change: '+280.30(0.96%)',
      amount: 35876.29,
      amountCurrency: 'USD',
      chartId: 'btc-chart',
      chartOptions :BitcoinData,
      changeClass: 'text-success',
      changeClass1: 'text-primary',
      iconViewBox: '0 0 24 24',
      iconPath1:'M16,14c-4.418,0-8,3.582-8,8s3.582,8,8,8s8-3.582,8-8S20.418,14,16,14z M17.35,26H17v1.5h-1V26h-1v1.5h-1V26h-0.5c-0.276,0-0.5-0.224-0.5-0.5c0-0.154,0-7.246,0-7c0-0.276,0.224-0.5,0.5-0.5H14v-1.5h1V18h1v-1.5h1v1.551c1.45,0.296,2.406,1.837,1.829,3.34c0.767,0.485,1.258,1.37,1.159,2.364C19.857,25.058,18.66,26,17.35,26z',
      iconPath: 'M14.075,24v-3.188c3.779-0.207,6.305-1.167,6.642-4.756c0.264-2.88-1.084-4.165-3.223-4.682l0.001-0.002c1.289-0.665,2.109-1.846,1.919-3.811c-0.249-2.688-2.438-3.589-5.339-3.84V0h-2.256v3.619c-0.586,0-1.186,0.015-1.787,0.03V0.001H7.776v3.722c-0.829,0.025-1.795,0.013-4.526,0v2.422c1.781-0.032,2.715-0.147,2.929,1.004V17.34c-0.136,0.914-0.861,0.782-2.475,0.753L3.25,20.796c4.113,0,4.526,0.015,4.526,0.015v3.188h2.256v-3.143c0.615,0.015,1.216,0.015,1.787,0.015V24H14.075z M10.077,6.306c1.274,0,5.259-0.399,5.259,2.275c0,2.555-3.985,2.26-5.259,2.26V6.306z M10.077,18.106v-4.992c1.523,0,6.188-0.428,6.188,2.496C16.265,18.431,11.6,18.106,10.077,18.106z'
    },
    {
      title: 'Ethereum',
      currency: 'ETH',
      icon: 'bg-secondary',
      change: '-2,044.24(1.32%)',
      amount: 31244.12,
      amountCurrency: 'USD',
      chartId: 'eth-chart',
      chartOptions :EthereumData,
      changeClass: 'text-danger',
      changeClass1: 'text-secondary',
      iconViewBox: '0 0 128 128',
      iconPath1:'',
      iconPath: 'M65.7 96.4V128l39.2-55.1zM103.4 62.7L65.7 0v45.6zM65.7 49.2v38.9l37.4-21.9zM24.7 62.7L62.4 0v45.6zM62.4 49.2v38.9L24.9 66.2zM62.3 96.4V128L23.1 72.9z'
    },
    {
      title: 'Dash',
      currency: 'DASH',
      icon: 'bg-success',
      change: '+1,056.24(1.62%)',
      amount: 26345.00,
      amountCurrency: 'USD',
      chartId: 'dash-chart',
      chartOptions :DashData,
      changeClass: 'text-success',
      changeClass1: 'text-success',
      iconViewBox: '0 0 128 128',
      iconPath1:'M52.6 55.6c-2 5.6-3.9 10.9-5.9 16-.1.4-.9.7-1.4.7H.8c-.2 0-.4-.1-.8-.3 1.9-5.2 3.7-10.3 5.7-15.4.2-.5 1-1 1.5-1h45.4z',
      iconPath: 'M3 99.8C5 94 6.8 88.6 8.8 83.1c.2-.5 1.2-1 1.8-1 3.3-.1 6.6 0 9.9 0h64.6c1.7 0 2.5-.5 3-2.2 3.6-10.6 7.3-21.2 11-31.8.2-.6.3-1.1.6-2H21.4c2-5.9 3.9-11.4 5.9-16.9.2-.4 1-.8 1.5-.8 2-.1 3.9 0 5.9 0 26.5 0 53 .2 79.6-.1 7.9-.1 16.3 6 12.9 17.6-2.5 8.7-5.8 17.1-8.7 25.6-1 2.9-2 5.9-3 8.7-3.7 10.2-11.2 16.3-21.5 19.2-.9.3-1.9.3-2.9.3H5.2c-.6.1-1.3.1-2.2.1z'
    },
    {
      title: 'BitSend',
      currency: 'BSD',
      icon: 'bg-info',
      change: '-3,124.24(1.32%)',
      amount: 32856.00,
      amountCurrency: 'USD',
      chartId: 'dash-chart',
      chartOptions :BitSendData,
      changeClass: 'text-danger',
      changeClass1: 'text-info',
      iconViewBox: '0 0 32 32',
      iconPath1:'M16,14c-4.418,0-8,3.582-8,8s3.582,8,8,8s8-3.582,8-8S20.418,14,16,14z M17.35,26H17v1.5h-1V26h-1v1.5h-1V26h-0.5c-0.276,0-0.5-0.224-0.5-0.5c0-0.154,0-7.246,0-7c0-0.276,0.224-0.5,0.5-0.5H14v-1.5h1V18h1v-1.5h1v1.551c1.45,0.296,2.406,1.837,1.829,3.34c0.767,0.485,1.258,1.37,1.159,2.364C19.857,25.058,18.66,26,17.35,26z',
      iconPath: 'M21.022 3.305c.481 2.917 8.449 5.085 3.016 13.286-.086.129-.294.079-.314-.075-.435-3.378-1.004-5.469-3.349-6.963-.052-.033-.112-.048-.171-.033-.869.218-3.112 1.461-4.123 2.863-.052.072-.137.107-.224.09-1.878-.37-3.788-1.111-4.744-2.376-.068-.09-.186-.123-.284-.067-1.344.768-2.697 2.537-2.82 6.577-.005.169-.232.23-.314.082C4.249 10.48 6.491 6.091 11.736 4.097c.135-.051.281.034.312.175.456 2.061 2.844 3.936 3.67 4.532.132.095.303.015.332-.145.457-2.496 2.757-4.809 4.665-5.559C20.858 3.045 20.997 3.154 21.022 3.305zM16.5 21H15v-1h1.5c.275 0 .5.224.5.5S16.775 21 16.5 21zM18 23.5c0 .276-.225.5-.5.5.146 0-2.347 0-2.5 0v-1c-.103 0 2.321 0 2.5 0C17.775 23 18 23.224 18 23.5z'
    },

  ];
  TaskColumn = [
    { header : '#'},  
    { header : 'Crypto Name'},
    { header : 'MarketCap'},
    { header : 'Price'},
    { header : '1h Change'},
    { header : '24h Change'},
    { header : 'Circulating Supply'},
    { header : 'Circulating Supply'},
    { header : 'Trade'},
   
  ]
  CryptoTableRow  = [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      marketCap: '$582.23B',
      price: '$29,948.80',
      change24h: '-0.483%',
      change7d: '+0.239%',
      volume: '$11.79B USD',
      circulatingSupply: '19.43M',
      maxSupply: '21M',
      progress: {
        primary: 88,
        secondary: 12,
      },
      imageUrl: './assets/images/crypto-currencies/square-color/Bitcoin.svg',
      buttonLabel: 'Trade Now',
    },
    {
      id: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      marketCap: '$226.91B',
      price: '$1,895.96',
      change24h: '-0.87%',
      change7d: '-0.29%',
      volume: '$2.83B USD',
      circulatingSupply: '120M',
      maxSupply: 'N/A',
      progress: {
        primary: 65,
        secondary: 35,
      },
      imageUrl: './assets/images/crypto-currencies/square-color/Ethereum.svg',
      buttonLabel: 'Trade Now',
    },
    {
      id: 3,
      name: 'Golem',
      symbol: 'GLM',
      marketCap: '$202.07M',
      price: '$0.201472',
      change24h: '+0.61%',
      change7d: '-34.96%',
      volume: '$2,112,645 USD',
      circulatingSupply: '1,000M',
      maxSupply: '1,000M',
      progress: {
        primary: 100,
        secondary: 0,
      },
      imageUrl: './assets/images/crypto-currencies/square-color/Golem.svg',
      buttonLabel: 'Trade Now',
    },
    {
      id: 4,
      name: 'Dash',
      symbol: 'DASH',
      marketCap: '$365.877M',
      price: '$32.13',
      change24h: '+0.59%',
      change7d: '+1.24%',
      volume: '$3.61M USD',
      circulatingSupply: '11.37M',
      maxSupply: '18.92M',
      progress: {
        primary: 56,
        secondary: 44,
      },
      imageUrl: './assets/images/crypto-currencies/square-color/Dash.svg',
      buttonLabel: 'Trade Now',
    },
    {
      id: 5,
      name: 'Litecoin',
      symbol: 'LTC',
      marketCap: '$6.80B',
      price: '$92.98',
      change24h: '-0.90%',
      change7d: '+2.22%',
      volume: '$11.46B USD',
      circulatingSupply: '73.40M',
      maxSupply: '84M',
      progress: {
        primary: 100,
        secondary: 0,
      },
      imageUrl: './assets/images/crypto-currencies/square-color/Litecoin.svg',
      buttonLabel: 'Trade Now',
    },
    {
      id: 6,
      name: 'Ripple',
      symbol: 'XRP',
      marketCap: '$42.48B',
      price: '$0.83',
      change24h: '+0.01%',
      change7d: '+0.91%',
      volume: '$2.99B USD',
      circulatingSupply: '52.54B',
      maxSupply: '100B',
      progress: {
        primary: 52,
        secondary: 48,
      },
      imageUrl: './assets/images/crypto-currencies/square-color/Ripple.svg',
      buttonLabel: 'Trade Now',
    },
    {
      id: 7,
      name: 'EOS',
      symbol: 'EOS',
      marketCap: '$85.2M',
      price: '$0.765957',
      change24h: '-0.61%',
      change7d: '-20.65%',
      volume: '$116.91M USD',
      circulatingSupply: '10.1B',
      maxSupply: '105B',
      progress: {
        primary: 10,
        secondary: 90,
      },
      imageUrl: './assets/images/crypto-currencies/square-color/EOS.svg',
      buttonLabel: 'Trade Now',
    },
  ];

  cryptoList = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '$29,948.80',
      maxLimit: '50 BTC',
      volume: '31.2450 BTC',
      image: './assets/images/crypto-currencies/regular/Bitcoin.svg'
    },
    {
      name: 'Litecoin',
      symbol: 'LTC',
      price: '$9,332.98',
      maxLimit: '200 LTC',
      volume: '38.0023 LTC',
      image: './assets/images/crypto-currencies/regular/litecoin.svg'
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: '$1,895.96',
      maxLimit: '100 ETH',
      volume: '69.2412 BTC',
      image: './assets/images/crypto-currencies/regular/Ethereum.svg'
    },
    {
      name: 'Golem',
      symbol: 'GLM',
      price: '$1,895.96',
      maxLimit: '130 GLM',
      volume: '69.2412 GLM',
      image: './assets/images/crypto-currencies/regular/Golem.svg'
    },
    {
      name: 'Dash',
      symbol: 'DASH',
      price: '$1,895.96',
      maxLimit: '300 DASH',
      volume: '19.8463 DASH',
      image: './assets/images/crypto-currencies/regular/Dash.svg'
    },
    {
      name: 'Litecoin',
      symbol: 'LTC',
      price: '$1,895.96',
      maxLimit: '250 LTC',
      volume: '34.8568 LTC',
      image: './assets/images/crypto-currencies/regular/litecoin.svg'
    },
    {
      name: 'Ripple',
      symbol: 'XRP',
      price: '$1,895.96',
      maxLimit: '140 XRP',
      volume: '23.4749 XRP',
      image: './assets/images/crypto-currencies/regular/Ripple.svg'
    },
    {
      name: 'EOS',
      symbol: 'EOS',
      price: '$1,895.96',
      maxLimit: '160 EOS',
      volume: '69.2412 EOS',
      image: './assets/images/crypto-currencies/regular/EOS.svg'
    }
  ];
}
