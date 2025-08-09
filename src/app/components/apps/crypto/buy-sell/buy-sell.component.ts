import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { BuySellChartData } from '../../../../shared/data/dashboard_chartData/mediacharts.data';
import { SpkApexchartsComponent } from '../../../../@spk/spk-apexcharts/apexcharts.component';
import { CommonModule } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { SpkMedicalCardComponent } from '../../../../@spk/reusable-dashboard/spk-medical-card/spk-medical-card.component';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';

@Component({
    selector: 'app-buy-sell',
    imports: [SharedModule, SpkMedicalCardComponent, SpkApexchartsComponent, CommonModule, NgbNavModule, NgSelectModule, FormsModule, SpkNgSelectComponent],
    templateUrl: './buy-sell.component.html',
    styleUrl: './buy-sell.component.scss'
})
export class BuySellComponent {
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
  SellCrypto=[
    {label:'BTC',value:1},
    {label:'ETH',value:2},
    {label:'XRP',value:3},
    {label:'DASH',value:4},
    {label:'NEO',value:5},  
    {label:'LTC',value:6},
    {label:'BSD',value:7},
  ]
  SellCrypto1=[
    {label:'USD',value:1},
    {label:'AED',value:2},
    {label:'AUD',value:3},
    {label:'ARS',value:4},
    {label:'AZN',value:5},  
    {label:'BGN',value:6},
    {label:'BRL',value:7},
  ]
  Amount=[
    {label:'BTC',value:1},
    {label:'ETH',value:2},
    {label:'XRP',value:3},
    {label:'DASH',value:4},
    {label:'NEO',value:5},  
    {label:'LTC',value:6},
    {label:'BSD',value:7},
  ]
  handleSelectChange(value: any | any[]) {
}
 financialData = [
  {
    title: 'Total Buy',
    amount: 324.25,
    currency: 'USD',
    class: 'text-success'
  },
  {
    title: 'Total Sell',
    amount: 4235.25,
    currency: 'USD',
    class: 'text-danger'
  },
  {
    title: 'Available Balance',
    amount: 22803.92,
    currency: 'USD',
    class: 'text-primary'
  },
  {
    title: 'Total Crypto Asset Value',
    amount: 456683.00,
    currency: 'USD',
    class: 'text-warning'
  },
  {
    title: 'Total Amount',
    amount: 2344543.00,
    currency: 'USD',
    class: 'text-info'
  }
];
  public chartOptions = BuySellChartData;

  cards = [
    {
      amount: '$19.56k',
      title: 'Total Buy',
      directionIcon: 'left-down',
      directionClass: 'primary',
      avatarClass: 'primary',
      change: 'Increase',
      percentage: '4.97%',
      percentageClass: 'success',
      percentageIcon: 'up',
     
    },
    {
      amount: '$12.76k',
      title: 'Total Sell',
      directionIcon: 'right-up',
      directionClass: 'secondary',
      avatarClass: 'secondary',
      change: 'Decrease',
      percentage: '1.65%',
      percentageClass: 'danger',
      percentageIcon: 'down',
     
    },
    {
      amount: '$2.56k',
      title: 'Today Buy',
      directionIcon: 'left-down',
      directionClass: 'success',
      avatarClass: 'success',
      change: 'Increase',
      percentage: '2.75%',
      percentageClass: 'success',
      percentageIcon: 'up',
     
    },
    {
      amount: '$9.53k',
      title: 'Today Sell',
      directionIcon: 'right-up',
      directionClass: 'info',
      avatarClass: 'info',
      change: 'Decrease',
      percentage: '0.76%',
      percentageClass: 'danger',
      percentageIcon: 'down',
     
    }
  ];
}
