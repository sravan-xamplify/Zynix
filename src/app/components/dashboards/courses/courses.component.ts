import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { SpkApexchartsComponent } from '../../../@spk/spk-apexcharts/apexcharts.component';
import { CoursesChartData, RevenueChartData } from '../../../shared/data/dashboard_chartData/coursescharts.data';
import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { SpkSchoolCardComponent } from '../../../@spk/reusable-dashboard/spk-school-card/spk-school-card.component';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
    selector: 'app-courses',
    imports: [RouterModule, SharedModule, SpkApexchartsComponent, NgbDropdownModule, SpkReusableTablesComponent, SpkSchoolCardComponent, SpkDropdownsComponent, NgbTooltipModule],
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  public chartOptions = RevenueChartData;
  public chartOptions1 = CoursesChartData;

  courseColumn = [
    {
      header:'Course Name'
    },
    {
      header:'Instructor'
    },
    {
      header:'Progress'
    },
    {
      header:'Completion Date'
    },
    {
      header:'Students'
    },
    {
      header:'Actions'
    },

  ]

  courses = [
    {
      name: 'Data Science',
      applicant: { name: 'Dr. Smith', avatar: './assets/images/faces/1.jpg' },
      progress: 75,
      date: 'June 15, 2024',
      rating: 4.8,
      status: 'bg-primary',
    },
    {
      name: 'Web Development',
      applicant: { name: 'Prof. Johnson', avatar: './assets/images/faces/10.jpg' },
      progress: 50,
      date: 'July 20, 2024',
      rating: 4.5,
      status: 'bg-secondary',
    },
    {
      name: 'AI Basics',
      applicant: { name: 'Dr. Lee', avatar: './assets/images/faces/11.jpg' },
      progress: 90,
      date: 'May 30, 2024',
      rating: 4.9,
      status: 'bg-success',
    },
    {
      name: 'Cybersecurity',
      applicant: { name: 'Dr. Taylor', avatar: './assets/images/faces/2.jpg' },
      progress: 60,
      date: 'August 10, 2024',
      rating: 4.7,
      status: 'bg-warning',
    },
    {
      name: 'Cloud Computing',
      applicant: { name: 'Prof. Adams', avatar: './assets/images/faces/3.jpg' },
      progress: 85,
      date: 'June 25, 2024',
      rating: 4.6,
      status: 'bg-info',
    },
    {
      name: 'Machine Learning',
      applicant: { name: 'Dr. Rivera', avatar: './assets/images/faces/5.jpg' },
      progress: 40,
      date: 'September 15, 2024',
      rating: 4.7,
      status: 'bg-danger',
    },
  ];

  
  courseColumn1 = [
    {
      header:'S.No'
    },
    {
      header:'Course'
    },
    {
      header:'Classes'
    },
    {
      header:'Last Updated'
    },
    {
      header:'Instructor'
    },
    {
      header:'Students'
    },
    {
      header:'Actions'
    },

  ]

  coursesData = [
    {
      id: 1,
      title: 'CSS Zero to Hero Master Class',
      category: 'UI/UX Designing',
      enrollments: 51,
      date: '22-06-2024',
      instructor: 'Burak Oin',
      views: 252,
      avatar: './assets/images/media/media-1.jpg',
    },
    {
      id: 2,
      title: 'Digital Marketing Course From Scratch',
      category: 'Marketing',
      enrollments: 115,
      date: '21-06-2024',
      instructor: 'Stuart Little',
      views: 1189,
      avatar: './assets/images/media/media-4.jpg',
    },
    {
      id: 3,
      title: 'Digital Marketing Course From Scratch',
      category: 'Programming',
      enrollments: 30,
      date: '15-06-2024',
      instructor: 'Boran Ray',
      views: 3365,
      avatar: './assets/images/media/media-10.jpg',
    },
    {
      id: 4,
      title: 'Master Linear Algebra Medium Level',
      category: 'Mathematics',
      enrollments: 90,
      date: '11-06-2024',
      instructor: 'Arya Neo',
      views: 773,
      avatar: './assets/images/media/media-15.jpg',
    },
    {
      id: 5,
      title: 'Learn How to Trade & Invest',
      category: 'Stocks & Trading',
      enrollments: 161,
      date: '10-06-2024',
      instructor: 'Sia Niu',
      views: 51,
      avatar: './assets/images/media/media-23.jpg',
    },
  ];

  Categories = [
    {
      title: 'UI / UX Design',
      icon: 'ri-dashboard-line fs-24',
      courseCount: '10,000 + Courses',
      price: '$199.99',
      bgClass: 'primary-transparent',
      avatarSize:'md',
      flexClass:'ms-2'
    },
    {
      title: 'Digital Marketing',
      icon: 'ri-advertisement-line fs-24',
      courseCount: '90 + Courses',
      price: '$599.99',
      bgClass: 'secondary-transparent',
      avatarSize:'md',
      flexClass:'ms-2'
    },
    {
      title: 'Web Development',
      icon: 'ri-code-box-line fs-24',
      courseCount: '250 + Courses',
      price: '$299.99',
      bgClass: 'success-transparent',
      avatarSize:'md',
      flexClass:'ms-2'
    },
    {
      title: 'Stocks & Trading',
      icon: 'ri-bar-chart-2-line fs-24',
      courseCount: '100 + Courses',
      price: '$999.99',
      bgClass: 'warning-transparent',
      avatarSize:'md',
      flexClass:'ms-2'
    },
    {
      title: 'Angular Course',
      icon: 'ri-angularjs-line fs-24',
      courseCount: '300 + Courses',
      price: '$399.99',
      bgClass: 'danger-transparent',
      avatarSize:'md',
      flexClass:'ms-2'
    },
    {
      title: 'React Course',
      icon: 'ri-reactjs-line fs-24',
      courseCount: '150 + Courses',
      price: '$599.99',
      bgClass: 'info-transparent',
     avatarSize:'md',
     flexClass:'ms-2'
    }
  ];

  instructors  = [
    { name: 'John Henry', degree: 'M.Tech', classes: '321 Classes', subject: 'Digital Marketing',svgType:'rounded',avatarSize:'sm', bgClass:'muted', image: './assets/images/faces/2.jpg' },
    { name: 'Mortal Yun', degree: 'P.H.D', classes: '25 Classes', subject: 'Stocks & Trading',svgType:'rounded',avatarSize:'sm', bgClass:'muted', image: './assets/images/faces/12.jpg' },
    { name: 'Trex Con', degree: 'MBBS', classes: '39 Classes', subject: 'Science', bgClass:'muted',svgType:'rounded',avatarSize:'sm', image: './assets/images/faces/13.jpg' },
    { name: 'Saiu Sarah', degree: 'P.H.D', classes: '11 Classes', subject: 'Science', bgClass:'muted',svgType:'rounded',avatarSize:'sm', image: './assets/images/faces/3.jpg' },
    { name: 'Ion Hau', degree: 'M.Tech', classes: '124 Classes', subject: 'Web Development', bgClass:'muted',svgType:'rounded',avatarSize:'sm', image: './assets/images/faces/4.jpg' },
    { name: 'Roman Killon', degree: 'M.Tech', classes: '1263 Classes', subject: 'Ui / Ux Designing', bgClass:'muted',svgType:'rounded',avatarSize:'sm', image: './assets/images/faces/14.jpg' },
    { name: 'Suzika Stallone', degree: 'PhD', classes: '110 Classes', subject: 'Machine Learning', bgClass:'muted',svgType:'rounded',avatarSize:'sm', image: './assets/images/faces/5.jpg' },
  ];
}