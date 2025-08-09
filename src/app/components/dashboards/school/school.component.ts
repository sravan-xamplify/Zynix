import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { SpkApexchartsComponent } from '../../../@spk/spk-apexcharts/apexcharts.component';
import { AttendanceChartData, OverviewChartData } from '../../../shared/data/dashboard_chartData/schoolcharts.data';
import { FlatpickrModule } from 'angularx-flatpickr';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkFlatpickrComponent } from '../../../@spk/spk-flatpickr/spk-flatpickr.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
    selector: 'app-school',
    imports: [SharedModule, NgApexchartsModule, NgbModule, OverlayscrollbarsModule, SpkFlatpickrComponent, SpkDropdownsComponent,
        SpkApexchartsComponent, FlatpickrModule, FormsModule, SpkReusableTablesComponent, CommonModule],
    templateUrl: './school.component.html',
    styleUrl: './school.component.scss'
})
export class SchoolComponent {
  public chartOptions = AttendanceChartData;
  public chartOptions1 = OverviewChartData;

  rangeValue:any

  stats = [
    {
      title: 'Students',
      count: '13,862',
      svgBg:'primary',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="32" y1="64" x2="32" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M56,216c15.7-24.08,41.11-40,72-40s56.3,15.92,72,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><polygon points="224 64 128 96 32 64 128 32 224 64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polygon><path d="M169.34,82.22a56,56,0,1,1-82.68,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`,
      change: '18.21%',
      changeDirection: 'up',
    },
    {
      title: 'Teachers',
      count: '765',
      svgBg:'secondary',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="104" cy="144" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path d="M53.39,208a56,56,0,0,1,101.22,0H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><polyline points="176 176 192 176 192 80 64 80 64 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>`,
      change: '2.32%',
      changeDirection: 'down',
    },
    {
      title: 'Awards',
      count: '24',
      svgBg:'success',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="96" y1="224" x2="160" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="128" y1="184" x2="128" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M58,128H48A32,32,0,0,1,16,96V80a8,8,0,0,1,8-8H56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M198,128h10a32,32,0,0,0,32-32V80a8,8,0,0,0-8-8H200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M56,48H200v63.1c0,39.7-31.75,72.6-71.45,72.9A72,72,0,0,1,56,112Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`,
      change: '43.11%',
      changeDirection: 'up',
    },
    {
      title: 'Revenue',
      count: '$6,235',
      svgBg:'info',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="128" y1="24" x2="128" y2="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="128" y1="208" x2="128" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M184,88a40,40,0,0,0-40-40H112a40,40,0,0,0,0,80h40a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`,
      change: '32.13%',
      changeDirection: 'up',
    }
  ];


  recordColumn = [
    {
      header:'ID',
      headClass:'text-start'
    },
    {
      header:'Students',
      headClass:'text-cenatr'
    },
    {
      header:'Status',
      headClass:'text-end'
    }
  ]

  PaymentRecord = [
    {
      id: '#1116',
      studentName: 'Studar Little',
      avatar: './assets/images/faces/2.jpg',
      feeType: 'Class Test',
      status: 'Paid',
      statusClass: 'text-success'
    },
    {
      id: '#8547',
      studentName: 'Ion Somer',
      avatar: './assets/images/faces/4.jpg',
      feeType: 'Quarterly Fee',
      status: 'Paid',
      statusClass: 'text-success'
    },
    {
      id: '#7564',
      studentName: 'Shakira',
      avatar: './assets/images/faces/6.jpg',
      feeType: 'Quarterly Fee',
      status: 'Not Paid',
      statusClass: 'text-danger'
    },
    {
      id: '#1254',
      studentName: 'Thomas Shelby',
      avatar: './assets/images/faces/8.jpg',
      feeType: 'Annual Fee',
      status: 'Paid',
      statusClass: 'text-success'
    },
    {
      id: '#7458',
      studentName: 'Stefan U',
      avatar: './assets/images/faces/10.jpg',
      feeType: 'Monthly Test',
      status: 'Paid',
      statusClass: 'text-success'
    },
    {
      id: '#6325',
      studentName: 'Michael Shreff',
      avatar: './assets/images/faces/12.jpg',
      feeType: 'Annual Fee',
      status: 'Not Paid',
      statusClass: 'text-danger'
    },
    {
      id: '#2321',
      studentName: 'Leo Phillip',
      avatar: './assets/images/faces/4.jpg',
      feeType: 'Class Test',
      status: 'Paid',
      statusClass: 'text-success'
    }
  ];

  teacherColumn = [
    {
      header:'Teacher'
    },
    {
      header:'Qualification'
    },
    {
      header:'Subject'
    }
  ]
  Teacher = [
    {
      name: 'John Smith',
      avatar: './assets/images/faces/11.jpg',
      qualification: 'M.Ed',
      subject: 'Mathematics',
      subjectClass: 'text-primary'
    },
    {
      name: 'Mary Johnson',
      avatar: './assets/images/faces/3.jpg',
      qualification: 'B.A. in English',
      subject: 'English',
      subjectClass: 'text-secondary'
    },
    {
      name: 'Robert Davis',
      avatar: './assets/images/faces/4.jpg',
      qualification: 'Ph.D. in Science',
      subject: 'Physics',
      subjectClass: 'text-danger'
    },
    {
      name: 'Sarah Thompson',
      avatar: './assets/images/faces/1.jpg',
      qualification: 'M.A. in History',
      subject: 'History',
      subjectClass: 'text-info'
    },
    {
      name: 'Michael Brown',
      avatar: './assets/images/faces/15.jpg',
      qualification: 'B.Ed',
      subject: 'Chemistry',
      subjectClass: 'text-success'
    },
    {
      name: 'Emily Wilson',
      avatar: './assets/images/faces/2.jpg',
      qualification: 'M.A. in Geography',
      subject: 'Geography',
      subjectClass: 'text-pink'
    },
    {
      name: 'Sarah Smith',
      avatar: './assets/images/faces/5.jpg',
      qualification: 'M.A.',
      subject: 'Hindi',
      subjectClass: 'text-warning'
    },
    {
      name: 'Angel',
      avatar: './assets/images/faces/6.jpg',
      qualification: 'M.A.',
      subject: 'Telugu',
      subjectClass: 'text-primary'
    }
  ];

  studentColumn = [
    {
      header:'S.No'
    },
    {
      header:'ID'
    },
    {
      header:'Student'
    },
    {
      header:'Class'
    },
    {
      header:'Section'
    },
    {
      header:'Status'
    },
    {
      header:'Marks In %'
    },
    {
      header:'Marks In GPA'
    },
    {
      header:'Actions'
    }
  ]

  StudentResult = [
    {
      index: 1,
      id: '#1116',
      name: 'Studar Little',
      avatar: './assets/images/faces/2.jpg',
      grade: 'IX',
      section: 'B',
      status: 'Pass',
      statusClass: 'bg-success-transparent',
      percentage: '75%',
      gradePoint: '7.5'
    },
    {
      index: 2,
      id: '#8547',
      name: 'Ion Somer',
      avatar: './assets/images/faces/4.jpg',
      grade: 'X',
      section: 'A',
      status: 'Pass',
      statusClass: 'bg-success-transparent',
      percentage: '65%',
      gradePoint: '6.5'
    },
    {
      index: 3,
      id: '#7564',
      name: 'Shakira',
      avatar: './assets/images/faces/6.jpg',
      grade: 'X',
      section: 'B',
      status: 'Fail',
      statusClass: 'bg-danger-transparent',
      percentage: '25%',
      gradePoint: '2.5'
    },
    {
      index: 4,
      id: '#1254',
      name: 'Thomas Shelby',
      avatar: './assets/images/faces/8.jpg',
      grade: 'IX',
      section: 'A',
      status: 'Pass',
      statusClass: 'bg-success-transparent',
      percentage: '95%',
      gradePoint: '9.5'
    },
    {
      index: 5,
      id: '#7458',
      name: 'Stefan U',
      avatar: './assets/images/faces/10.jpg',
      grade: 'IX',
      section: 'B',
      status: 'Pass',
      statusClass: 'bg-success-transparent',
      percentage: '62%',
      gradePoint: '6.2'
    },
    {
      index: 6,
      id: '#6325',
      name: 'Michael Shreff',
      avatar: './assets/images/faces/12.jpg',
      grade: 'X',
      section: 'A',
      status: 'Fail',
      statusClass: 'bg-danger-transparent',
      percentage: '15%',
      gradePoint: '1.5'
    }
  ];

  EventItem = [
    {
      title: 'Book Fair Event',
      description: 'Explore books and join the fun!',
      iconClass: 'ri-book-fill',
      avatarClass: 'primary',
      svgColor: 'white',
      date: '10 Jun 2024',
      icon:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M232,112a24,24,0,0,0-24-24H136V79a32.06,32.06,0,0,0,24-31c0-28-26.44-45.91-27.56-46.66a8,8,0,0,0-8.88,0C122.44,2.09,96,20,96,48a32.06,32.06,0,0,0,24,31v9H48a24,24,0,0,0-24,24v23.33a40.84,40.84,0,0,0,8,24.24V200a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V159.57a40.84,40.84,0,0,0,8-24.24ZM112,48c0-13.57,10-24.46,16-29.79,6,5.33,16,16.22,16,29.79a16,16,0,0,1-32,0ZM40,112a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v23.33c0,13.25-10.46,24.31-23.32,24.66A24,24,0,0,1,168,136a8,8,0,0,0-16,0,24,24,0,0,1-48,0,8,8,0,0,0-16,0,24,24,0,0,1-24.68,24C50.46,159.64,40,148.58,40,135.33Zm160,96H56a8,8,0,0,1-8-8V172.56A38.77,38.77,0,0,0,62.88,176a39.69,39.69,0,0,0,29-11.31A40.36,40.36,0,0,0,96,160a40,40,0,0,0,64,0,40.36,40.36,0,0,0,4.13,4.67A39.67,39.67,0,0,0,192,176c.38,0,.76,0,1.14,0A38.77,38.77,0,0,0,208,172.56V200A8,8,0,0,1,200,208Z"></path></svg>`
    },
    {
      title: 'Science Fair Competition',
      description: 'Showcase your science projects and win!',
      iconClass: 'ri-flask-fill',
      avatarClass: 'secondary',
      svgColor: 'white',
      date: '24 Jun 2024',
      icon:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></path></svg>`
    },
    {
      title: 'Parent-Teacher Meeting',
      description: "Discuss your child's progress with teachers.",
      iconClass: 'ri-team-fill',
      avatarClass: 'success',
      svgColor: 'white',
      date: '09 Jul 2024',
      icon:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M216,40H40A16,16,0,0,0,24,56V216a8,8,0,0,0,11.58,7.16L64,208.94l28.42,14.22a8,8,0,0,0,7.16,0L128,208.94l28.42,14.22a8,8,0,0,0,7.16,0L192,208.94l28.42,14.22A8,8,0,0,0,232,216V56A16,16,0,0,0,216,40Zm0,163.06-20.42-10.22a8,8,0,0,0-7.16,0L160,207.06l-28.42-14.22a8,8,0,0,0-7.16,0L96,207.06,67.58,192.84a8,8,0,0,0-7.16,0L40,203.06V56H216ZM60.42,167.16a8,8,0,0,0,10.74-3.58L76.94,152h38.12l5.78,11.58a8,8,0,1,0,14.32-7.16l-32-64a8,8,0,0,0-14.32,0l-32,64A8,8,0,0,0,60.42,167.16ZM96,113.89,107.06,136H84.94ZM136,128a8,8,0,0,1,8-8h16V104a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16H176v16a8,8,0,0,1-16,0V136H144A8,8,0,0,1,136,128Z"></path></svg>`
    },
    {
      title: 'Sports Day Celebration',
      description: 'Cheer for your team in sports!',
      iconClass: 'ri-trophy-fill',
      avatarClass: 'warning',
      svgColor: 'white',
      date: '12 Jul 2024',
      icon:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></path></svg>`
    },
    {
      title: 'School Picnic Announcement',
      description: 'Enjoy outdoor fun and delicious food!',
      iconClass: 'ri-map-pin-fill',
      avatarClass: 'info',
      svgColor: 'white',
      date: '05 Jul 2024',
      icon:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.07,48c-10.29,17.79-27.4,28-46.93,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.07-20a8,8,0,0,1,13.86,8Z"></path></svg>`
    },
    {
      title: 'Career Guidance Workshop',
      description: 'Explore career options and plan ahead!',
      iconClass: 'ri-compass-fill',
      avatarClass: 'danger',
      svgColor: 'white',
      date: '18 Jul 2024',
      icon:`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.07,48c-10.29,17.79-27.4,28-46.93,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.07-20a8,8,0,0,1,13.86,8Z"></path></svg>`
    }
  ];
  constructor(private sanitizer : DomSanitizer) {}

  sanitizeIcon(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }
}
