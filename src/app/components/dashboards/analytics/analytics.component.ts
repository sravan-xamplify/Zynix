import {  Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { ActiveUserData, BounceRateData, ConversionRateData, CountryData, SessionDurationData, SessionUsernData, TotalFollowersData, VisitorsData } from '../../../shared/data/dashboard_chartData/analyticscharts.data';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SpkApexchartsComponent } from '../../../@spk/spk-apexcharts/apexcharts.component';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkAnalyticsCardComponent } from '../../../@spk/reusable-dashboard/spk-analytics-card/spk-analytics-card.component';
import { SpkSchoolCardComponent } from '../../../@spk/reusable-dashboard/spk-school-card/spk-school-card.component';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
    selector: 'app-analytics',
    imports: [RouterModule, SharedModule, NgApexchartsModule, SpkAnalyticsCardComponent, SpkDropdownsComponent, SpkApexchartsComponent, SpkReusableTablesComponent, CommonModule, NgbDropdownModule, SpkSchoolCardComponent],
    templateUrl: './analytics.component.html',
    styleUrl: './analytics.component.scss'
})
export class AnalyticsComponent {
    TotalFollowersData = {TotalFollowersData}
  public chartOptions = TotalFollowersData;
  public chartOptions1 = BounceRateData;
  public chartOptions2 = ConversionRateData;
  public chartOptions3 = SessionDurationData;
  public chartOptions4 = SessionUsernData;
  public chartOptions5 = VisitorsData;
  public chartOptions6 = ActiveUserData;
  public chartOptions8 = CountryData;
  public chartOptions7: any;
  constructor(private sanitizer : DomSanitizer) {
    this.chartOptions7 = { 
    series: [
            {
                name: "1Am",
                data: this.generateData(7, {
                    min: 0,
                    max: 90,
                }),
            },
            {
                name: "4Am",
                data: this.generateData(7, {
                    min: 0,
                    max: 90,
                }),
            },
            {
                name: "8Am",
                data: this.generateData(7, {
                    min: 0,
                    max: 90,
                }),
            },
            {
                name: "12Am",
                data: this.generateData(7, {
                    min: 0,
                    max: 90,
                }),
            },
            {
                name: "3Pm",
                data: this.generateData(7, {
                    min: 0,
                    max: 90,
                }),
            },
            {
                name: "7Pm",
                data: this.generateData(7, {
                    min: 0,
                    max: 90,
                }),
            },
            {
                name: "12Pm",
                data: this.generateData(7, {
                    min: 0,
                    max: 90,
                }),
            },
        ],
    chart: {
        height: 262,
        type: "heatmap",
        toolbar: {
            show: false,
        },
        zoom: {
          enabled: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    colors: ["#735dff"],
    grid: {
        borderColor: "#f2f5f7",
    },
    xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: "11px",
                fontWeight: 600,
                cssClass: "apexcharts-xaxis-label",
            },
        },
    },
    yaxis: {
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: "11px",
                fontWeight: 600,
                cssClass: "apexcharts-yaxis-label",
            },
        },
    },
    }
  }
  public generateData(count: number, yrange: { min: any; max: any }) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = 'w' + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y,
      });
      i++;
    }
    return series;
  }
  BrowserTrafficColumn = [
    {
        header:'Browser',
        headClass:'text-start'
    },
    {
        header:'Sessions',
        headClass:'text-center'
    },
    {
        header:'Bounce Rate',
        headClass:'text-end'
    }
        
  ]
  headerClass = [
    {
        class:'text-center'
    },
    {
        class:'text-center'
    },
    {
         class:'text-end'
    },
  ]

  browserTrafficData = [
    {
      name: 'Chrome',
      iconClass: 'ri-chrome-line',
      iconBgClass: 'bg-primary',
      visitorCount: 23379,
      changePercentage: '+5.37%',
      changeIcon: 'fe fe-arrow-up-right',
      changeColor: 'text-success',
    },
    {
      name: 'Safari',
      iconClass: 'ri-safari-line',
      iconBgClass: 'bg-secondary',
      visitorCount: 20937,
      changePercentage: '+1.74%',
      changeIcon: 'fe fe-arrow-up-right',
      changeColor: 'text-success',
    },
    {
      name: 'Opera',
      iconClass: 'ri-opera-line',
      iconBgClass: 'bg-success',
      visitorCount: 20848,
      changePercentage: '-11.43%',
      changeIcon: 'fe fe-arrow-down-right',
      changeColor: 'text-danger',
    },
    {
      name: 'Firefox',
      iconClass: 'ri-firefox-fill',
      iconBgClass: 'bg-info',
      visitorCount: 18120,
      changePercentage: '7.61%',
      changeIcon: 'fe fe-arrow-up-right',
      changeColor: 'text-success',
    },
    {
      name: 'Edge',
      iconClass: 'ri-edge-fill',
      iconBgClass: 'bg-warning',
      visitorCount: 14986,
      changePercentage: '-1.14%',
      changeIcon: 'fe fe-arrow-up-right',
      changeColor: 'text-danger',
    }
  ];
 
  WebsiteTrafficColumn = [
    {
        header:'S.No'
    },
    {
        header:'Channel'
    },
    {
        header:'Bounce Rate'
    },
  ]
  WebsiteTraffic = [
    {
      url: 'www.pinnacleweb.com/home',
      iconClass: 'fe fe-globe',
      iconColor: 'text-primary',
      visitors: 1500,
      changePercentage: '+5.37%',
      changeIcon: 'fe fe-arrow-up-right',
      changeColor: 'text-success',
    },
    {
      url: 'www.orbitosite.com/about',
      iconClass: 'fe fe-slack',
      iconColor: 'text-secondary',
      visitors: 1200,
      changePercentage: '-2.08%',
      changeIcon: 'fe fe-arrow-down-right',
      changeColor: 'text-danger',
    },
    {
      url: 'www.apexpages.com/contact',
      iconClass: 'fe fe-zap',
      iconColor: 'text-success',
      visitors: 1000,
      changePercentage: '+10.00%',
      changeIcon: 'fe fe-arrow-down-right',
      changeColor: 'text-success',
    },
    {
      url: 'www.novawebsolutions.com/products',
      iconClass: 'fe fe-codepen',
      iconColor: 'text-info',
      visitors: 900,
      changePercentage: '+2.27%',
      changeIcon: 'fe fe-arrow-up-right',
      changeColor: 'text-success',
    },
    {
      url: 'www.infinityservices.com/services',
      iconClass: 'fe fe-globe',
      iconColor: 'text-warning',
      visitors: 850,
      changePercentage: '-3.41%',
      changeIcon: 'fe fe-arrow-down-right',
      changeColor: 'text-danger',
    },
    {
      url: 'www.echoblogworld.com/blog',
      iconClass: 'fe fe-codepen',
      iconColor: 'text-danger',
      visitors: 800,
      changePercentage: '+7.53%',
      changeIcon: 'fe fe-arrow-up-right',
      changeColor: 'text-success',
    },
    {
      url: 'www.questforanswers.com/faq',
      iconClass: 'fe fe-slack',
      iconColor: 'text-teal',
      visitors: 700,
      changePercentage: '-0.50%',
      changeIcon: 'fe fe-arrow-down-right',
      changeColor: 'text-danger',
    }
  ];

  trafficColumn = [
    {
        header:'S.No'
    },
    {
        header:'Channel'
    },
    {
        header:'Bounce Rate'
    },
    {
        header:'Target Reached'
    },
    {
        header:'Sessions'
    },
    {
        header:'Pages Per Session'
    },
    {
        header:'Avg Session Duration'
    },
  ]
  trafficSources = [
    {
      id: 1,
      source: 'Organic Search',
      sourceIcon: 'ri-search-2-line',
      iconColor: 'primary',
      percentage: '32.09%',
      visitors: 782,
      conversions: 278,
      avgPagesPerSession: 2.9,
      avgSessionDuration: '0 hrs : 0 mins : 32 secs',
    },
    {
      id: 2,
      source: 'Direct',
      sourceIcon: 'ri-globe-line',
      iconColor: 'secondary',
      percentage: '39.38%',
      visitors: 882,
      conversions: 782,
      avgPagesPerSession: 1.5,
      avgSessionDuration: '0 hrs : 2 mins : 45 secs',
    },
    {
      id: 3,
      source: 'Referral',
      sourceIcon: 'ri-share-forward-line',
      iconColor: 'success',
      percentage: '22.67%',
      visitors: 322,
      conversions: 622,
      avgPagesPerSession: 3.2,
      avgSessionDuration: '0 hrs : 38 mins : 28 secs',
    },
    {
      id: 4,
      source: 'Social',
      sourceIcon: 'ri-reactjs-line',
      iconColor: 'info',
      percentage: '25.11%',
      visitors: 389,
      conversions: 142,
      avgPagesPerSession: 1.4,
      avgSessionDuration: '0 hrs : 12 mins : 89 secs',
    },
    {
      id: 5,
      source: 'Email',
      sourceIcon: 'ri-mail-line',
      iconColor: 'warning',
      percentage: '23.79%',
      visitors: 378,
      conversions: 178,
      avgPagesPerSession: 1.6,
      avgSessionDuration: '0 hrs : 14 mins : 27 secs',
    },
    {
      id: 6,
      source: 'Paid Search',
      sourceIcon: 'ri-bank-card-line',
      iconColor: 'danger',
      percentage: '28.77%',
      visitors: 488,
      conversions: 578,
      avgPagesPerSession: 2.5,
      avgSessionDuration: '0 hrs : 16 mins : 28 secs',
    }
  ];

  analyticsActivity = [
    {
      title: 'Total Visits',
      changeType: 'Increased by',
      changePercentage: '1.75%',
      changeClass: 'success',
      iconClass: 'bx bx-bullseye fs-5',
      bgClass: 'primary-transparent',
      trend: 'up',
      value: '23,124',
      svgType: 'rounded'
    },
    {
      title: 'Total Products',
      changeType: 'Decreased by',
      changePercentage: '0.85%',
      changeClass: 'danger',
      iconClass: 'bx bx-cube-alt fs-5',
      bgClass: 'secondary-transparent',
      trend: 'down',
      value: '1.3k',
       svgType: 'rounded'
    },
    {
      title: 'Total Sales',
      changeType: 'Increased by',
      changePercentage: '3.74%',
      changeClass: 'success',
      iconClass: 'bx bx-wallet-alt fs-5',
      bgClass: 'success-transparent',
      trend: 'up',
      value: '23.89k',
       svgType: 'rounded'
    },
    {
      title: 'Total Revenue',
      changeType: 'Increased by',
      changePercentage: '0.23%',
      changeClass: 'success',
      iconClass: 'bx bx-money-withdraw fs-5',
      bgClass: 'warning-transparent',
      trend: 'up',
      value: '$187.38k',
       svgType: 'rounded'
    },
    {
      title: 'Total Profit',
      changeType: 'Decreased by',
      changePercentage: '4.95%',
      changeClass: 'danger',
      iconClass: 'bx bx-download fs-5',
      bgClass: 'info-transparent',
      trend: 'down',
      value: '$84.33k',
       svgType: 'rounded'
    },
    {
      title: 'Total Income',
      changeType: 'Increased by',
      changePercentage: '1.75%',
      changeClass: 'success',
      iconClass: 'bx bx-money fs-5',
      bgClass: 'danger-transparent',
      trend: 'up',
      value: '$983k',
      svgType: 'rounded'
    }
  ];
  
  analyticsVisitorsCountries = [
    {
      country: 'United States',
      visitors: '32,190',
      flagUrl: './assets/images/flags/us_flag.jpg',
      FlagBg:'avatar avatar-xs avatar-rounded text-default'
    },
    {
      country: 'Argentina',
      visitors: '8,798',
      FlagBg:'avatar avatar-xs avatar-rounded text-default',
      flagUrl: './assets/images/flags/argentina_flag.jpg'
    },
    {
      country: 'Canada',
      visitors: '16,885',
      FlagBg:'avatar avatar-xs avatar-rounded text-default',
      flagUrl: './assets/images/flags/canada_flag.jpg'
    },
    {
      country: 'India',
      visitors: '14,885',
      FlagBg:'avatar avatar-xs avatar-rounded text-default',
      flagUrl: './assets/images/flags/india_flag.jpg'
    },
    {
      country: 'Italy',
      visitors: '17,578',
      FlagBg:'avatar avatar-xs avatar-rounded text-default',
      flagUrl: './assets/images/flags/italy_flag.jpg'
    },
    {
      country: 'Germany',
      visitors: '10,118',
      FlagBg:'avatar avatar-xs avatar-rounded text-default',
      flagUrl: './assets/images/flags/germany_flag.jpg'
    }
  ];
  


  cardData = [
    { id:1, title:"Total Followers",
      value:'12,432',
      icon:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path></svg>`,
      footerTitle:'Increased',
      Bgcolor:'primary',
      direction:'up',
      percentageChange:'+0.892',
       textcolor:"success",
       chartOptions: TotalFollowersData
     },
    { id:2, title:"Bounce Rate",
      value:'12,432',
      icon:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z"></path></svg>`,
      footerTitle:'Increased',
      Bgcolor:'secondary',
      direction:'down',
      percentageChange:'+0.892',
      textcolor:"danger" ,
      chartOptions : BounceRateData
    },
    { id:3, title:"Conversion Rate",
        value:'12,432',
        icon:`<svg _ngcontent-ng-c1173583886="" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path _ngcontent-ng-c1173583886="" d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z"></path></svg>`,
        footerTitle:'Increased',
        Bgcolor:'success',
        direction:'down',
        percentageChange:'+0.892',
        textcolor:"danger" ,
        chartOptions :ConversionRateData
    },
  { id:4, title:"Session Duration",
            value:'3hrs',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M232,136.66A104.12,104.12,0,1,1,119.34,24,8,8,0,0,1,120.66,40,88.12,88.12,0,1,0,216,135.34,8,8,0,0,1,232,136.66ZM120,72v56a8,8,0,0,0,8,8h56a8,8,0,0,0,0-16H136V72a8,8,0,0,0-16,0Zm40-24a12,12,0,1,0-12-12A12,12,0,0,0,160,48Zm36,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72Zm24,36a12,12,0,1,0-12-12A12,12,0,0,0,220,108Z"></path></svg>`,
            footerTitle:'Increased',
            Bgcolor:'info',
            direction:'down',
            percentageChange:'+0.892',
            textcolor:"danger",
            chartOptions :SessionDurationData 
    },
            
   
   
]

 sanitizeIcon(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }

}

