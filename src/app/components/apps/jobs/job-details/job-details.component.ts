import { CommonModule } from '@angular/common';
import {  Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared/shared.module';
import Swiper from 'swiper'
import { register } from 'swiper/element';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { SpkTeamCardComponent } from '../../../../@spk/reusable-apps/spk-team-card/spk-team-card.component';
import { SpkTagsComponent } from '../../../../@spk/reusable-apps/spk-tags/spk-tags.component';
import { SpkJobsCardComponent } from '../../../../@spk/reusable-apps/spk-jobs-card/spk-jobs-card.component';
Swiper.use([Autoplay, Navigation, Pagination]);
register();

@Component({
    selector: 'app-job-details',
    imports: [SharedModule, FormsModule, ReactiveFormsModule, NgbModule, CommonModule, SpkTeamCardComponent, SpkTagsComponent, SpkJobsCardComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './job-details.component.html',
    styleUrl: './job-details.component.scss'
})
export class JobDetailsComponent {

  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  ngAfterViewInit(): void {
    const swiperEl = this.swiperContainer.nativeElement;
    
    Object.assign(swiperEl, {
		  slidesPerView: 1,
		  spaceBetween: 10,
		  breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			  },
			1110: {
			  slidesPerView: 1,
			  spaceBetween: 20,
			},
			1300: {
			  slidesPerView: 1,
			  spaceBetween: 20,
			},
		  },
	  });
  }

  jobs = [
    {
      title: 'HTML Developer - Fresher',
      icon:'html5',
      BgColor:'primary',
      company: 'Spotech Technical Solutions',
      location: 'Hyderabad',
      openings: '13 Openings',
      education: 'Graduate',
      experience: 'Min - 2Years',
      salary: '$25,000',
      imgSrc: './assets/images/faces/2.jpg',
      wishlistIcon: 'ri-heart-3-line',
      salaryLabel: 'Month',
      tags: [
        { icon: 'bi-geo-alt', text: 'Hyderabad' },
        { icon: 'bi-briefcase', text: '13 Openings' },
        { icon: 'bi-mortarboard', text: 'Graduate' },
        { icon: 'bi-clock', text: 'Min - 2Years' },
        { icon: 'bi-moon-stars', text: 'flexible-shift' },
      ],
      percentageChange: { value: 18.21, direction: 'up' },
    },
    {
      title: 'React Lead Developer',
      icon:'reactjs',
      BgColor:'secondary',
      company: 'Infratech PVT LTD',
      location: 'Hyderabad',
      openings: '13 Openings',
      education: 'Graduate',
      experience: 'Min - 2Years',
      salary: '$17,000',
      imgSrc: './assets/images/faces/12.jpg',
      wishlistIcon: 'ri-heart-3-fill',
      salaryLabel: 'Month',
      tags: [
        { icon: 'bi-geo-alt', text: 'Hyderabad' },
        { icon: 'bi-briefcase', text: '13 Openings' },
        { icon: 'bi-mortarboard', text: 'Graduate' },
        { icon: 'bi-clock', text: 'Min - 2Years' },
        { icon: 'bi-moon-stars', text: 'flexible-shift' },
      ],
      percentageChange: { value: 12.61, direction: 'down' },
    },
    {
      title: 'Vuejs Frontend Developer',
      icon:'vuejs',
      BgColor:'success',
      company: 'G Technical Solutions',
      location: 'Hyderabad',
      openings: '13 Openings',
      education: 'Graduate',
      experience: 'Min - 2Years',
      salary: '$16,000',
      imgSrc: './assets/images/faces/10.jpg',
      wishlistIcon: 'ri-heart-3-fill',
      salaryLabel: 'Month',
      tags: [
        { icon: 'bi-geo-alt', text: 'Hyderabad' },
        { icon: 'bi-briefcase', text: '13 Openings' },
        { icon: 'bi-mortarboard', text: 'Graduate' },
        { icon: 'bi-clock', text: 'Min - 2Years' },
        { icon: 'bi-moon-stars', text: 'flexible-shift' },
      ],
      percentageChange: { value: 4.21, direction: 'up' },
    },
  ];

  infoCards = [
    {
      icon: 'ri-briefcase-line',
      iconBackground: 'bg-primary',
      label: 'Experience Level',
      value: 'Intermediate'
    },
    {
      icon: 'ri-macbook-line',
      iconBackground: 'bg-secondary',
      label: 'Job Type',
      value: 'Contract Base'
    },
    {
      icon: 'ri-home-office-line',
      iconBackground: 'bg-success',
      label: 'Work Type',
      value: 'Remote'
    },
    {
      icon: 'ri-calendar-line',
      iconBackground: 'bg-info',
      label: 'Working Days',
      value: '5 Days/week'
    },
    {
      icon: 'ri-time-line',
      iconBackground: 'bg-warning',
      label: 'Working Hours',
      value: '9:30AM-6:00PM'
    }
  ];

  jobsData = [
    {
      icon: "ri-reactjs-line",
      iconBackground: "bg-primary-transparent border-primary",
      title: "React Lead Developer",
      company: "Infratech PVT LTD",
    },
    {
      icon: "ri-html5-line",
      iconBackground: "bg-secondary-transparent border-secondary",
      title: "HTML Developer - Fresher",
      company: "Wcsrm Software PRIVATE LIMITED",
      
    },
    {
      icon: "ri-wordpress-line",
      iconBackground: "bg-success-transparent border-success",
      title: "Wordpress Developer - Remote",
      company: "Hardware Private Solutions",
      
    },
    {
      icon: "ri-vuejs-line",
      iconBackground: "bg-info-transparent border-info",
      title: "Vuejs Frontend Developer",
      company: "G Technical Solutions",
      
    }
  ];

  CompaniesData = [
    {
      image: "./assets/images/company-logos/3.png",
      iconBackground: "avatar avatar-md avatar-rounded bg-gray-300 border",
      title: "React Lead Developer",
      company: "Infratech PVT LTD",
      
    },
    {
      image: "./assets/images/company-logos/6.png",
      iconBackground: "avatar avatar-md avatar-rounded bg-gray-300 border",
      title: "HTML Developer - Fresher",
      company: "Wcsrm Software PRIVATE LIMITED",
      
    },
    {
      image: "./assets/images/company-logos/8.png",
      iconBackground: "avatar avatar-md avatar-rounded bg-gray-300 border",
      title: "Wordpress Developer - Remote",
      company: "Hardware Private Solutions",
      
    },
    {
      image: "./assets/images/company-logos/5.png",
      iconBackground: "avatar avatar-md avatar-rounded bg-gray-300 border",
      title: "Vuejs Frontend Developer",
      company: "G Technical Solutions",
      
    }
  ];
  
  tags = [
    '#UI',
    '#UX',
    '#Designer',
    '#Sketch',
    '#Remote',
    '#Office',
    '#Full Time',
    '#Partime',
    '#Job',
    '#Visa',
    '#Fresher',
    '#Experienced',
    '#Graduate',
    '#Service',
    '#Salary'
  ];

}

