import {  Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VisitorsData, RevenueOverviewsData } from '../../../shared/data/dashboard_chartData/ecommercecharts.data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SpkApexchartsComponent } from '../../../@spk/spk-apexcharts/apexcharts.component';

import { CommonModule } from '@angular/common';
import { SpkSchoolCardComponent } from '../../../@spk/reusable-dashboard/spk-school-card/spk-school-card.component';
import { SpkDashboardCardComponent } from '../../../@spk/reusable-dashboard/spk-dashboard-card/spk-dashboard-card.component';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
    selector: 'app-ecommerce',
  imports: [RouterModule, SharedModule, NgApexchartsModule, NgbModule, SpkDashboardCardComponent, SpkDropdownsComponent, SpkApexchartsComponent, SpkReusableTablesComponent, CommonModule, SpkSchoolCardComponent],
    templateUrl: './ecommerce.component.html',
    styleUrls: ['./ecommerce.component.scss']
})
export class EcommerceComponent  {
  public chartOptions = RevenueOverviewsData;
  public chartOptions1 = VisitorsData;

  constructor(private sanitizer : DomSanitizer){}
  
  sanitizeIcon(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }

  orderSummary = [
    {
      status: "Delivered",
      icon: "ti ti-box",
      color: "bg-primary-transparent",
      percentageChange: 0.75,
      count: 1754,
      changeType: "up",
      changeColor: "text-success",
    },
    {
      status: "Cancelled",
      icon: "ti ti-circle-x",
      color: "bg-secondary-transparent",
      percentageChange: -5.64,
      count: 1234,
      changeType: "down",
      changeColor: "text-danger",
    },
    {
      status: "Pending",
      icon: "ti ti-file-alert",
      color: "bg-success-transparent",
      percentageChange: 2.90,
      count: 878,
      changeType: "up",
      changeColor: "text-success",
    },
    {
      status: "Returned",
      icon: "ti ti-jump-rope",
      color: "bg-info-transparent",
      percentageChange: 1.55,
      count: 270,
      changeType: "up",
      changeColor: "text-success",
    },
  ];

  transactionsColumn = [
    {
      header:'Order ID'
    },
    {
      header:'Customer'
    },
    {
      header:'Date'
    },
    {
      header:'Amount'
    },
    {
      header:'Status'
    },
  ]
  transactions = [
    {
      id: '#SPK781',
      name: 'Simon Cowall',
      email: 'simoncowall209@gmail.com',
      date: 'Feb 22, 2024',
      amount: '$1,234.78',
      status: 'Paid',
      avatar: './assets/images/faces/1.jpg',
      statusClass: 'bg-success-transparent'
    },
    {
      id: '#SPK782',
      name: 'Meisha Kerr',
      email: 'meishakerr766@gmail.com',
      date: 'Feb 23, 2024',
      amount: '$2,452.00',
      status: 'Unpaid',
      avatar: './assets/images/faces/4.jpg',
      statusClass: 'bg-danger-transparent'
    },
    {
      id: '#SPK783',
      name: 'Jessica',
      email: 'jessica041@gmail.com',
      date: 'Feb 24, 2024',
      amount: '$1,544.99',
      status: 'Paid',
      avatar: './assets/images/faces/10.jpg',
      statusClass: 'bg-success-transparent'
    },
    {
      id: '#SPK784',
      name: 'Amanda B',
      email: 'amandab144@gmail.com',
      date: 'Feb 25, 2024',
      amount: '$1,645.49',
      status: 'Pending',
      avatar: './assets/images/faces/2.jpg',
      statusClass: 'bg-warning-transparent'
    },
    {
      id: '#SPK785',
      name: 'Jason Stathman',
      email: 'sjasonstathman@gmail.com',
      date: 'Feb 22, 2024',
      amount: '$4,550.99',
      status: 'Unpaid',
      avatar: './assets/images/faces/11.jpg',
      statusClass: 'bg-danger-transparent'
    }
  ];
  ordersColumn = [
    {
      header:'Date'
    },
    {
      header:'Client Name'
    },
    {
      header:'Product'
    },
    {
      header:'Transaction ID'
    },
    {
      header:'Status'
    },
    {
      header:'Cost'
    },
    {
      header:'Payment Method'
    },
    {
      header:'Actions'
    }
  ]

  Order = [
    {
      date: '10-11-21',
      customerName: 'Santi Argo',
      customerAvatar: './assets/images/ecommerce/jpg/2.jpg',
      description: 'Sed vero et ipsum et',
      orderId: '#23412858169',
      status: 'Shipped',
      statusClass: 'bg-primary-transparent',
      amount: '$18,900',
      paymentMethod: 'Cash On Delivery'
    },
    {
      date: '26-01-22',
      customerName: 'Carmen Goh',
      customerAvatar: './assets/images/ecommerce/jpg/02.jpg',
      description: 'Rebum dolores at erat ipsum',
      orderId: '#51702935164',
      status: 'Pending',
      statusClass: 'bg-secondary-transparent',
      amount: '$3,200',
      paymentMethod: 'Online'
    },
    {
      date: '01-01-22',
      customerName: 'Ruby Bartlett',
      customerAvatar: './assets/images/ecommerce/jpg/03.jpg',
      description: 'No voluptua amet sit clita',
      orderId: '#31201254680',
      status: 'Cancelled',
      statusClass: 'bg-danger-transparent',
      amount: '$15,500',
      paymentMethod: 'Online'
    },
    {
      date: '06-08-21',
      customerName: 'Anne Gloindian',
      customerAvatar: './assets/images/ecommerce/jpg/04.jpg',
      description: 'No stet eos justo voluptua',
      orderId: '#91012557664',
      status: 'Cancelled',
      statusClass: 'bg-danger-transparent',
      amount: '$6,700',
      paymentMethod: 'Cash On Delivery'
    },
    {
      date: '17-09-21',
      customerName: 'Emma Grate',
      customerAvatar: './assets/images/ecommerce/jpg/06.jpg',
      description: 'Ipsum et sit diam ut',
      orderId: '#71802951620',
      status: 'Delivered',
      statusClass: 'bg-success-transparent',
      amount: '$22,600',
      paymentMethod: 'Online'
    }
  ];

  cardData = [
    {id:1, title:"Total Order",
      value:'15,432',
      icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M209.67,208H46.33a8.06,8.06,0,0,1-8-7.07l-14.25-120a8,8,0,0,1,8-8.93H223.92a8,8,0,0,1,8,8.93l-14.25,120A8.06,8.06,0,0,1,209.67,208Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M88,104V64a40,40,0,0,1,80,0v40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`,
      footerTitle:'This Months',
      Bgcolor:'primary',
      percentageChange:'+4.2%',
     textcolor:"success" },

    {id:2, title:"Total Visitors",
      value:'96,635',
      icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="120" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path d="M63.8,199.37a72,72,0,0,1,128.4,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="176" y1="56" x2="224" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="200" y1="32" x2="200" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M222.67,112A95.92,95.92,0,1,1,144,33.33" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`,
      footerTitle:'This Month',
      Bgcolor:'secondary',
      percentageChange:'-2.54%',
      textcolor:"danger" },

    {id:3, title:"Total Sales",
        value:'27,525',
        icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="48 208 48 136 96 136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><line x1="224" y1="208" x2="32" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="96 208 96 88 152 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polyline points="152 208 152 40 208 40 208 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>`,
        footerTitle:'This Month',
        Bgcolor:'success',
        percentageChange:'+0.94%%',
        textcolor:"success" },

    {id:4, title:"Total Products",
          value:'80,032',
          icon:` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="32.7 76.92 128 129.08 223.3 76.92" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><path d="M131.84,25l88,48.18a8,8,0,0,1,4.16,7v95.64a8,8,0,0,1-4.16,7l-88,48.18a8,8,0,0,1-7.68,0l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,4.16-7l88-48.18A8,8,0,0,1,131.84,25Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="128" y1="129.09" x2="128" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>`,
          footerTitle:'This Month',
          Bgcolor:'info',
          percentageChange:'+5.20%',
          textcolor:"success" },
]

ecommerceTopSellingList = [
  {
    name: 'Noice Headphones',
    category: 'Electronics',
    price: '$49',
    sales: '15,064 Sales',
    imageUrl: './assets/images/ecommerce/jpg/2.jpg',
    bgValue:'muted',
  },
  {
    name: 'Sneakers',
    category: 'Fashion',
    price: '$799',
    sales: '14,862 Sales',
    bgValue:'muted',
    imageUrl: './assets/images/ecommerce/jpg/02.jpg'
  },
  {
    name: 'School Bags',
    category: 'Education',
    price: '$99',
    sales: '20,124 Sales',
    bgValue:'muted',
    imageUrl: './assets/images/ecommerce/jpg/03.jpg'
  },
  {
    name: 'Sun Glasses',
    category: 'Fashion',
    price: '$320',
    sales: '18,673 Sales',
    bgValue:'muted',
    imageUrl: './assets/images/ecommerce/jpg/04.jpg'
  },
  {
    name: 'Refrigerator',
    category: 'Electronics',
    price: '$1,299',
    sales: '15,233 Sales',
    bgValue:'muted',
    imageUrl: './assets/images/ecommerce/jpg/05.jpg'
  },
  {
    name: 'Workon Clock',
    category: 'Clocks',
    price: '$249',
    sales: '12,451 Sales',
    bgValue:'muted',
    imageUrl: './assets/images/ecommerce/jpg/3.jpg'
  },
  {
    name: 'Dizo Digital Camera',
    category: 'Gadgets',
    price: '$1499',
    sales: '9,754 Sales',
    bgValue:'muted',
    imageUrl: './assets/images/ecommerce/jpg/06.jpg'
  }
];

ecommerceVisitorsCountryList = [
  {
    country: 'France',
    visitors: '1,354',
    progress: 80,
    progressBarClass: 'bg-primary'
  },
  {
    country: 'Argentina',
    visitors: '1,176',
    progress: 72,
    progressBarClass: 'bg-secondary'
  },
  {
    country: 'China',
    visitors: '943',
    progress: 67,
    progressBarClass: 'bg-success'
  },
  {
    country: 'Canada',
    visitors: '675',
    progress: 53,
    progressBarClass: 'bg-warning'
  },
  {
    country: 'Germany',
    visitors: '1,253',
    progress: 75,
    progressBarClass: 'bg-info'
  },
  {
    country: 'Russia',
    visitors: '367',
    progress: 39,
    progressBarClass: 'bg-danger'
  }
];

ecommerceTopCustomersList = [
  {
    name: 'Emma Wilson',
    initials: 'EW',
    purchases: '15 Purchases',
    saleValue: '$1,835',
    bgValue:' fw-semibold h6',
    textColor:'muted',
    badgeClass: 'primary-transparent',
    title:'Sale Value',
    Verified:true
  },
  {
    name: 'Robert Lewis',
    initials: 'RL',
    purchases: '18 Purchases',
    saleValue: '$2,415',
     title:'Sale Value',
     textColor:'muted',
     bgValue:' fw-semibold h6',
    badgeClass: 'secondary-transparent',
    Verified:true
  },
  {
    name: 'Angelina Hose',
    initials: 'AH',
    purchases: '21 Purchases',
    saleValue: '$2,341',
    title:'Sale Value',
    textColor:'muted',
    bgValue:' fw-semibold h6',
    badgeClass: 'success-transparent',
    Verified:true
  },
  {
    name: 'Samantha Sam',
    initials: 'SS',
    purchases: '24 Purchases',
    saleValue: '$2,624',
    title:'Sale Value',
    textColor:'muted',
    bgValue:' fw-semibold h6',
    badgeClass: 'warning-transparent',
    Verified:true
  },
  {
    name: 'Dwayne Smith',
    initials: 'DS',
    purchases: '32 Purchases',
    saleValue: '$3,172',
    title:'Sale Value',
    textColor:'muted',
    bgValue:' fw-semibold h6',
    badgeClass: 'info-transparent',
    Verified:true
  },
  {
    name: 'Alexa Healy',
    initials: 'AH',
    purchases: '45 Purchases',
    saleValue: '$2,534',
    title:'Sale Value',
    textColor:'muted',
    bgValue:' fw-semibold h6',
    badgeClass: 'danger-transparent',
    Verified:true
  }
];



}

