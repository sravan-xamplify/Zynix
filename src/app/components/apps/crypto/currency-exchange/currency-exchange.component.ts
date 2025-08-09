import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};
import { SharedModule } from '../../../../shared/shared.module';
import { ConversionChartData, ConversionChartData1, CustomersChartData, CustomersChartData1, DealsChartData, DealsChartData1, RevenueChartData, RevenueChartData1 } from '../../../../shared/data/dashboard_chartData/crmcharts.data';
import { SpkCurrencyCardComponent } from '../../../../@spk/reusable-dashboard/spk-currency-card/spk-currency-card.component';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';

@Component({
    selector: 'app-currency-exchange',
    imports: [SharedModule, NgSelectModule, FormsModule, SpkCurrencyCardComponent, SpkNgSelectComponent],
    templateUrl: './currency-exchange.component.html',
    styleUrl: './currency-exchange.component.scss'
})
export class CurrencyExchangeComponent {

  Currency=[
    {label:'USD',value:1},
    {label:'Pound',value:2},
    {label:'Rupee',value:3},
    {label:'Euro',value:4},
    {label:'Won',value:5},  
    {label:'Dinar',value:6},
    {label:'Rial',value:7},
  ]
  SellCoins=[
    {label:'Bitcoin',value:1},
    {label:'Etherium',value:2},
    {label:'Litecoin',value:3},
    {label:'Ripple',value:4},
    {label:'Cardano',value:5},  
    {label:'Neo',value:6},
    {label:'Stellar',value:7},
    {label:'EOS',value:7},
    {label:'NEM',value:8},
  ]
  handleSelectChange(value: any | any[]) {
  }
 // charts Start
 public chartOptions1 = RevenueChartData;
 public chartOptions2 = ConversionChartData;
 public chartOptions3 = DealsChartData;
 public chartOptions4 = CustomersChartData;
 public chartOptions5 = RevenueChartData1;
 public chartOptions6 = ConversionChartData1;
 public chartOptions7 = DealsChartData1;
 public chartOptions8 = CustomersChartData1;

 Crypto  = [
  {
    name: 'Bitcoin - BTC',
    symbol: 'BTC',
    percentageChange: '24.3',
    price: '30.29',
    badge:'24H',
    Bgcolor:'success',
    volume: '0.00434',
    imageUrl: './assets/images/crypto-currencies/square-color/Bitcoin.svg',
    chartOptions :CustomersChartData
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    percentageChange: '17.67',
    price: '2283.73',
    badge:'',
    Bgcolor:'',
    volume: '1.2923',
    imageUrl: './assets/images/crypto-currencies/square-color/Ethereum.svg',
    chartOptions :RevenueChartData
  },
  {
    name: 'Dash',
    symbol: 'DASH',
    percentageChange: '17.67',
    price: '2283.73',
    badge:'',
    Bgcolor:'',
    volume: '1.2923',
    imageUrl: './assets/images/crypto-currencies/square-color/Dash.svg',
    chartOptions :ConversionChartData
  },
  {
    name: 'Litecoin',
    symbol: 'LTC',
    percentageChange: '17.67',
    price: '2283.73',
    badge:'',
    Bgcolor:'',
    volume: '1.2923',
    imageUrl: './assets/images/crypto-currencies/square-color/Litecoin.svg',
    chartOptions :DealsChartData
  },
  {
    name: 'Ripple',
    symbol: 'XRS',
    percentageChange: '17.67',
    price: '2283.73',
    volume: '1.2923',
    badge:'',
    Bgcolor:'',
    imageUrl: './assets/images/crypto-currencies/square-color/Ripple.svg',
    chartOptions :RevenueChartData1
  },
  {
    name: 'Golem',
    symbol: 'GLM',
    percentageChange: '17.67',
    price: '2283.73',
    badge:'',
    Bgcolor:'',
    volume: '1.2923',
    imageUrl: './assets/images/crypto-currencies/square-color/Golem.svg',
    chartOptions :ConversionChartData1
  },
  {
    name: 'Monero',
    symbol: 'XMR',
    percentageChange: '17.67',
    price: '2283.73',
    badge:'',
    Bgcolor:'',
    volume: '1.2923',
    imageUrl: './assets/images/crypto-currencies/square-color/Monero.svg',
    chartOptions :DealsChartData1
  },
  {
    name: 'EOS',
    symbol: 'EOS',
    percentageChange: '17.67',
    price: '2283.73',
    badge:'',
    Bgcolor:'',
    volume: '1.2923',
    imageUrl: './assets/images/crypto-currencies/square-color/EOS.svg',
    chartOptions :CustomersChartData1
  },
];
}
