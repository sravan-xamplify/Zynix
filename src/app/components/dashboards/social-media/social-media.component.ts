import { Component, HostListener } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
// import { AnalysisChartData, AudienceChartData, AudienceChartData1, FollowersChartData, FollowersChartData1, FollowersChartData2, RevenueChartData, SessionChartData, SubscribersChartData } from '../../../shared/data/dashboard_chartData/mediacharts.data';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AudienceChartData, AudienceReachedData, EngagedChartData, ImpressionsChartData } from '../../../shared/data/dashboard_chartData/mediacharts.data';
import { SpkApexchartsComponent } from '../../../@spk/spk-apexcharts/apexcharts.component';
import { SpkSchoolCardComponent } from '../../../@spk/reusable-dashboard/spk-school-card/spk-school-card.component';
import { SpkDashboardCardComponent } from '../../../@spk/reusable-dashboard/spk-dashboard-card/spk-dashboard-card.component';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';


@Component({
    selector: 'app-social-media',
    imports: [SharedModule, NgApexchartsModule, NgbModule, SpkDashboardCardComponent, SpkReusableTablesComponent, SpkApexchartsComponent, SpkSchoolCardComponent, SpkDropdownsComponent],
    templateUrl: './social-media.component.html',
    styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {
   public chartOptions  = EngagedChartData;
  public chartOptions1  = ImpressionsChartData;
  public chartOptions2  = AudienceChartData;
  public chartOptions3 = AudienceReachedData;
 
  constructor(private sanitizer : DomSanitizer){}

  cardData = [
    { id:1, title:"Instagram",
      value:'121K',
      icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"></circle><rect x="32" y="32" width="192" height="192" rx="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><circle cx="180" cy="76" r="12"></circle></svg>`,
      footerTitle:'Follwers',
      Bgcolor:'pink',
      direction:'up',
      percentageChange:'1.5%',
     textcolor:"success" },

    { id:2, title:"Linked In",
      value:'96.8K',
      icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><rect x="32" y="32" width="192" height="192" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><line x1="120" y1="112" x2="120" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="88" y1="112" x2="88" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M120,140a28,28,0,0,1,56,0v36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><circle cx="88" cy="84" r="12"></circle></svg>`,
      footerTitle:'Follwers',
      Bgcolor:'info',
      direction:'down',
      percentageChange:'15.45%',
      textcolor:"danger" },

    { id:3, title:"Facebook",
        value:'1.3M',
        icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path d="M168,88H152a24,24,0,0,0-24,24V224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="96" y1="144" x2="160" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>`,
        footerTitle:'Follwers',
        Bgcolor:'primary',
        direction:'up',
        percentageChange:'3.64%',
        textcolor:"success" },

    { id:4, title:"Twitch",
          value:'876K',
          icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M165.1,200H120L72,240V200H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.25a8,8,0,0,1-2.88,6.15l-42.89,35.75A8.05,8.05,0,0,1,165.1,200Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="168" y1="88" x2="168" y2="136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="120" y1="88" x2="120" y2="136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>`,
          footerTitle:'Follwers',
          Bgcolor:'purple',
          direction:'up',
          percentageChange:'8.15%',
          textcolor:"success"
    },
    {  id:54, title:"Twitter",
            value:'2.1K',
            icon:`<svg _ngcontent-ng-c3848021039="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="invert-1"><rect _ngcontent-ng-c3848021039="" width="256" height="256" fill="none"></rect><polygon _ngcontent-ng-c3848021039="" points="48 40 96 40 208 216 160 216 48 40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polygon><line _ngcontent-ng-c3848021039="" x1="113.88" y1="143.53" x2="48" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line _ngcontent-ng-c3848021039="" x1="208" y1="40" x2="142.12" y2="112.47" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>`,
            footerTitle:'Follwers',
            Bgcolor:'dark',
            direction:'up',
            percentageChange:'6.75%',
            textcolor:"success"
    },
    {  id:54, title:"Youtube",
      value:'876K',
      icon:` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polygon points="160 128 112 96 112 160 160 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polygon><path d="M24,128c0,29.91,3.07,47.45,5.41,56.47A16,16,0,0,0,39,195.42C72.52,208.35,128,208,128,208s55.48.35,89-12.58a16,16,0,0,0,9.63-10.95c2.34-9,5.41-26.56,5.41-56.47s-3.07-47.45-5.41-56.47a16,16,0,0,0-9.63-11C183.48,47.65,128,48,128,48s-55.48-.35-89,12.58a16,16,0,0,0-9.63,11C27.07,80.54,24,98.09,24,128Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`,
      footerTitle:'Subscribers',
      Bgcolor:'danger',
      direction:'down',
      percentageChange:'18.91%',
      textcolor:"danger"
},
]

sanitizeIcon(icon: string): SafeHtml {
  return this.sanitizer.bypassSecurityTrustHtml(icon);
}

userStats = [
  {
    title: 'Engaged Users',
    count: '14,252',
    bgColor:'primary',
    icon: 'ri-group-line',
    chartOptions: this.chartOptions // Assuming chartOptions is defined
  },
  {
    title: 'Page Impressions',
    count: '5,14,252',
    bgColor:'secondary',
    icon: 'ri-article-line',
    chartOptions: this.chartOptions1 // Assuming chartOptions1 is defined
  }
];

socialMediaColumn = [
  {
    header :'Date'
  },
  {
    header :'Platform'
  },
  {
    header :'Likes'
  },
  {
    header :'Comments'
  },{
    header :'Shares'
  },
  {
    header :'Impressions'
  },
  {
    header :'Engaged (%)'
  },
  {
    header :'Followers'
  },
  {
    header :'Following'
  },
]
socialMediaData = [
  {
    date: '2024-02-15',
    platform: 'YouTube',
    iconClass: 'ri-youtube-fill',
    avatarClass: 'bg-danger-transparent',
    visits: 150,
    likes: 25,
    shares: 50,
    impressions: '10,000',
    ctr: '3.5%',
    reach: 458,
    engagements: 256
  },
  {
    date: '2024-02-14',
    platform: 'Twitter',
    iconClass: 'ri-twitter-x-fill',
    avatarClass: 'bg-secondary-transparent',
    visits: 200,
    likes: 30,
    shares: 70,
    impressions: '15,000',
    ctr: '4.2%',
    reach: 565,
    engagements: 355
  },
  {
    date: '2024-02-13',
    platform: 'Facebook',
    iconClass: 'ri-messenger-fill',
    avatarClass: 'bg-info-transparent',
    visits: 300,
    likes: 40,
    shares: 90,
    impressions: '20,000',
    ctr: '5.0%',
    reach: 458,
    engagements: 956
  },
  {
    date: '2024-02-12',
    platform: 'Instagram',
    iconClass: 'ri-instagram-fill',
    avatarClass: 'bg-pink-transparent',
    visits: 100,
    likes: 20,
    shares: 30,
    impressions: '8,000',
    ctr: '2.1%',
    reach: 458,
    engagements: 256
  },
  {
    date: '2024-02-11',
    platform: 'LinkedIn',
    iconClass: 'ri-linkedin-box-line',
    avatarClass: 'bg-primary-transparent',
    visits: 120,
    likes: 15,
    shares: 40,
    impressions: '12,000',
    ctr: '3.0%',
    reach: 856,
    engagements: 295
  }
];

suggestions = [
  { name: 'Socrates Itumay', mutualFriends: '3 Mutual Friends', avatar: './assets/images/faces/2.jpg' , shouldShowButton: true },
  { name: 'Ryan Gercia', mutualFriends:'1 Mutual Friends', avatar: './assets/images/faces/3.jpg', shouldShowButton: true },
  { name: 'Prax Bhav', mutualFriends: '2 Mutual Friends', avatar: './assets/images/faces/10.jpg', shouldShowButton: true },
  { name: 'Jackie Chen', mutualFriends: '12 Mutual Friends', avatar: './assets/images/faces/12.jpg', shouldShowButton: true },
  { name: 'Samantha Sam', mutualFriends: '6 Mutual Friends', avatar: './assets/images/faces/5.jpg', shouldShowButton: true },
  { name: 'Robert Lewis', mutualFriends: '8 Mutual Friends', avatar: './assets/images/faces/15.jpg', shouldShowButton: true },
];

socialRequests = [
  { initials: 'SI', name: 'Socrates Itumay', message: 'Sent you a request from Instagram', bgClass: 'primary-transparent avatar-rounded' ,dropdown:true },
  { initials: 'RG', name: 'Ryan Gercia', message: 'Followed you on Twitter', bgClass: 'secondary-transparent avatar-rounded' ,dropdown:true},
  { initials: 'PB', name: 'Prax Bhav', message: 'Sent you a connection request on LinkedIn', bgClass: 'success-transparent avatar-rounded', dropdown:true },
  { initials: 'JC', name: 'Jackie Chen', message: 'Followed you on Twitter', bgClass: 'warning-transparent avatar-rounded',dropdown:true },
  { initials: 'SS', name: 'Samantha Sam', message: 'Requested to follow you on Instagram', bgClass: 'info-transparent avatar-rounded',dropdown:true },
  { initials: 'RL', name: 'Robert Lewis', message: 'Followed you on Twitter', bgClass: 'danger-transparent avatar-rounded',dropdown:true },
];
}
