import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper'
import { register } from 'swiper/element';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SpkTeamCardComponent } from '../../../../@spk/reusable-apps/spk-team-card/spk-team-card.component';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
Swiper.use([Autoplay, Navigation, Pagination]);
register();

@Component({
    selector: 'app-candidate-details',
    imports: [SharedModule, NgbTooltipModule, CommonModule, RouterModule, FormsModule, SpkTeamCardComponent, SpkReusableTablesComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './candidate-details.component.html',
    styleUrl: './candidate-details.component.scss'
})
export class CandidateDetailsComponent {

  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  ngAfterViewInit(): void {
    const swiperEl = this.swiperContainer.nativeElement;
		Object.assign(swiperEl, {
      slidesPerView: 1,
      mousewheel: true,
      loop: true,
      autoplay: {
          delay: 1000,
          disableOnInteraction: true,
      },
      breakpoints: {
        0: { slidesPerView: 1},
        320: { slidesPerView: 1 },
        500: { slidesPerView: 1 },
        1020: { slidesPerView: 1},
        1400: { slidesPerView: 1 },
      },
	  });
  }
  infoCards = [
    {
      icon: 'ri-briefcase-line',
      iconBackground: 'bg-primary',
      label: 'Experience Level',
      value: '5 Years'
    },
    {
      icon: 'ri-macbook-line',
      iconBackground: 'bg-secondary',
      label: 'Notice Period',
      value: '3 Months'
    },
    {
      icon: 'ri-home-office-line',
      iconBackground: 'bg-success',
      label: 'Work Type',
      value: 'Remote Work'
    },
    {
      icon: 'ri-calendar-line',
      iconBackground: 'bg-info',
      label: 'Working Days',
      value: 'Full Time'
    },
    {
      icon: 'ri-global-line',
      iconBackground: 'bg-warning',
      label: 'Languages',
      value: 'Telugu, English'
    }
  ];

  userProfile = [
    { label: 'Full Name', value: 'Brenda Simpson' },
    { label: 'Email', value: 'brendra@gmail.com' },
    { label: 'D.O.B', value: '13 Jan 2024' },
    { label: 'Gender', value: 'Female' },
    { label: 'Age', value: '35' },
    { label: 'Mobile', value: '+91 7865343874' },
    { label: 'Mother Tongue', value: 'Telugu' },
    { label: 'Marital Status', value: 'Unmarried' },
    { label: 'Blood Group', value: 'O +ve' },
    { label: 'Address', value: 'Akshya Nagar 1st Block 1st Cross, Rammurthy Nagar, Bangalore-560016' }
  ];



jobCandidates = [
  {
    name: 'Charlotte',
    role: 'UI Developer',
    location: 'Kondapur, Hyderabad',
    imageUrl: './assets/images/faces/1.jpg',
    package: { current: '$2,300', expected: '$3,678' },
    languages: ['English', 'Hindi', 'Telugu'],
    skills: ['HTML', 'CSS', 'Javascript'],
    bond: '1 year bond accepted',
    experience: 'Exp: 2 Years'
  },
  {
    name: 'Isabella',
    role: 'Web Developer',
    location: 'Gachibowli, Hyderabad',
    imageUrl: './assets/images/faces/3.jpg',
    package: { current: '$3,600', expected: '$4,700' },
    languages: ['English', 'Telugu'],
    skills: ['React', 'React Native'],
    bond: '2 years bond accepted',
    experience: 'Exp: 4 Years'
  },
  {
    name: 'Abigail',
    role: 'Python Developer',
    location: 'Gachibowli, Chennai',
    imageUrl: './assets/images/faces/21.jpg',
    package: { current: '$4,300', expected: '$5,000' },
    languages: ['English', 'Hindi'],
    skills: ['Python', 'Java', 'React'],
    bond: '2 years bond accepted',
    experience: 'Exp: 4 Years'
  }
];
}
