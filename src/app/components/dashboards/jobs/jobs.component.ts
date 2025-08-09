import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../shared/shared.module';
import { SpkApexchartsComponent } from '../../../@spk/spk-apexcharts/apexcharts.component';
import { JobStatisticsData, StatisticsChartData } from '../../../shared/data/dashboard_chartData/jobscharts.data';

import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkSchoolCardComponent } from '../../../@spk/reusable-dashboard/spk-school-card/spk-school-card.component';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
    selector: 'app-jobs',
  imports: [RouterModule, SharedModule, SpkApexchartsComponent, SpkReusableTablesComponent, SpkDropdownsComponent, CommonModule, NgbDropdownModule, SpkSchoolCardComponent],
    templateUrl: './jobs.component.html',
    styleUrls: ['./jobs.component.scss']
})
export class JobsComponent {
  public chartOptions = StatisticsChartData;
  public chartOptions1 = JobStatisticsData;

  EmployersColumn = [
    {
      header:'Name'
    },
    {
      header:'Points'
    },
    {
      header:'Department'
    },
    {
      header:'Growth'
    }
  ]
  EmployeeProgress = [
    {
      name: 'Robert Anii',
      avatar: './assets/images/faces/15.jpg',
      position: 'Web Developer',
      projects: 25,
      department: 'Front-end Developer',
      progress: 90,
    },
    {
      name: 'Rubi Manscho',
      avatar: './assets/images/faces/8.jpg',
      position: 'UI/UX Designer',
      projects: 14,
      department: 'Manufacturing',
      progress: 80,
    },
    {
      name: 'Marckh Roz',
      avatar: './assets/images/faces/13.jpg',
      position: 'Graphic Designer',
      projects: 18,
      department: 'Marketing',
      progress: 60,
    },
    {
      name: 'Jackson Mach',
      avatar: './assets/images/faces/16.jpg',
      position: 'Junior Developer',
      projects: 10,
      department: 'Front-end Developer',
      progress: 35,
    },
  ];

  countryColumn = [
    {
      header:'Country'
    },
    {
      header:'Date'
    },
    {
      header:'Employers'
    },
    {
      header:'Action'
    }
  ]

  CountryVisit = [
    {
      country: 'Germany',
      flag: './assets/images/flags/germany_flag.jpg',
      date: '02.12.2019',
      visits: 52,
    },
    {
      country: 'Canada',
      flag: './assets/images/flags/canada_flag.jpg',
      date: '10.06.2024',
      visits: 32,
    },
    {
      country: 'Germany',
      flag: './assets/images/flags/germany_flag.jpg',
      date: '24.08.2024',
      visits: 14,
    },
    {
      country: 'USA',
      flag: './assets/images/flags/spain_flag.jpg', // Assuming this flag should be USA
      date: '03.10.2024',
      visits: 24,
    },
    {
      country: 'Sweden',
      flag: './assets/images/flags/mexico_flag.jpg', // Assuming this flag should be Sweden
      date: '06.12.2024',
      visits: 16,
    },
  ];
  employeeColumn = [
    {
      header:'S.No'
    },
    {
      header:'Candidate'
    },
    {
      header:'Category'
    },
    {
      header:'Designation'
    },
    {
      header:'Mail'
    },
    {
      header:'Location'
    },
    {
      header:'Date'
    },
    {
      header:'Type'
    },
    {
      header:'Action'
    },

  ]

  employeeData = [
    {
      id: "01",
      name: "Mayor Kelly",
      profileImg: "./assets/images/faces/1.jpg",
      department: "Manufacture",
      role: "Team Lead",
      email: "mayorkelly@gmail.com",
      location: "Germany",
      dates: "Sep 15 - Oct 12, 2023",
      employmentType: "Full Time",
    },
    {
      id: "02",
      name: "Andrew Garfield",
      profileImg: "./assets/images/faces/10.jpg",
      department: "Development",
      role: "Sr. UI Developer",
      email: "andrewgarfield@gmail.com",
      location: "Canada",
      dates: "Apr 10 - Dec 12, 2023",
      employmentType: "Full Time",
    },
    {
      id: "03",
      name: "Simon Cowel",
      profileImg: "./assets/images/faces/2.jpg",
      department: "Service",
      role: "Sr. UI Developer",
      email: "simoncowel234@gmail.com",
      location: "Europe",
      dates: "Sep 15 - Oct 12, 2023",
      employmentType: "Part Time",
    },
    {
      id: "04",
      name: "Mirinda Hers",
      profileImg: "./assets/images/faces/11.jpg",
      department: "Marketing",
      role: "Sales Executive",
      email: "mirindahers@gmail.com",
      location: "USA",
      dates: "Apr 10 - Dec 12, 2023",
      employmentType: "Hybride",
    },
    {
      id: "05",
      name: "Andrew Garfield",
      profileImg: "./assets/images/faces/3.jpg",
      department: "Development",
      role: "Sr. UI Developer",
      email: "andrewgarfield@gmail.com",
      location: "London",
      dates: "Jun 10 - Dec 12, 2022",
      employmentType: "Freelancer",
    },
  ];

  watchlist = [
    {
      name: 'Apple',
      symbol: 'AAPL',
      price: '$150.20',
      change: '+1.50%',
      avatar: './assets/images/media/apps/apple.png',
      bgValue:'success'
    },
    {
      name: 'Google',
      symbol: 'GOOG',
      price: '$2,500.5',
      change: '-5.25%',
      avatar: './assets/images/media/apps/google.png',
      bgValue:'danger'
    },
    {
      name: 'Microsoft',
      symbol: 'MSFT',
      price: '$300.75',
      change: '+2.30%',
      avatar: './assets/images/media/apps/microsoft.png',
      bgValue:'success'
      
    },
    {
      name: 'Amazon',
      symbol: 'AMZN',
      price: '$3,000.00',
      change: '-10.50%',
      avatar: './assets/images/media/apps/amazon.png',
      bgValue:'danger'
    },
    {
      name: 'Tesla',
      symbol: 'TSLA',
      price: '$700.80',
      change: '+8.00%',
      avatar: './assets/images/media/apps/tesla.png',
      bgValue:'success'
    },
    {
      name: 'Facebook',
      symbol: 'FB',
      price: '$350.40',
      change: '-3.20%',
      avatar: './assets/images/media/apps/facebook.png',
      bgValue:'danger'
    },
  ];

  socialRequests = [
    { initials: 'SE', name: 'Software Engineer', message: 'Tech Innovations Inc.', bgClass: 'primary-transparent avatar-rounded' , textColor:'',role:'Full Time',value:'Fresher',change:' badge bg-success-transparent'},
    { initials: 'MM', name: 'Marketing Manager', message: 'Global Solutions Group', bgClass: 'secondary-transparent avatar-rounded' , textColor:'',role:'Contract',value:'2-3 yrs - Experience',change:' badge bg-info-transparent'},
    { initials: 'FA', name: 'Financial Analyst', message: 'FinanceCorp', bgClass: 'success avatar-rounded',value:'Fresher', textColor:'',role:'Part Time',change:' badge bg-success-transparent' },
    { initials: 'GD', name: 'Graphic Designer', message: 'Minds Agency', bgClass: 'info-transparent avatar-rounded', textColor:'primary',role:'Freelance',value:'+3 yrs - Experience',change:' badge bg-info-transparent' },
    { initials: 'HM', name: 'HR Manager', message: 'Pinoy Tech', bgClass: 'warning-transparent avatar-rounded', textColor:'',role:'Full Time',value:'4-5 yrs - Experience',change:' badge bg-info-transparent' },
     ];

     activities = [
      {
        initials: 'JD',
        name: 'John Doe',
        action: 'Created job posting for "Software Engineer"',
        date: '27 May, 2024 - 10:15 AM',
        avatarClass: 'text-primary',
        BgColor:'primary'
      },
      {
        initials: 'MJ',
        name: 'Michael Johnson',
        action: 'Updated job status to "Filled" for "Project Manager"',
        date: '25 May, 2024 - 11:45 AM',
        avatarClass: 'text-secondary',
        BgColor:'secondary'
      },
      {
        imageUrl: './assets/images/faces/2.jpg',
        name: 'Emily Williams',
        action: 'Sent interview invitation for "Data Analyst" role to Jackson Rivera.',
        date: '24 May, 2024 - 9:00 AM',
        avatarClass: 'text-info',
        BgColor:'info'
      },
      {
        initials: 'DB',
        name: 'David Brown',
        action: 'Rejected job application for "Graphic Designer"',
        date: '23 May, 2024 - 03:20 PM',
        avatarClass: 'text-success',
        BgColor:'success'
      },
    ];

    stats = [
      {
        title: 'Total Employers',
        value: 256,
        change: '+3.32%',
        changeClass: 'text-success',
        iconPath: '0 0 256 256',
        iconClass: 'bg-primary-transparent'
      },
      {
        title: 'Total Candidates',
        value: '4,026',
        change: '-0.90%',
        changeClass: 'text-danger',
        iconPath: '0 0 256 256',
        iconClass: 'bg-secondary-transparent'
      },
      {
        title: 'Total Locations',
        value: 48,
        change: '+2.43%',
        changeClass: 'text-success',
        iconPath: '0 0 256 256',
        iconClass: 'bg-success-transparent'
      },
      {
        title: 'Resume Generate',
        value: '34%',
        change: '+0.51%',
        changeClass: 'text-success',
        iconPath: '0 0 256 256',
        iconClass: 'bg-info-transparent'
      },
      {
        title: 'Active Subscribers',
        value: '1,468',
        change: '-5.95%',
        changeClass: 'text-danger',
        iconPath: '0 0 256 256',
        iconClass: 'bg-warning-transparent'
      }
    ];
}
  