import { AfterViewInit, ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import  ApexCharts from 'apexcharts';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkApexchartsComponent } from '../../../@spk/spk-apexcharts/apexcharts.component';
import { AmazonChartData, AppleChartData, InvestmentChartData, NvidiaChartData, PortFolioChartData, StatisticsChartData } from '../../../shared/data/dashboard_chartData/stockcharts.data';
import Swiper from 'swiper'
import { register } from 'swiper/element';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { CommonModule } from '@angular/common';
import { SpkSchoolCardComponent } from '../../../@spk/reusable-dashboard/spk-school-card/spk-school-card.component';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
Swiper.use([Autoplay, Navigation, Pagination]);
register();

@Component({
    selector: 'app-stocks',
    imports: [SharedModule, RouterModule, NgApexchartsModule, NgbNavModule, NgbModule, SpkApexchartsComponent, CommonModule, SpkReusableTablesComponent, SpkSchoolCardComponent, SpkDropdownsComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './stocks.component.html',
    styleUrls: ['./stocks.component.scss']
})
export class StocksComponent  {
  public chartOptions = InvestmentChartData;
  public chartOptions1 = AppleChartData;
  public chartOptions2 = NvidiaChartData;
  public chartOptions3 = AmazonChartData;
  public chartOptions4 = StatisticsChartData;
  public chartOptions5 = PortFolioChartData;

  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

	ngAfterViewInit(): void {
		const swiperEl = this.swiperContainer.nativeElement;
	
		Object.assign(swiperEl, {
      slidesPerView: 6,
      spaceBetween: 0,
      mousewheel: true,
      loop: true,
      direction: "vertical",
      autoplay: {
          delay: 1000,
          disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 4,
          spaceBetween: 20,
      },
          500: {
              slidesPerView: 4,
              spaceBetween: 20,
          },
          768: {
              slidesPerView: 4,
              spaceBetween: 20,
          },
          1024: {
              slidesPerView: 4,
              spaceBetween: 20,
          },
          1200: {
              slidesPerView: 4,
              spaceBetween: 10,
          },
          1400: {
              slidesPerView: 6,
              spaceBetween: 20,
          },
          1600: {
              slidesPerView: 6,
              spaceBetween: 20,
          },
          1800: {
              slidesPerView: 6,
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
      name: 'Apple',
      value: '$12,289.44',
      change: '0.14%',
      changeDirection: 'up',
      iconClass: 'bi bi-apple',
      colorClass: 'bg-dark',
      iconColor:''
    },
    {
      name: 'Bitcoin',
      value: '$58,151.02',
      change: '2.14%',
      changeDirection: 'up',
      iconClass: 'bi bi-currency-bitcoin',
      colorClass: 'bg-primary',
       iconColor:'-fixed'
    },
    {
      name: 'Tesla',
      value: '$14,452.36',
      change: '4.02%',
      changeDirection: 'down',
      iconClass: 'bi bi-card-list',
      colorClass: 'bg-secondary',
       iconColor:'-fixed'
    },
    {
      name: 'Amazon',
      value: '$63,251.11',
      change: '5.14%',
      changeDirection: 'up',
      iconClass: 'bi bi-gift',
      colorClass: 'bg-success',
       iconColor:'-fixed'
    },
    {
      name: 'Aliexpress',
      value: '$5,401.50',
      change: '3.32%',
      changeDirection: 'up',
      iconClass: 'bi bi-truck',
      colorClass: 'bg-warning',
       iconColor:'-fixed'
    },
    {
      name: 'Samsung',
      value: '$10,732.12',
      change: '1.24%',
      changeDirection: 'down',
      iconClass: 'bi bi-phone',
      colorClass: 'bg-info',
      iconColor:'-fixed'
    },
    {
      name: 'Nvidia',
      value: '$23,235.25',
      change: '1.14%',
      changeDirection: 'up',
      iconClass: 'bi bi-nvidia',
      colorClass: 'bg-danger',
       iconColor:'-fixed'
    }
  ];

  transactionColumn = [
    {
      header:'Symbol'
    },
    {
      header:'Date'
    },
    {
      header:'Type'
    },
    {
      header:'Amount'
    },
    {
      header:'Shares'
    }
  ]
  Transaction = [
    {
      code: 'EPA:THI',
      date: '12-06-2024',
      type: 'Buy',
      amount: '-$1,290',
      change: '+20',
      typeClass: 'bg-success-transparent',
      amountClass: 'text-danger',
      changeClass: 'text-success'
    },
    {
      code: 'EPA:SCB',
      date: '11-06-2024',
      type: 'Buy',
      amount: '-$2,150',
      change: '+15',
      typeClass: 'bg-success-transparent',
      amountClass: 'text-danger',
      changeClass: 'text-success'
    },
    {
      code: 'EPA:CGIO',
      date: '11-06-2024',
      type: 'Sell',
      amount: '+$22,625',
      change: '-12',
      typeClass: 'bg-danger-transparent',
      amountClass: 'text-success',
      changeClass: 'text-danger'
    },
    {
      code: 'EPA:NTIX',
      date: '05-06-2024',
      type: 'Buy',
      amount: '-$3,680',
      change: '+36',
      typeClass: 'bg-success-transparent',
      amountClass: 'text-danger',
      changeClass: 'text-success'
    },
    {
      code: 'EPA:MOD',
      date: '20-05-2024',
      type: 'Sell',
      amount: '+$30,750',
      change: '-25',
      typeClass: 'bg-danger-transparent',
      amountClass: 'text-success',
      changeClass: 'text-danger'
    },
    {
      code: 'EPA:MOD',
      date: '25-05-2024',
      type: 'Sell',
      amount: '+$13,550',
      change: '-15',
      typeClass: 'bg-danger-transparent',
      amountClass: 'text-success',
      changeClass: 'text-danger'
    }
  ];

  stockColumn = [
    {
      header:'Symbol'
    },
    {
      header:'Name'
    }, {
      header:'Price'
    },
    {
      header:'1D Change'
    }, 
    {
      header:'1D Return %'
    },
    {
      header:'Volume'
    },

  ]
 
 stocksData = [
    {
      symbol: 'APPL',
      companyName: 'Apple Inc.',
      exchange: 'NASDAQ',
      price: '$1,116.90',
      change: '$28.9',
      changeClass: 'text-success', 
      percentage: '6.8%',
      percentageClass: 'text-success',
      volume: '12,389.30'
    },
    {
      symbol: 'TTR',
      companyName: 'Twitter.com Inc.',
      exchange: 'NYSE',
      price: '$993.21',
      change: '$11.6',
      changeClass: 'text-success',
      percentage: '10.25%',
      percentageClass: 'text-success',
      volume: '32,125.03'
    },
    {
      symbol: 'BS',
      companyName: 'Bootstrap.com',
      exchange: 'NSE',
      price: '$11.00',
      change: '$16.0',
      changeClass: 'text-danger',
      percentage: '9.0%',
      percentageClass: 'text-danger',
      volume: '27,911.16'
    },
    {
      symbol: 'NFLX',
      companyName: 'Netflix.com Inc.',
      exchange: 'LSE',
      price: '$161.72',
      change: '$9.8',
      changeClass: 'text-danger',
      percentage: '17.8%',
      percentageClass: 'text-danger',
      volume: '27,161.89'
    },
    {
      symbol: 'ION',
      companyName: 'Ion.com Corp.',
      exchange: 'FSX',
      price: '$52.65',
      change: '$14.2',
      changeClass: 'text-success',
      percentage: '30.2%',
      percentageClass: 'text-success',
      volume: '65,785.01'
    },
    {
      symbol: 'BS',
      companyName: 'Bootstrap.com',
      exchange: 'NSE',
      price: '$11.00',
      change: '$16.0',
      changeClass: 'text-danger',
      percentage: '9.0%',
      percentageClass: 'text-danger',
      volume: '27,911.16'
    }
  ];

  watchlist = [
    {
      name: 'Apple',
      symbol: 'AAPL',
      price: '$150.20',
      change: '+1.50%',
      avatar: './assets/images/media/apps/apple.png',
      avatarSize:'xs',
      avatarBg:'invert-1',
      bgValue:'success'
    },
    {
      name: 'Google',
      symbol: 'GOOG',
      price: '$2,500.5',
      change: '-5.25%',
      avatar: './assets/images/media/apps/google.png',
      avatarSize:'xs',
      avatarBg:'invert-1',
      bgValue:'danger'
    },
    {
      name: 'Microsoft',
      symbol: 'MSFT',
      price: '$300.75',
      change: '+2.30%',
      avatar: './assets/images/media/apps/microsoft.png',
      avatarSize:'xs',
      avatarBg:'invert-1',
      bgValue:'success'
      
    },
    {
      name: 'Amazon',
      symbol: 'AMZN',
      price: '$3,000.00',
      change: '-10.50%',
      avatar: './assets/images/media/apps/amazon.png',
      avatarSize:'xs',
      avatarBg:'invert-1',
      bgValue:'danger'
    },
    {
      name: 'Tesla',
      symbol: 'TSLA',
      price: '$700.80',
      change: '+8.00%',
      avatar: './assets/images/media/apps/tesla.png',
      avatarSize:'xs',
      avatarBg:'invert-1',
      bgValue:'success'
    },
    {
      name: 'Facebook',
      symbol: 'FB',
      price: '$350.40',
      change: '-3.20%',
      avatar: './assets/images/media/apps/facebook.png',
      avatarSize:'xs',
      avatarBg:'invert-1',
      bgValue:'danger'
    },
  ];

}