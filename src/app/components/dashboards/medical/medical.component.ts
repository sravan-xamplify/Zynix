import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkApexchartsComponent } from '../../../@spk/spk-apexcharts/apexcharts.component';
import { DepartmentsChartData, PatientsChartData, PatientsOverviewChartData } from '../../../shared/data/dashboard_chartData/medicalcharts.data';

import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
    selector: 'app-medical',
    imports: [SharedModule, NgbModule, SpkApexchartsComponent, SpkReusableTablesComponent, CommonModule, SpkDropdownsComponent],
    templateUrl: './medical.component.html',
    styleUrl: './medical.component.scss'
})
export class MedicalComponent {

  active = 3;
  public chartOptions = PatientsChartData;
  public chartOptions1 = PatientsOverviewChartData;
   public chartOptions2 = DepartmentsChartData;


   doctorsColumn = [
    {
      header:'Doctor'
    },
    {
      header:'Qualification'
    },
    {
      header:'Experience'
    },
    {
      header:'Actions'
    },
   ]
   doctorsData = [
    {
      name: "Dr. Smith",
      specialization: "Cardiology",
      qualification: "MBBS",
      experience: "4 yrs Exp",
      imageUrl: "./assets/images/faces/doctors/1.jpg"
    },
    {
      name: "Dr. Johnson",
      specialization: "Orthopedics",
      qualification: "MBBS, MD",
      experience: "6 yrs Exp",
      imageUrl: "./assets/images/faces/doctors/2.jpg"
    },
    {
      name: "Dr. L. Rickie Smith",
      specialization: "Orthopedics",
      qualification: "DO",
      experience: "6 yrs Exp",
      imageUrl: "./assets/images/faces/doctors/3.jpg"
    },
    {
      name: "Dr. M. Angle",
      specialization: "Gynecologist",
      qualification: "MBBS, Ph.D",
      experience: "10 yrs Exp",
      imageUrl: "./assets/images/faces/doctors/4.jpg"
    },
    {
      name: "Dr. S. Mary",
      specialization: "Neurosurgeon",
      qualification: "MBBS, MD",
      experience: "3 yrs Exp",
      imageUrl: "./assets/images/faces/doctors/5.jpg"
    },
    {
      name: "Dr. T. Laytoya Thoma",
      specialization: "Dermatologists",
      qualification: "MD-PhD",
      experience: "5 yrs Exp",
      imageUrl: "./assets/images/faces/doctors/6.jpg"
    }
  ];

  
  patientsColumn = [
    {
      header:'S.No'
    },
    {
      header:'Patient ID'
    },
    {
      header:'Name'
    },
    {
      header:'Gender'
    },{
      header:'Age'
    },
    {
      header:'Assgined Doctor'
    },
    {
      header:'Contact Number'
    },
    {
      header:'Appointmented Date'
    },
    {
      header:'Disease'
    },
    {
      header:'Room No'
    },
    {
      header:'Action'
    },
  ]
  patientsData = [
    {
      id: '01',
      code: 'SPK-9ABC',
      name: 'John Doe',
      gender: 'Male',
      age: 25,
      doctor: 'Dr. M. Smith',
      contact: '123-456-7890',
      admissionDate: '2023-10-20',
      condition: 'Hypertension',
      conditionClass: 'bg-primary-transparent',
      roomNumber: 101,
      avatar: './assets/images/faces/11.jpg'
    },
    {
      id: '02',
      code: 'SPK-3SFW',
      name: 'Jane Smith',
      gender: 'Female',
      age: 35,
      doctor: 'Dr. Johnson',
      contact: '987-654-3210',
      admissionDate: '2023-09-15',
      condition: 'Diabetes',
      conditionClass: 'bg-secondary-transparent',
      roomNumber: 102,
      avatar: './assets/images/faces/2.jpg'
    },
    {
      id: '03',
      code: 'SPK-6SKF',
      name: 'Robert Johnson',
      gender: 'Male',
      age: 45,
      doctor: 'Dr. M. Angle',
      contact: '456-789-0123',
      admissionDate: '2023-11-05',
      condition: 'Asthma',
      conditionClass: 'bg-success-transparent',
      roomNumber: 103,
      avatar: './assets/images/faces/12.jpg'
    },
    {
      id: '04',
      code: 'SPK-3ESD',
      name: 'Emiley Davis',
      gender: 'Female',
      age: 28,
      doctor: 'Dr. S. Mary',
      contact: '789-012-3456',
      admissionDate: '2023-08-12',
      condition: 'Allergies',
      conditionClass: 'bg-orange-transparent',
      roomNumber: 104,
      avatar: './assets/images/faces/5.jpg'
    },
    {
      id: '05',
      code: 'SPK-3KSE',
      name: 'William Martinez',
      gender: 'Male',
      age: 38,
      doctor: 'Dr. S. Mary',
      contact: '234-567-8901',
      admissionDate: '2023-12-08',
      condition: 'General',
      conditionClass: 'bg-info-transparent',
      roomNumber: 105,
      avatar: './assets/images/faces/11.jpg'
    },
    {
      id: '06',
      code: 'SPK-4DFS',
      name: 'Sarah Wilson',
      gender: 'Female',
      age: 28,
      doctor: 'Dr. T. Laytoya Thoma',
      contact: '567-890-1234',
      admissionDate: '2023-07-25',
      condition: 'High Cholesterol',
      conditionClass: 'bg-warning-transparent',
      roomNumber: 106,
      avatar: './assets/images/faces/4.jpg'
    }
  ];
  constructor(private sanitizer : DomSanitizer) { }
  
  sanitizeIcon(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }
  
  cardData = [
    {
      title: 'Total Patients',
      value: "256",
      change: '4.97%',
      changeBg:'success',
      changeArrow:'up',
      changePercentage: 'Today',
      colorClass: 'bg-primary-transparent',
      icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <rect width="256" height="256" fill="none"/>
                  <circle cx="84" cy="108" r="52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                  <path d="M10.23,200a88,88,0,0,1,147.54,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                  <path d="M172,160a87.93,87.93,0,0,1,73.77,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                  <path d="M152.69,59.7A52,52,0,1,1,172,160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                </svg>`
    },
    {
      title: 'Total Doctors',
      value: "4,026",
      change: '+0.40%',
      changeBg:'danger',
      changeArrow:'down',
      changePercentage: 'Today',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="208" cy="160" r="12"></circle><circle cx="208" cy="160" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path d="M104,144v48a40,40,0,0,0,40,40h24a40,40,0,0,0,40-40h0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M136,40h24V87.17c0,30.77-24.48,56.43-55.26,56.83A56,56,0,0,1,48,88V40H72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`, // Replace with the icon class
      colorClass: 'bg-secondary-transparent'
    },
    {
      title: 'Total Appointments',
      value: "148",
      change: '16.34%',
      changeBg:'success',
      changeArrow:'up',
      changePercentage: 'Today',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="120" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><path d="M57.78,216a72,72,0,0,1,140.44,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`, // Replace with the icon class
      colorClass: 'bg-success-transparent'
    },
    {
      title: 'Available Rooms',
      value: "116",
      change: '0.21%',
      changeBg:'success',
      changeArrow:'up',
      changePercentage: 'Today',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="128" y1="40" x2="128" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="160" y1="72" x2="184" y2="72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="160" y1="104" x2="184" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="72" y1="72" x2="96" y2="72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="72" y1="104" x2="96" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M48,40H208a8,8,0,0,1,8,8V200a0,0,0,0,1,0,0H40a0,0,0,0,1,0,0V48a8,8,0,0,1,8-8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="40" y1="200" x2="40" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="216" y1="200" x2="216" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>`, // Replace with the icon class
      colorClass: 'bg-info-transparent'
    }
  ];

}
