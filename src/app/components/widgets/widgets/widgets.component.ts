import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SalesRevenueData, TotalCustomerseData,TotalProfiteData,TotalRevenueData, TotalSalesData, TotalSummaryData } from '../../../shared/data/widgetsCharts.data';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkApexchartsComponent } from '../../../@spk/spk-apexcharts/apexcharts.component';
import { CommonModule } from '@angular/common';
import { SpkSalesCardComponent } from '../../../@spk/spk-reusable-widgets/spk-sales-card/spk-sales-card.component';
import { SpkTotalsalesCardComponent } from '../../../@spk/spk-reusable-widgets/spk-totalsales-card/spk-totalsales-card.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { SpkTotalEmployeesCardComponent } from '../../../@spk/spk-reusable-widgets/spk-total-employees-card/spk-total-employees-card.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-widgets',
    imports: [SharedModule, NgbModule, SpkApexchartsComponent, CommonModule, RouterModule, SpkSalesCardComponent, SpkTotalsalesCardComponent, SpkDropdownsComponent, SpkTotalEmployeesCardComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './widgets.component.html',
    styleUrl: './widgets.component.scss'
})
export class WidgetsComponent {
  public chartOptions7 = TotalProfiteData;
  public chartOptions1 = TotalSalesData;
  public chartOptions2 = TotalRevenueData;
  public chartOptions3 = TotalCustomerseData ;
  public chartOptions4 = TotalSummaryData;
  public chartOptions5 = SalesRevenueData;

  salesCards = [
    {
      bgClass: 'bg-primary-transparent',
      iconClass: 'ri-briefcase-4-fill fs-20',
      title: 'Number Of Sales',
      value: '12,432',
      badgeClass: 'bg-success',
      percentage: '9%',
      description: 'This Month',
      linkText: 'View More',
    },
    {
      bgClass: 'bg-secondary-transparent',
      iconClass: 'ri-money-rupee-circle-fill fs-20',
      title: 'Profit By Sale',
      value: '$5,472',
      badgeClass: 'bg-danger',
      percentage: '12%',
      description: 'This Month',
      linkText: 'View More',
    },
    {
      bgClass: 'bg-success-transparent',
      iconClass: 'ri-discount-percent-fill fs-20',
      title: 'Total Revenue',
      value: '$1,24,624',
      badgeClass: 'bg-success',
      percentage: '6%',
      description: 'This Month',
      linkText: 'View More',
    },
    {
      bgClass: 'bg-info-transparent',
      iconClass: 'ri-group-fill fs-20',
      title: 'Total Customers',
      value: '1,032',
      badgeClass: 'bg-success',
      percentage: '8%',
      description: 'This Month',
      linkText: 'View More',
    },
    {
      bgClass: 'bg-warning-transparent',
      iconClass: 'ri-eye-fill fs-20',
      title: 'Page Views',
      value: '5,484',
      badgeClass: 'bg-danger',
      percentage: '11%',
      description: 'This Month',
      linkText: 'View More',
    },
  ];

  totalSalesCards = [
    {
      iconClass: 'ri-bar-chart-box-line fs-18',
      avatarBgClass: 'bg-primary-transparent',
      title: 'Total Sales',
      value: '42,312',
      percentage: '+1.64%',
      percentageClass: 'bg-success-transparent',
      chartOptions: this.chartOptions1,
      dropdownOptions: ['Week', 'Day', 'Year'],
    },
    {
      iconClass: 'ri-wallet-3-line fs-18',
      avatarBgClass: 'bg-secondary-transparent',
      title: 'Revenue',
      value: '12,754',
      percentage: '+1.64%',
      percentageClass: 'bg-success-transparent',
      chartOptions: this.chartOptions2,
      dropdownOptions: ['Week', 'Day', 'Year'],
    },
    {
      iconClass: 'ri-group-line fs-16',
      avatarBgClass: 'bg-success-transparent',
      title: 'Customers',
      value: '32,474',
      percentage: '-0.64%',
      percentageClass: 'bg-danger-transparent',
      chartOptions: this.chartOptions3,
      dropdownOptions: ['Week', 'Day', 'Year'],
    },
  ];

  countries = [
    { name: 'Canada', country: 'canada',flageClass:'item1', visits: '6,192', flag: './assets/images/flags/canada_flag.jpg' },
    { name: 'French',country: 'french',flageClass:'item2', visits: '12,675', flag: './assets/images/flags/french_flag.jpg' },
    { name: 'Argentina',country: 'argentina', flageClass:'item3',visits: '14,673', flag: './assets/images/flags/argentina_flag.jpg' },
    { name: 'Spain',country: 'spain',flageClass:'item4', visits: '14,673', flag: './assets/images/flags/spain_flag.jpg' },
    { name: 'Germany',country: 'germany', flageClass:'item5',visits: '14,673', flag: './assets/images/flags/germany_flag.jpg' },
    { name: 'China',country: 'china',flageClass:'item6', visits: '14,673', flag: './assets/images/flags/china_flag.jpg' },
  ];

  categories = [
    {
      name: 'Food and restaurants',
      icon: 'ti ti-chef-hat',
      iconColorClass: 'text-primary',
      borderColorClass: 'border-primary',
      percentage: '0.78%',
      percentageClass: 'text-success',
      badgeClass: 'bg-success-transparent',
      value: '6,192',
    },
    {
      name: 'Books and shopping',
      icon: 'ti ti-book',
      iconColorClass: 'text-secondary',
      borderColorClass: 'border-secondary',
      percentage: '0.12%',
      percentageClass: 'text-danger',
      badgeClass: 'bg-danger-transparent',
      value: '5,932',
    },
    {
      name: 'Booking car',
      icon: 'ti ti-car',
      iconColorClass: 'text-success',
      borderColorClass: 'border-success',
      percentage: '0.12%',
      percentageClass: 'text-success',
      badgeClass: 'bg-success-transparent',
      value: '5,932',
    },
    {
      name: 'Home Furnitures',
      icon: 'ti ti-sofa',
      iconColorClass: 'text-info',
      borderColorClass: 'border-info',
      percentage: '0.54%',
      percentageClass: 'text-danger',
      badgeClass: 'bg-danger-transparent',
      value: '5,383',
    },
    {
      name: 'Beauty Products',
      icon: 'ti ti-shirt',
      iconColorClass: 'text-warning',
      borderColorClass: 'border-warning',
      percentage: '0.25%',
      percentageClass: 'text-success',
      badgeClass: 'bg-success-transparent',
      value: '4,825',
    },
  ];

  productBySale = [
    {
      title: 'Home Furniture',
      description: 'Increased by +12%',
      amount: '$12,230',
      progress: 80,
      progressClass: 'bg-primary',
      avatarClass: 'bg-primary-transparent svg-primary',
      borderClass: 'border-primary',
      icon: 'ti ti-home'
    },
    {
      title: 'Fashion',
      description: 'Increased by +11.2%',
      amount: '$15,270',
      progress: 70,
      progressClass: 'bg-secondary',
      avatarClass: 'bg-secondary-transparent svg-secondary',
      borderClass: 'border-secondary',
      icon: 'ti ti-shirt'
    },
    {
      title: 'Electronics',
      description: 'Increased by +15%',
      amount: '$11,230',
      progress: 50,
      progressClass: 'bg-success',
      avatarClass: 'bg-success-transparent svg-success',
      borderClass: 'border-success',
      icon: 'ti ti-device-laptop'
    },
    {
      title: 'Groceries',
      description: 'Increased by +9%',
      amount: '$22,130',
      progress: 60,
      progressClass: 'bg-info',
      avatarClass: 'bg-info-transparent svg-info',
      borderClass: 'border-info',
      icon: 'ti ti-basket'
    }
  ];

  constructor(private sanitizer : DomSanitizer) {
  } 
    sanitizeIcon(iconSvg: string): SafeHtml {
      return this.sanitizer.bypassSecurityTrustHtml(iconSvg);
    }

  cards = [
    {
      title: 'Total Employees',
      value: '24,152',
      trend: '+0.5%',
      trendIcon: 'fe fe-arrow-up',
      trendClass: 'text-success',
      svgClass: 'bg-primary',
      textClass: 'text-primary',
      iconSvg: `
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"> <rect width="256" height="256" fill="none"></rect> <circle cx="84" cy="108" r="52" opacity="0.2"></circle> <path d="M10.23,200a88,88,0,0,1,147.54,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path> <path d="M172,160a87.93,87.93,0,0,1,73.77,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path> <circle cx="84" cy="108" r="52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"> </circle> <path d="M152.69,59.7A52,52,0,1,1,172,160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path> </svg>
      `
    },
    {
      title: 'Total Revenue',
      value: '$55,786',
      trend: '-1.2%',
      trendIcon: 'fe fe-arrow-down',
      trendClass: 'text-danger',
      svgClass: 'bg-secondary',
      textClass: 'text-secondary',
      iconSvg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"> <rect width="256" height="256" fill="none"></rect> <path d="M40,192a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V88a8,8,0,0,0-8-8H56A16,16,0,0,1,40,64Z" opacity="0.2"></path> <path d="M40,64V192a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V88a8,8,0,0,0-8-8H56A16,16,0,0,1,40,64h0A16,16,0,0,1,56,48H192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path> <circle cx="180" cy="140" r="12"></circle> </svg>
      `
    },
    {
      title: 'Total Profit',
      value: '$41,633',
      trend: '+1.3%',
      trendIcon: 'fe fe-arrow-up',
      trendClass: 'text-success',
      svgClass: 'bg-success',
      textClass: 'text-success',
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"> <rect width="256" height="256" fill="none"></rect> <path d="M88,216a24,24,0,0,0,24-24c0-10-8-16-8-16H216s8,6,8,16a24,24,0,0,1-24,24Z" opacity="0.2"></path> <path d="M200,176V64a24,24,0,0,0-24-24H40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path> <line x1="104" y1="104" x2="168" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line> <line x1="104" y1="136" x2="168" y2="136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line> <path d="M24,80s-8-6-8-16a24,24,0,0,1,48,0V192a24,24,0,0,0,48,0c0-10-8-16-8-16H216s8,6,8,16a24,24,0,0,1-24,24H88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path> </svg>
      `
    },
    {
      title: 'Total Balance',
      value: '$67,556',
      trend: '-0.1%',
      trendIcon: 'fe fe-arrow-down',
      trendClass: 'text-danger',
      svgClass: 'bg-info',
      textClass: 'text-info',
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"> <rect width="256" height="256" fill="none"></rect> <path d="M128,128h24a40,40,0,0,1,0,80H128Z" opacity="0.2"></path> <path d="M128,48H112a40,40,0,0,0,0,80h16Z" opacity="0.2"></path> <line x1="128" y1="24" x2="128" y2="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line> <line x1="128" y1="208" x2="128" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line> <path d="M184,88a40,40,0,0,0-40-40H112a40,40,0,0,0,0,80h40a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path> </svg>
      `
    }
  ];

  products = [
    {
      image: './assets/images/ecommerce/png/1.png',
      name: 'Sofa Chair',
      brand: 'Telicon',
      badgeClass: 'bg-primary-transparent',
      change: '+2.3%',
      price: '$12,256',
    },
    {
      image: './assets/images/ecommerce/png/14.png',
      name: 'Altra Pro Camera',
      brand: 'Mindmling Cam',
      badgeClass: 'bg-secondary-transparent',
      change: '+15.3%',
      price: '$13,567',
    },
    {
      image: './assets/images/ecommerce/png/33.png',
      name: 'Cobra Perfume',
      brand: 'Cobra',
      badgeClass: 'bg-success-transparent',
      change: '+11.6%',
      price: '$12,250',
    },
    {
      image: './assets/images/ecommerce/png/10.png',
      name: 'Alarm Clock',
      brand: 'Samsong',
      badgeClass: 'bg-info-transparent',
      change: '+15.4%',
      price: '$17,650',
    },
    {
      image: './assets/images/ecommerce/png/37.png',
      name: 'Men stylish shoe',
      brand: 'Adidas',
      badgeClass: 'bg-warning-transparent',
      change: '+16.7%',
      price: '$16,756',
    },
  ];

}
 