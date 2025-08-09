import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { LightgalleryModule } from 'lightgallery/angular';
import { LightboxModule } from 'ng-gallery/lightbox';
import { GalleryItem, Gallery, ImageItem } from 'ng-gallery';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
    selector: 'app-search-page',
    imports: [SharedModule, NgbModule, RouterModule, LightgalleryModule, SpkDropdownsComponent,
        LightboxModule, CommonModule],
    templateUrl: './search-page.component.html',
    styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  items!: GalleryItem[];

  imageData = data;
 

  videos: { title: string; embedUrl: SafeResourceUrl; demoUrl: string }[] = [];

  

  constructor(public gallery: Gallery,private sanitizer: DomSanitizer) {
    this.videos = [
      {
        title: 'YNEX - HTML Installation & Usage process',
        embedUrl: this.sanitize('https://www.youtube.com/embed/JP_os1DC1MQ?si=qyUJRBl7ZJBhR_P5'),
        demoUrl: 'https://themeforest.net/item/ynex-bootstrap-admin-dashboard-template/45551445'
      },
      {
        title: 'Sash - Admin and Dashboard Multipurpose HTML Advanced Template',
        embedUrl: this.sanitize('https://www.youtube.com/embed/-lDlbQ7DiCI?si=-GRS_5Dco6Qc5ius'),
        demoUrl: 'https://themeforest.net/item/sash-bootstrap-5-admin-dashboard-template/35183671'
      },
      {
        title: 'Valex - Bootstrap 5 Admin & Dashboard HTML Template',
        embedUrl: this.sanitize('https://www.youtube.com/embed/HWvHA2FY8Ok?si=Bf-6pyMAcBG-_dR0'),
        demoUrl: 'https://themeforest.net/item/valex-bootstrap-admin-dashboard-html-template/26645744'
      },
      {
        title: 'Azea - Admin & Dashboard Bootstrap 5 HTML5 Template',
        embedUrl: this.sanitize('https://www.youtube.com/embed/Zx1HjMhcQdE?si=Nhbu6XA2PoyAlYhy'),
        demoUrl: 'https://themeforest.net/item/azea-bootstrap-5-admin-dashboard-template/33518740'
      },
      {
        title: 'Uhelp - Installation Process - Helpdesk Technical Assistance Laravel Support Ticketing System',
        embedUrl: this.sanitize('https://www.youtube.com/embed/prSkLfxlFDY?si=IKoJ0AUUYA9-UToN'),
        demoUrl: 'https://codecanyon.net/item/uhelp-helpdesk-ticketing-system-angular-version/45984821'
      },
      {
        title: 'Zanex - Bootstrap 5 Admin & Dashboard HTML5 Template',
        embedUrl: this.sanitize('https://www.youtube.com/embed/bVRW4Li8inE?si=pOpS9ep2Hn3cGL3y'),
        demoUrl: 'https://themeforest.net/item/zanex-bootstrap-5-admin-dashboard-template/32984858'
      },
      {
        title: 'Dayone - Bootstrap 5 HRM, Employee & Project Admin Dashboard HTML Template',
        embedUrl: this.sanitize('https://www.youtube.com/embed/HyFRnNIovUA?si=F--5ve0s5zfLuZK5'),
        demoUrl: 'https://themeforest.net/item/dayone-multipurpose-html-dashboard-template/31885649'
      },
      {
        title: 'Nowa - Admin and Dashboard Multipurpose HTML Advanced Template',
        embedUrl: this.sanitize('https://www.youtube.com/embed/Yk6xPgb3cfk?si=JmFGOtV5jjFvDCbS'),
        demoUrl: 'https://themeforest.net/item/nowa-bootstrap-admin-dashboard-html-template/35273899'
      }
    ];
  }

  sanitize(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }



  ngOnInit(): void {
    // Creat gallery items
    this.items = this.imageData.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
  }

  cards = [
    {
      title: 'Tech Unleashed',
      url: 'http://www.besttechgadgets.com',
      headline: 'The Latest Gadgets Revolutionizing the Industry',
      description: 'Discover cutting-edge technology and must-have gadgets. Stay ahead in the tech world with our carefully curated list of innovative devices.',
      links: ['Shop Now', 'Top 10 Picks'],
      images: []
    },
    {
      title: 'Guilt-Free Goodness',
      url: 'http://www.healthyrecipeshub.com',
      headline: 'Tasty Recipes for a Health-Conscious Lifestyle',
      description: 'Find a variety of nutritious recipes to support your well-being. From breakfast to dinner, we have a tasty meals that prioritize your health.',
      links: ['Browse Recipes', 'Nutrition Tips'],
      images: []
    },
    {
      title: 'Globetrotter’s Dream',
      url: 'http://www.travelexplorer.com',
      headline: 'Experience Unforgettable Adventures Across Continents',
      description: 'Plan your next adventure with Travel Explorer. Discover hidden gems, travel tips, and destinations to create memories that last a lifetime.',
      links: ['Explore Destinations', 'Travel Guides'],
      images: []
    },
    {
      title: 'A Blissful Journey Through the Lens',
      url: 'http://www.natureblissphotos.com',
      headline: null,
      description: null,
      links: ['Shop Now', 'Trend Alerts'],
      images: [
        './assets/images/media/media-59.jpg',
        './assets/images/media/media-60.jpg',
        './assets/images/media/media-61.jpg',
        './assets/images/media/media-62.jpg'
      ]
    },
    {
      title: 'Style Revolution',
      url: 'http://www.fashionfinds.com',
      headline: 'Upgrade Your Wardrobe with the Hottest Trends',
      description: 'Stay in vogue with Fashion Finds. Explore a curated selection of clothing, accessories, and style tips to express your unique fashion sense.',
      links: ['Shop Now', 'Trend Alerts'],
      images: []
    },
    {
      title: 'Interstellar Reading',
      url: 'http://www.sci-fibooks.com',
      headline: 'The Best Science Books for a Journey Beyond Earth',
      description: 'Dive into the realms of imagination with our collection of mind-bending science fiction novels. Embark on epic adventures beyond the stars.',
      links: ['Explore Books', 'Author Interviews'],
      images: []
    }
  ];
  
  imagelogo = [
    {
      logo:'./assets/images/company-logos/6.png'
    },
  ]

  books = [
    {
      title: 'The Universe in a Nutshell',
      author: 'F. Scott Fitzgerald',
      image: './assets/images/media/books/6.jpg',
      tags: [
        { name: 'Classic', color: 'bg-primary-transparent' },
        { name: 'Fiction', color: 'bg-secondary-transparent' },
        { name: 'Jazz Age', color: 'bg-success-transparent' }
      ],
      publishedOn: 'May 10, 1925',
      previewLink: 'javascript:void(0);'
    },
    {
      title: 'Quantum Physics for Dummies',
      author: 'Harper Lee',
      image: './assets/images/media/books/1.jpg',
      tags: [
        { name: 'Fiction', color: 'bg-danger-transparent' },
        { name: 'Legal', color: 'bg-warning-transparent' },
        { name: 'Southern Gothic', color: 'bg-info-transparent' }
      ],
      publishedOn: 'July 11, 1960',
      previewLink: 'javascript:void(0);'
    },
    {
      title: 'The Immortal Life of Henrietta Lacks',
      author: 'George Orwell',
      image: './assets/images/media/books/2.jpg',
      tags: [
        { name: 'Dystopian', color: 'bg-secondary-transparent' },
        { name: 'Political', color: 'bg-primary-transparent' },
        { name: 'Science Fiction', color: 'bg-success-transparent' }
      ],
      publishedOn: 'June 8, 1949',
      previewLink: 'javascript:void(0);'
    },
    {
      title: 'An Intimate History',
      author: 'J.R.R. Tolkien',
      image: './assets/images/media/books/3.jpg',
      tags: [
        { name: 'Fantasy', color: 'bg-primary-transparent' },
        { name: 'Adventure', color: 'bg-secondary-transparent' }
      ],
      publishedOn: 'September 21, 1937',
      previewLink: 'javascript:void(0);'
    },
    {
      title: 'The Big Picture',
      author: 'Dan Brown',
      image: './assets/images/media/books/4.jpg',
      tags: [
        { name: 'Mystery', color: 'bg-primary-transparent' },
        { name: 'Thriller', color: 'bg-secondary-transparent' },
        { name: 'Conspiracy', color: 'bg-success-transparent' }
      ],
      publishedOn: 'March 18, 2003',
      previewLink: 'javascript:void(0);'
    },
    {
      title: 'Why Evolution Is True',
      author: 'Jane Austen',
      image: './assets/images/media/books/5.jpg',
      tags: [
        { name: 'Classic', color: 'bg-primary-transparent' },
        { name: 'Romance', color: 'bg-secondary-transparent' }
      ],
      publishedOn: 'January 28, 1813',
      previewLink: 'javascript:void(0);'
    }
  ];
  

  newsCards = [
    {
      title: 'Scientists Discover New Species of Glowing Fish in Unexplored Ocean Depths',
      category: { name: 'Business', color: 'bg-primary-transparent' },
      image: './assets/images/media/media-26.jpg',
      timestamps: [
        { icon: 'ri-shield-user-line', text: '25,Jan 2024 - 12:45AM' },
        { icon: 'ri-calendar-line', text: '25,Jan 2024 - 12:45AM' }
      ],
     
    },
    {
      title: 'Tech Giants Collaborate on Revolutionary AI Project for Environmental Conservation',
      category: { name: 'Technical', color: 'bg-secondary-transparent' },
      image: './assets/images/media/media-27.jpg',
      timestamps: [
        { icon: 'ri-shield-user-line', text: '25,Jan 2024 - 12:45AM' },
        { icon: 'ri-calendar-line', text: '25,Jan 2024 - 12:45AM' }
      ],
     
    },
    {
      title: 'Historic Space Mission: Astronauts Successfully Land on Mars',
      category: { name: 'Gaming', color: 'bg-success-transparent' },
      image: './assets/images/media/media-28.jpg',
      timestamps: [
        { icon: 'ri-shield-user-line', text: '25,Jan 2024 - 12:45AM' },
        { icon: 'ri-calendar-line', text: '25,Jan 2024 - 12:45AM' }
      ],
     
    },
    {
      title: 'Global Summit Addresses Cybersecurity Threats in an Interconnected World',
      category: { name: 'News', color: 'bg-info-transparent' },
      image: './assets/images/media/media-29.jpg',
      timestamps: [
        { icon: 'ri-shield-user-line', text: '25,Jan 2024 - 12:45AM' },
        { icon: 'ri-calendar-line', text: '25,Jan 2024 - 12:45AM' }
      ],
     
    },
    {
      title: 'Virtual Reality Concerts Take the Music Industry by Storm',
      category: { name: 'Cultural', color: 'bg-warning-transparent' },
      image: './assets/images/media/media-30.jpg',
      timestamps: [
        { icon: 'ri-shield-user-line', text: '25,Jan 2024 - 12:45AM' },
        { icon: 'ri-calendar-line', text: '25,Jan 2024 - 12:45AM' }
      ],
     
    },
    {
      title: 'Record-Breaking Heatwave Sweeps Across Europe',
      category: { name: 'Music', color: 'bg-danger-transparent' },
      image: './assets/images/media/media-31.jpg',
      timestamps: [
        { icon: 'ri-shield-user-line', text: '25,Jan 2024 - 12:45AM' },
        { icon: 'ri-calendar-line', text: '25,Jan 2024 - 12:45AM' }
      ],
     
    },
    {
      title: 'New Legislation Aims to Tackle Growing Plastic Waste Crisis',
      category: { name: 'Social', color: 'bg-danger-transparent' },
      image: './assets/images/media/media-32.jpg',
      timestamps: [
        { icon: 'ri-shield-user-line', text: '25,Jan 2024 - 12:45AM' },
        { icon: 'ri-calendar-line', text: '25,Jan 2024 - 12:45AM' }
      ],
     
    },
    {
      title: 'Global Leaders Gather to Address Rising Geopolitical Tension',
      category: { name: 'Nature', color: 'bg-primary-transparent' },
      image: './assets/images/media/media-33.jpg',
      timestamps: [
        { icon: 'ri-shield-user-line', text: '25,Jan 2024 - 12:45AM' },
        { icon: 'ri-calendar-line', text: '25,Jan 2024 - 12:45AM' }
      ],
     
    }
  ];
  





}


const data = [
  {
    srcUrl: './assets/images/media/media-40.jpg',
    previewUrl: './assets/images/media/media-40.jpg',
    title:'Tech Gadgets',
    SubTitle:'Innovative Marvels',
   
  },
  {
    srcUrl: './assets/images/media/media-41.jpg',
    previewUrl: './assets/images/media/media-41.jpg',
     title:'Healthy Recipes',
    SubTitle:'Nutrient Nourish',
   
  },
  {
    srcUrl: './assets/images/media/media-42.jpg',
    previewUrl: './assets/images/media/media-44.jpg',
     title:'Travel Explorer',
    SubTitle:'Global Wander',
   
  },
  {
    srcUrl: './assets/images/media/media-43.jpg',
    previewUrl: './assets/images/media/media-43.jpg',
     title:'Fashion Finds',
    SubTitle:'Chic Styles',
   
  },
  {
    srcUrl: './assets/images/media/media-44.jpg',
    previewUrl: './assets/images/media/media-65.jpg',
     title:'Photography',
    SubTitle:'Wild Beauty',
   
  },
  {
    srcUrl: './assets/images/media/media-45.jpg',
    previewUrl: './assets/images/media/media-46.jpg',
     title:'Future Tales',
    SubTitle:'Innovative Marvels',
  },
  {
    srcUrl: './assets/images/media/media-46.jpg',
    previewUrl: './assets/images/media/media-42.jpg',
     title:'Science Fiction',
    SubTitle:'Future Tales',
  },
  {
    srcUrl: './assets/images/media/media-60.jpg',
    previewUrl: './assets/images/media/media-60.jpg',
     title:'Fitness Fanatics',
    SubTitle:'Active Vibes',
  },


]