import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {  NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkApexchartsComponent } from '../../../@spk/spk-apexcharts/apexcharts.component';
import { ProgressChartData, ProjectChartData, StatisticsChartData } from '../../../shared/data/dashboard_chartData/projectcharts.data';
import { VisitorsData } from '../../../shared/data/dashboard_chartData/ecommercecharts.data';
import { CommonModule } from '@angular/common';
import { SpkProjectCardComponent } from '../../../@spk/reusable-dashboard/spk-project-card/spk-project-card.component';
import { SpkSchoolCardComponent } from '../../../@spk/reusable-dashboard/spk-school-card/spk-school-card.component';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
@Component({
    selector: 'app-projects',
    imports: [RouterModule, SharedModule, NgApexchartsModule, NgbModule, SpkDropdownsComponent,
        SpkApexchartsComponent, SpkReusableTablesComponent, CommonModule, SpkSchoolCardComponent, SpkProjectCardComponent],
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent  {
  public chartOptions = StatisticsChartData;
  public chartOptions1 = ProjectChartData;
  public chartOptions2 = ProgressChartData;
  public chartOptions3 = VisitorsData;

  metrics = [
    {
      label: 'Earnings',
      value: '$12,563.50',
      change: '0.15%',
      changeClass: 'text-success',
      iconClass: 'ti ti-arrow-narrow-up',
      avatarClass: 'bg-primary',
      svgPath: 'M14,11H10a2,2,0,0,1,0-4h5a1,1,0,0,1,1,1,1,1,0,0,0,2,0,3,3,0,0,0-3-3H13V3a1,1,0,0,0-2,0V5H10a4,4,0,0,0,0,8h4a2,2,0,0,1,0,4H9a1,1,0,0,1-1-1,1,1,0,0,0-2,0,3,3,0,0,0,3,3h2v2a1,1,0,0,0,2,0V19h1a4,4,0,0,0,0-8Z'
    },
    {
      label: 'Cost',
      value: '$6,156.38',
      change: '2.50%',
      changeClass: 'text-success',
      iconClass: 'ti ti-arrow-narrow-up',
      avatarClass: 'bg-secondary mt-1',
      svgPath: 'M19,7H18V6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,6H2V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A3,3,0,0,0,19,7ZM5,5H15a1,1,0,0,1,1,1V7H5A1,1,0,0,1,5,5ZM20,15H19a1,1,0,0,1,0-2h1Zm0-4H19a3,3,0,0,0,0,6h1v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.83A3,3,0,0,0,5,9H19a1,1,0,0,1,1,1Z'
    },
    {
      label: 'Productivity',
      value: '$95.5M',
      change: '4.77%',
      changeClass: 'text-danger',
      iconClass: 'ti ti-arrow-narrow-down',
      avatarClass: 'bg-success mt-1',
      svgPath: 'M21.71,7.29a1,1,0,0,0-1.42,0L14,13.59,9.71,9.29a1,1,0,0,0-1.42,0l-6,6a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L9,11.41l4.29,4.3a1,1,0,0,0,1.42,0l7-7A1,1,0,0,0,21.71,7.29Z'
    },
    {
      label: 'Total Time On Project',
      value: '148:00h',
      change: '3.36%',
      changeClass: 'text-success',
      iconClass: 'ti ti-arrow-narrow-up',
      avatarClass: 'bg-info mt-1',
      svgPath: 'M15.09814,12.63379,13,11.42285V7a1,1,0,0,0-2,0v5a.99985.99985,0,0,0,.5.86621l2.59814,1.5a1.00016,1.00016,0,1,0,1-1.73242ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z'
    }
  ];

  taskActivities = [
    {
      label: 'On Going Tasks',
      count: 1823,
      percentage: '0.78%',
      percentageClass: 'text-success',
      itemClass: 'male',
      iconClass: 'ti ti-arrow-narrow-up'
    },
    {
      label: 'Completed Tasks',
      count: 1274,
      percentage: '1.57%',
      percentageClass: 'text-danger',
      itemClass: 'female',
      iconClass: 'ti ti-arrow-narrow-down'
    },
    {
      label: 'To Do Tasks',
      count: 769,
      percentage: '0.32%',
      percentageClass: 'text-success',
      itemClass: 'others',
      iconClass: 'ti ti-arrow-narrow-up'
    },
    {
      label: 'Pending Tasks',
      count: 1458,
      percentage: '19.45%',
      percentageClass: 'text-success',
      itemClass: 'not-mentioned',
      iconClass: 'ti ti-arrow-narrow-up'
    }
  ];

  TeamMemberColumn = [
    {
      header:'Member'
    },
    {
      header:'Role'
    },
    {
      header:'Hours'
    },
    {
      header:'Tasks'
    },
    {
      header:'Status'
    },
    
  ]
  TeamMember = [
    {
      name: 'Richard Dom',
      avatar: './assets/images/faces/2.jpg',
      email: 'richarddom1116@demo.com',
      position: 'Team Leader',
      hoursWorked: '31h / 36h',
      tasksCompleted: 143,
      status: 'Online',
    },
    {
      name: 'Jennifer Tab',
      avatar: './assets/images/faces/21.jpg',
      email: 'jenny258@demo.com',
      position: 'Project Manager',
      hoursWorked: '11h / 20h',
      tasksCompleted: 186,
      status: 'Online',
    },
    {
      name: 'Nikki Jey',
      avatar: './assets/images/faces/3.jpg',
      email: 'nikkiJ141@demo.com',
      position: 'UI Developer',
      hoursWorked: '20h / 22h',
      tasksCompleted: 652,
      status: 'Offline',
    },
    {
      name: 'Arifa Zed',
      avatar: './assets/images/faces/21.jpg',
      email: 'arifaZ@demo.com',
      position: 'Web Developer',
      hoursWorked: '83h / 83h',
      tasksCompleted: 752,
      status: 'Online',
    },
    {
      name: 'Xiong Yu',
      avatar: './assets/images/faces/4.jpg',
      email: 'xingzing444@demo.com',
      position: 'Team Member',
      hoursWorked: '51h / 62h',
      tasksCompleted: 268,
      status: 'Offline',
    },
  ];

  TemplateProgress = [
    {
      name: 'Wordpress Template',
      logo: './assets/images/company-logos/4.png',
      progress: '25%',
      status: 'Progress',
    },
    {
      name: 'Blog Page',
      logo: './assets/images/company-logos/1.png',
      progress: '60%',
      status: 'Pending',
    },
    {
      name: 'E commerce Blog',
      logo: './assets/images/company-logos/2.png',
      progress: '75%',
      status: 'Progress',
    },
    {
      name: 'E-mail Templates',
      logo: './assets/images/company-logos/3.png',
      progress: '100%',
      status: 'Finished',
    },
    {
      name: 'Business Website',
      logo: './assets/images/company-logos/5.png',
      progress: '100%',
      status: 'Finished',
    },
    {
      name: 'Admin Templates',
      logo: './assets/images/company-logos/6.png',
      progress: '90%',
      status: 'Progress',
    },
    {
      name: 'Beauty Templates',
      logo: './assets/images/company-logos/7.png',
      progress: '50%',
      status: 'Pending',
    },
  ];

  TaskProgressColumn = [
    {
      header:'S.No'
    },
    {
      header:'Poject Title'
    },
    {
      header:'Assigned Team'
    },
    {
      header:'Tasks'
    },
    {
      header:'Progress'
    },
    {
      header:'Status'
    },
    {
      header:'Due Date'
    },
    {
      header:'Actions'
    },

  ]

  transactions = [
    { 
      initial: 'S', 
      name: 'Swift Ads', 
      type: 'Payment', 
      amount: '-$500', 
      date: 'May 25, 2024', 
      avatarClass: 'primary-transparent avatar-rounded ', 
      amountClass: 'danger h6',
      bgvalue:'muted'
    },
    { 
      initial: 'E', 
      name: 'Eco Build', 
      type: 'Expense', 
      amount: '-$200', 
      date: 'May 24, 2024', 
      avatarClass: 'secondary-transparent avatar-rounded ', 
      amountClass: 'danger h6' ,
      bgvalue:'muted'
    },
    { 
      initial: 'H', 
      name: 'Health Track', 
      type: 'Income', 
      amount: '+$1000', 
      date: 'May 23, 2024', 
      avatarClass: 'success-transparent avatar-rounded ', 
      amountClass: 'success h6',
      bgvalue:'muted'
    },
    { 
      initial: 'S', 
      name: 'Solar Grid', 
      type: 'Expense', 
      amount: '-$300', 
      date: 'May 22, 2024', 
      avatarClass: 'info-transparent avatar-rounded ', 
      amountClass: 'danger h6',
      bgvalue:'muted' 
    },
    { 
      initial: 'D', 
      name: 'Data Stream', 
      type: 'Income', 
      amount: '+$700', 
      date: 'May 19, 2024', 
      avatarClass: 'warning-transparent avatar-rounded ', 
      amountClass: 'success h6',
      bgvalue:'muted'
    }
  ];

  TaskProgress = [
    {
      id: 1,
      title: 'Home Page',
      teamMembers: [
        './assets/images/faces/8.jpg',
        './assets/images/faces/4.jpg',
        './assets/images/faces/6.jpg',
        './assets/images/faces/7.jpg',
      ],
      tasksCompleted: '110 /180',
      progressPercentage: 25,
      status: 'In Progress',
      dueDate: '14-04-2023',
    },
    {
      id: 2,
      title: 'Landing Design',
      teamMembers: [
        './assets/images/faces/8.jpg',
        './assets/images/faces/4.jpg',
        './assets/images/faces/6.jpg',
        './assets/images/faces/7.jpg',
        './assets/images/faces/8.jpg',
      ],
      tasksCompleted: '95 /100',
      progressPercentage: 95,
      status: 'In Progress',
      dueDate: '20-04-2023',
    },
    {
      id: 3,
      title: 'New Template Design',
      teamMembers: [
        './assets/images/faces/8.jpg',
        './assets/images/faces/4.jpg',
        './assets/images/faces/16.jpg',
      ],
      tasksCompleted: '0 /100',
      progressPercentage: 0,
      status: 'Pending',
      dueDate: '29-05-2023',
    },
    {
      id: 4,
      title: 'HR Management Design',
      teamMembers: [
        './assets/images/faces/8.jpg',
        './assets/images/faces/14.jpg',
        './assets/images/faces/4.jpg',
        './assets/images/faces/16.jpg',
        'additional', // Placeholder for "+2" to represent additional members
      ],
      tasksCompleted: '26 /71',
      progressPercentage: 35,
      status: 'In Progress',
      dueDate: '18-04-2023',
    },
    {
      id: 5,
      title: 'Designing New Template',
      teamMembers: [
        './assets/images/faces/8.jpg',
        './assets/images/faces/14.jpg',
        './assets/images/faces/4.jpg',
        './assets/images/faces/16.jpg',
        'additional', // Placeholder for "+2" to represent additional members
      ],
      tasksCompleted: '120 /120',
      progressPercentage: 100,
      status: 'Completed',
      dueDate: '11-04-2023',
    },
  ];

  tasks = [
    { 
      id: 'defaultCheck1', 
      name: 'Finish Presentation Slides', 
      date: 'May 29, 2024', 
      checked: true, 
      checkClass: '' 
    },
    { 
      id: 'defaultCheck2', 
      name: 'Send Follow-up Emails', 
      date: 'May 27, 2024', 
      checked: true, 
      checkClass: 'form-checked-secondary' 
    },
    { 
      id: 'defaultCheck3', 
      name: 'Research New Software', 
      date: 'May 30, 2024', 
      checked: false, 
      checkClass: 'form-checked-success' 
    },
    { 
      id: 'defaultCheck4', 
      name: 'Schedule Training Session', 
      date: 'May 29, 2024', 
      checked: false, 
      checkClass: 'form-checked-warning' 
    },
    { 
      id: 'defaultCheck5', 
      name: 'Update Task Board', 
      date: 'May 27, 2024', 
      checked: true, 
      checkClass: 'form-checked-info' 
    },
    { 
      id: 'defaultCheck6', 
      name: 'Attend Team Meeting', 
      date: 'May 28, 2024', 
      checked: false, 
      checkClass: 'form-checked-danger' 
    }
  ];


}

