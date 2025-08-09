import { Component} from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ChannelsChartData, ConversionChartData, CustomersChartData, DealsChartData, LeadsOverviewData, ProjectAnalysisChartData, RevenueChartData } from '../../../shared/data/dashboard_chartData/crmcharts.data';
import { SpkApexchartsComponent } from '../../../@spk/spk-apexcharts/apexcharts.component';
import { NgbModule, NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { SpkProjectCardComponent } from '../../../@spk/reusable-dashboard/spk-project-card/spk-project-card.component';
import { SpkSchoolCardComponent } from '../../../@spk/reusable-dashboard/spk-school-card/spk-school-card.component';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
  selector: 'app-crm',
  standalone: true,
  imports: [CommonModule, SharedModule, NgbModule, NgbNavModule, NgbTooltipModule, SpkApexchartsComponent, SpkProjectCardComponent, SpkSchoolCardComponent, SpkReusableTablesComponent, SpkDropdownsComponent],
  templateUrl: './crm.component.html',
  styleUrl: './crm.component.scss'
})
export class CrmComponent {
  public chartOptions = CustomersChartData;
  public chartOptions1 = RevenueChartData;
  public chartOptions2 = ConversionChartData;
  public chartOptions3 = DealsChartData;
  public chartOptions4 = LeadsOverviewData;
  public chartOptions5 = ProjectAnalysisChartData;
  public chartOptions6 = ChannelsChartData;

  taskActivities = [
    {
      label: 'Direct',
      count: 42.34,
      percentage: '0.56%',
      percentageClass: 'text-success',
      itemClass: 'male',
      iconClass: 'ti ti-arrow-narrow-up'
    },
    {
      label: 'Referral',
      count: 13,
      percentage: '12.85%',
      percentageClass: 'text-success',
      itemClass: 'female',
      iconClass: 'ti ti-arrow-narrow-up'
    },
    {
      label: 'Social',
      count: 62,
      percentage: '4.45%',
      percentageClass: 'text-danger',
      itemClass: 'others',
      iconClass: 'ti ti-arrow-narrow-down'
    },
    {
      label: 'Organic',
      count: 22.46,
      percentage: '5.75%',
      percentageClass: 'text-success',
      itemClass: 'not-mentioned',
      iconClass: 'ti ti-arrow-narrow-up'
    }
  ];

  DealsColumn = [
    {
      header :'Deal'
    },
    {
      header :'Amount'
    },
    {
      header :'Probability'
    },
    {
      header :'Status'
    },
  ]
  
  DealsData = [ 
    {
    name: 'Socrates Itumay',
    avatar: './assets/images/faces/2.jpg',
    email: 'socratesitumay@gmail.com',
    amount: '$54,900',
    progress: '24%',
    status: 'Qualified',
    statusClass: 'bg-primary-transparent'
  },
  {
    name: 'Json Taylor',
    avatar: './assets/images/faces/3.jpg',
    email: 'jsontaylor2416@gmail.com',
    amount: '$16,800',
    progress: '70%',
    status: 'Review',
    statusClass: 'bg-warning-transparent'
  },
  {
    name: 'Inferno Tech Et.',
    avatar: './assets/images/company-logos/1.png',
    email: 'InfernoTech@gmail.com',
    amount: '$12,000',
    progress: '90%',
    status: 'Closed Won',
    statusClass: 'bg-success-transparent'
  },
  {
    name: 'Andrew Garfield',
    avatar: './assets/images/faces/13.jpg',
    email: 'andrewgarfield@gmail.com',
    amount: '$16,800',
    progress: '70%',
    status: 'Closed Lost',
    statusClass: 'bg-danger-transparent'
  },
  {
    name: 'Jack Pvt.Ltd',
    avatar: './assets/images/company-logos/8.png',
    email: 'JackTech@gmail.com',
    amount: '$12,000',
    progress: '90%',
    status: 'Closed Won',
    statusClass: 'bg-success-transparent'
  },
  {
    name: 'Athetic Corp',
    avatar: './assets/images/company-logos/9.png',
    email: 'atheticcorp33@gmail.com',
    amount: '$15,000',
    progress: '70%',
    status: 'Review',
    statusClass: 'bg-warning-transparent'
  }
];

LeadColumn = [
  {
    header :'S.NO'
  },
  {
    header :'Lead'
  },
  {
    header :'Phone Number'
  },
  {
    header :'Company Name'
  },
  {
    header :'Location'
  },
  {
    header :'Status'
  },
  {
    header :'Date'
  },
  {
    header :'Amount'
  },
  {
    header :'Action'
  }
]

LeadData  = [
  {
    id: 1,
    name: 'Socrates Itumay',
    avatar: './assets/images/faces/2.jpg',
    email: 'socratesitumay@gmail.com',
    phone: '+1(555) 354 2345',
    company: 'Beckle Heth Corp.',
    location: 'Germany',
    status: 'Won Lead',
    statusClass: 'bg-success-transparent',
    date: '02-04-2024',
    amount: '$1500'
  },
  {
    id: 2,
    name: 'Luke Cooper',
    avatar: './assets/images/faces/12.jpg',
    email: 'LukeCooper@gmail.com',
    phone: '+1(555) 873 8923',
    company: 'Lackme Info Et.',
    location: 'London',
    status: 'New Lead',
    statusClass: 'bg-primary-transparent',
    date: '03-04-2024',
    amount: '$20000'
  },
  {
    id: 3,
    name: 'Rony Brad',
    avatar: './assets/images/faces/14.jpg',
    email: 'RonyBrad@gmail.com',
    phone: '+1(555) 347 0923',
    company: 'Mevengo Tech Et Sed',
    location: 'USA',
    status: 'New Lead',
    statusClass: 'bg-primary-transparent',
    date: '04-04-2024',
    amount: '$10000'
  },
  {
    id: 4,
    name: 'Sophia Khud',
    avatar: './assets/images/faces/4.jpg',
    email: 'SophiaKhud@gmail.com',
    phone: '+1(555) 674 7824',
    company: 'Jeveda Group En.',
    location: 'Canada',
    status: 'Lost Lead',
    statusClass: 'bg-danger-transparent',
    date: '05-04-2024',
    amount: '$30000'
  },
  {
    id: 5,
    name: 'Cooper Hard',
    avatar: './assets/images/faces/3.jpg',
    email: 'CooperHard@gmail.com',
    phone: '+1(555) 985 2893',
    company: 'Neveia Exp Sid.',
    location: 'England',
    status: 'New Lead',
    statusClass: 'bg-primary-transparent',
    date: '06-04-2024',
    amount: '$10000'
  }
];

tasksToday = [
  { title: 'Added New Customers', description: 'Invi sadip takimata', status: 'Progress', checked: false, badgeClass: 'bg-primary-transparent' },
  { title: 'Sales Accounting', description: 'Eos dolor ea', status: 'Completed', checked: true, badgeClass: 'bg-success-transparent' },
  { title: 'Meeting with Sales Team', description: 'Nonumy erat ipsum ut ipsum', status: 'Not Started', checked: false, badgeClass: 'bg-danger-transparent' },
  { title: 'Added New Customers', description: 'Invi sadip takimata', status: 'Progress', checked: false, badgeClass: 'bg-primary-transparent' },
  { title: 'Customers Meeting', description: 'Sed labore ut sed', status: 'Completed', checked: true, badgeClass: 'bg-success-transparent' }
];

tasksUpcoming = [
  { title: 'Build a New Team', description: 'Nonumy erat ipsum ut ipsum', status: 'Not Started', checked: false, badgeClass: 'bg-danger-transparent' },
  { title: 'Meeting with Sales Team', description: 'Consetetur et amet dolor', status: 'Not Started', checked: false, badgeClass: 'bg-danger-transparent' },
  { title: 'Created a New Task today', description: 'Nonumy erat ipsum ut ipsum', status: 'Not Started', checked: false, badgeClass: 'bg-danger-transparent' },
  { title: 'Build a New Team', description: 'Nonumy erat ipsum ut ipsum', status: 'Not Started', checked: false, badgeClass: 'bg-danger-transparent' },
  { title: '27 New people joined summit', description: 'Accusam aliquyam ea sea', status: 'Not Started', checked: false, badgeClass: 'bg-danger-transparent' }
];

tasksCompleted = [
  { title: 'Meeting with Sales Team', description: 'Eos dolor ea', status: 'Completed', checked: true, badgeClass: 'bg-success-transparent' },
  { title: 'Replied to new support request', description: 'Eos clita dolor elitr et', status: 'Completed', checked: true, badgeClass: 'bg-success-transparent' },
  { title: 'Update of calendar events', description: 'Sadi tempor guberg rebum', status: 'Completed', checked: true, badgeClass: 'bg-success-transparent' },
  { title: 'Added New Customers', description: 'Sadi tempor guberg rebum', status: 'Completed', checked: true, badgeClass: 'bg-success-transparent' },
  { title: 'Meeting with Sales Team', description: 'Eos dolor ea', status: 'Completed', checked: true, badgeClass: 'bg-success-transparent' }
];

crmTopDeals = [
  { name: 'Socrates Itumay', email: 'socratesitumay@gmail.com', amount: '$1,835', image: './assets/images/faces/2.jpg' },
  { name: 'Json Taylor', email: 'jsontaylor2416@gmail.com', amount: '$2,415', image: './assets/images/faces/3.jpg' },
  { name: 'Suzika Stallone', email: 'suzikastallone3214@gmail.com', amount: '$2,314', image: './assets/images/faces/4.jpg' },
  { name: 'Angelina Hose', email: 'AngelinaHose3214@gmail.com', amount: '$2,624', image: './assets/images/faces/5.jpg' },
  { name: 'Selena Deoyl', email: 'selenadeoyl114@gmail.com', amount: '$1,035', image: './assets/images/faces/6.jpg' },
  { name: 'Charlie Davieson', email: 'charliedavieson@gmail.com', amount: '$1,835', image: './assets/images/faces/10.jpg' },
  { name: 'Leo Phillip', email: 'leophillips@gmail.com', amount: '$3,856', image: './assets/images/faces/1.jpg' }
];

crmRecentActivities = [
  { title: 'New Lead', date: '09 July 2021', description: 'John Smith contacted via website form submission' },
  { title: 'Follow-up', date: '05 July 2021', description: 'Emma Johnson called client for initial consultation' },
  { title: 'Meeting Scheduled', date: '29 June 2021', description: 'David Lee set up a meeting with potential client for next week' },
  { title: 'Deal Closed', date: '09 July 2021', description: 'Sarah Thompson finalized a contract with XYZ Company worth $10,000' },
  { title: 'Task Completed', date: '25 Aug 2021', description: 'Mark Williams finished product demo' }
];

cardsData = [
  {
    title: 'Total Customers',
    value: '2,54,244',
    badgeClass: 'bg-success-transparent',
    badgeIcon: 'ti-arrow-narrow-up',
    badgeChange: '0.16%',
    chartOptions: 'chartOptions',
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path></svg>'
  },
  {
    title: 'Total Revenue',
    value: '$1.465M',
    badgeClass: 'bg-danger-transparent',
    badgeIcon: 'ti-arrow-narrow-down',
    badgeChange: '0.16%',
    chartOptions: 'chartOptions1',
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M40,56V184a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V80a8,8,0,0,0-8-8H56A16,16,0,0,1,40,56h0A16,16,0,0,1,56,40H192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="180" cy="132" r="12"/></svg>'
  },
  {
    title: 'Conversion Ratio',
    value: '26.97%',
    badgeClass: 'bg-success-transparent',
    badgeIcon: 'ti-arrow-narrow-up',
    badgeChange: '2.98%',
    chartOptions: 'chartOptions2',
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polyline points="232 128 232 184 128 184 128 72 24 72 24 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>'
  },
  {
    title: 'Total Deals',
    value: '12,644',
    badgeClass: 'bg-success-transparent',
    badgeIcon: 'ti-arrow-narrow-up',
    badgeChange: '1.34%',
    chartOptions: 'chartOptions3',
    iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="32" y="64" width="192" height="144" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M168,64V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M224,118.31A191.09,191.09,0,0,1,128,144a191.14,191.14,0,0,1-96-25.68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="112" y1="112" x2="144" y2="112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>'
  }
];

categories = [
  {
    title: 'Hot Leads',
    change: 'Increased by',
    changePercentage: '0.64%',
    changeClass: 'text-success',
    icon: 'ti ti-trending-up',
    count: 1754,
    countLabel: 'Leads'
  },
  {
    title: 'Warm Leads',
    change: 'Decreased by',
    changePercentage: '2.75%',
    changeClass: 'text-danger',
    icon: 'ti ti-trending-down',
    count: 1234,
    countLabel: 'Leads'
  },
  {
    title: 'Cold Leads',
    change: 'Increased by',
    changePercentage: '1.54%',
    changeClass: 'text-success',
    icon: 'ti ti-trending-up',
    count: 878,
    countLabel: 'Leads'
  },
  {
    title: 'Lost Leads',
    change: 'Increased by',
    changePercentage: '1.54%',
    changeClass: 'text-success',
    icon: 'ti ti-trending-up',
    count: 270,
    countLabel: 'Leads'
  }
];

}
