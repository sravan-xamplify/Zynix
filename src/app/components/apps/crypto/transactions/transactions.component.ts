import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { BounceRateData, ConversionRateData, ReviewChartData, SessionDurationData, TotalFollowersData } from '../../../../shared/data/dashboard_chartData/analyticscharts.data';
import { CommonModule } from '@angular/common';
import { SpkTransactionCardComponent } from '../../../../@spk/reusable-dashboard/spk-transaction-card/spk-transaction-card.component';
import { SpkReusableTablesComponent } from "../../../../@spk/spk-reusable-tables/spk-reusable-tables.component";
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
    selector: 'app-transactions',
    imports: [NgSelectModule, NgbModule, SpkTransactionCardComponent, SpkDropdownsComponent, CommonModule, SpkReusableTablesComponent],
    templateUrl: './transactions.component.html',
    styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {

  public chartOptions1 = TotalFollowersData;
  public chartOptions2 = BounceRateData;
  public chartOptions3 = ConversionRateData;
  public chartOptions4 = SessionDurationData;
  public chartOptions5 = ReviewChartData;

  TaskColumn=[
    {header:"",field:""},
    {header:"Sender",field:"Sender"},
    {header:"Transaction Hash",field:"Transaction Hash"},
    {header:"Coin",field:"Coin"},
    {header:"Date",field:"Date"},
    {header:"Amount",field:"Amount"},
    {header:"Receiver",field:"Receiver"},
    {header:"Status",field:"Status"},
    {header:"Actions",field:"Actions"},
  ]

   taskData = [
    {
      id: 1,
      title: 'New',
      count: '42',
      badge: '12,345',
      badgColor:'success',
      percentageChange: "-12.61",
      changeDirection: 'up', // 'up' or 'down' for the arrow
      colorClass: 'primary',
      chartOptions: TotalFollowersData
    },
    {
      id: 2,
      title: 'Completed',
      count: '120',
      badge: '12,345',
      badgColor:'danger',
      percentageChange: "-12.61",
      changeDirection: 'down', // 'up' or 'down' for the arrow
      colorClass: 'secondary',
      chartOptions: BounceRateData
    },
    {
      id: 3,
      title: 'OnGoing',
      count: '270',
      badge: '12,345',
      badgColor:'success',
      percentageChange: "11.81",
      changeDirection: 'up',
      colorClass: 'success',
      chartOptions: ConversionRateData
    },
    {
      id: 4,
      title: 'Pending',
      count: '98',
      badge: '12,345',
      badgColor:'danger',
      percentageChange: "13.65",
      changeDirection: 'up',
      colorClass: 'info',
      chartOptions: SessionDurationData
    },
    {
      id: 5,
      title: 'Rejected',
      count: '120',
      badge: '12,345',
      badgColor:'success',
      percentageChange: "4.21",
      changeDirection: 'up',
      colorClass: 'warning',
      chartOptions: ReviewChartData
    }
  ];

  transactions = [
    {
      id: 1,
      avatarIcon: 'ti ti-arrow-narrow-up text-success',
      avatarImage: './assets/images/faces/10.jpg',
      name: 'Jack Miller',
      transactionId: '#1242232401',
      currencyImage: './assets/images/crypto-currencies/regular/Bitcoin.svg',
      currency: 'Bitcoin',
      date: '24,Jul 2024 - 4:23PM',
      change: '+0.041',
      recipient: 'Texas Steel',
      statusBadge: 'bg-success-transparent',
      status: 'Success'
    },
    {
      id: 2,
      avatarIcon: 'ti ti-arrow-narrow-down text-danger',
      avatarImage: './assets/images/faces/5.jpg',
      name: 'Samantha Taylor',
      transactionId: '#1242232402',
      currencyImage: './assets/images/crypto-currencies/regular/Dash.svg',
      currency: 'Dashcoin',
      date: '20,Jul 2024 - 12:47PM',
      change: '-0.284',
      recipient: 'Stuart Little',
      statusBadge: 'bg-warning-transparent',
      status: 'Pending'
    },
    {
      id: 3,
      avatarIcon: 'ti ti-arrow-narrow-up text-success',
      avatarImage: './assets/images/faces/12.jpg',
      name: 'Brian Jhonson',
      transactionId: '#1242232403',
      currencyImage: './assets/images/crypto-currencies/regular/Euro.svg',
      currency: 'Euro',
      date: '14,Aug 2024 - 10:25AM',
      change: '+0.943',
      recipient: 'Melissa Smith',
      statusBadge: 'bg-success-transparent',
      status: 'Success'
    },
    {
      id: 4,
      avatarIcon: 'ti ti-arrow-narrow-up text-success',
      avatarImage: './assets/images/faces/15.jpg',
      name: 'Liam Anderson',
      transactionId: '#1242232404',
      currencyImage: './assets/images/crypto-currencies/regular/Ethereum.svg',
      currency: 'Etherium',
      date: '10,Jul 2024 - 4:14PM',
      change: '+0.582',
      recipient: 'Alexander Clark',
      statusBadge: 'bg-danger-transparent',
      status: 'Failed'
    },
    {
      id: 5,
      avatarIcon: 'ti ti-arrow-narrow-up text-success',
      avatarImage: './assets/images/faces/4.jpg',
      name: 'Isabella Brown',
      transactionId: '#1242232405',
      currencyImage: './assets/images/crypto-currencies/regular/Golem.svg',
      currency: 'Golem',
      date: '19,Aug 2024 - 11:35AM',
      change: '+0.290',
      recipient: 'Elijah Davis',
      statusBadge: 'bg-success-transparent',
      status: 'Success'
    },
    {
      id: 6,
      avatarIcon: 'ti ti-arrow-narrow-down text-danger',
      avatarImage: './assets/images/faces/7.jpg',
      name: 'Sophia Lee',
      transactionId: '#1242232406',
      currencyImage: './assets/images/crypto-currencies/regular/litecoin.svg',
      currency: 'Litecoin',
      date: '12,Jun 2024 - 2:45PM',
      change: '-0.147',
      recipient: 'Harper Taylor',
      statusBadge: 'bg-success-transparent',
      status: 'Success'
    },
    {
      id: 7,
      avatarIcon: 'ti ti-arrow-narrow-up text-success',
      avatarImage: './assets/images/faces/6.jpg',
      name: 'Evelyn Clark',
      transactionId: '#1242232407',
      currencyImage: './assets/images/crypto-currencies/regular/Ripple.svg',
      currency: 'Ripple',
      date: '27,Jul 2024 - 10:18AM',
      change: '+1.05',
      recipient: 'William Brown',
      statusBadge: 'bg-success-transparent',
      status: 'Success'
    },
    {
      id: 8,
      avatarIcon: 'ti ti-arrow-narrow-up text-success',
      avatarImage: './assets/images/faces/11.jpg',
      name: 'Liam Anderson',
      transactionId: '#1242232408',
      currencyImage: './assets/images/crypto-currencies/regular/monero.svg',
      currency: 'Monero',
      date: '16,Aug 2024 - 9:25PM',
      change: '+0.625',
      recipient: 'Amelia Davis',
      statusBadge: 'bg-info-transparent',
      status: 'Inprogress'
    },
    {
      id: 9,
      avatarIcon: 'ti ti-arrow-narrow-down text-danger',
      avatarImage: './assets/images/faces/2.jpg',
      name: 'Harper Taylor',
      transactionId: '#1242232409',
      currencyImage: './assets/images/crypto-currencies/regular/Zcash.svg',
      currency: 'Zcash',
      date: '24,Jul 2024 - 12:47PM',
      change: '-0.293',
      recipient: 'Benjamin Martinez',
      statusBadge: 'bg-info-transparent',
      status: 'Inprogress'
    },
    {
      id: 10,
      avatarIcon: 'ti ti-arrow-narrow-up text-success',
      avatarImage: './assets/images/faces/16.jpg',
      name: 'Lucas Taylor',
      transactionId: '#1242232410',
      currencyImage: './assets/images/crypto-currencies/regular/Decred.svg',
      currency: 'Decred',
      date: '24,Jul 2024 - 12:47PM',
      change: '+0.893',
      recipient: 'Mia Wilson',
      statusBadge: 'bg-success-transparent',
      status: 'Success'
    }
  ];

  deleteTransaction(transactionId: number): void {
      this.transactions = this.transactions.filter(transaction => transaction.id !== transactionId);
  }
  }

