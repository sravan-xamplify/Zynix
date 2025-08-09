import { Component } from '@angular/core';
import { Gallery, GalleryItem, GalleryModule, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import {  Lightbox, LightboxModule } from 'ng-gallery/lightbox';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LightgalleryModule } from 'lightgallery/angular';
import { LightGallery } from 'lightgallery/lightgallery';
import lgZoom from 'lightgallery/plugins/zoom';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SpkTagsComponent } from '../../../@spk/reusable-apps/spk-tags/spk-tags.component';
import { SpkGalleryComponent } from '../../../@spk/spk-reusable-plugins/spk-gallery/spk-gallery.component';
import { SpkNgSelectComponent } from '../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
    selector: 'app-profile',
  imports: [SharedModule, GalleryModule, SpkNgSelectComponent, SpkDropdownsComponent,
    LightboxModule, NgbModule, LightgalleryModule, RouterModule, NgSelectModule, CommonModule, FormsModule, SpkTagsComponent, SpkGalleryComponent],
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  private lightGallery!: LightGallery;
  private needRefresh = false;
  ngAfterViewChecked(): void {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }
  title = 'angular-demo';
  settings = {
    counter: false,
    plugins: [lgZoom]
  };

  badgeData = [
    'Data Analysis' , 
    'Marketing Strategy' 
   , 'Graphic Design' 
   , 'Content Creation' 
   , 'Market Research' 
   , 'Client Relations' 
   , 'Event Planning' 
   , 'Budgeting and Finance' 
   , 'Negotiation Skills' 
   , 'Team Collaboration' 
   , 'Adaptability' 
    
  ];
  selectedSkills=[1,2,3,4,5,6,7,8,9,10,11,12]
  selectedSkill = [
    {value:1,label:'Project Management'},
    {value:2,label:'Data Analysis'},
    {value:3,label:'Marketing Strategy'},
    {value:4,label:'Graphic Design'},
    {value:5,label:'Content Creation'},
    {value:6,label:'Market Research'},
    {value:7,label:'Client Relations'},
    {value:8,label:'Event Planning'},
    {value:9,label:'Budgeting and Finance'},
    {value:10,label:'Negotiation Skills'},
    {value:11,label:'Team Collaboration'},
    {value:12,label:'Adaptability'}];
 
 items!: GalleryItem[];

  imageData = data;

  constructor(public gallery: Gallery) {}

  ngOnInit(): void {
    // Creat gallery items
    this.items = this.imageData.map(
      (item: { srcUrl: any; previewUrl: any }) =>
        new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
  }

  users = [
    {
      name: 'Della Jasmine',
      email: 'dellajasmine117@gmail.com',
      avatar: './assets/images/faces/2.jpg',
      position: 'Product Designer',
      badgeClass: 'bg-info-transparent'
    },
    {
      name: 'Danny Raj',
      email: 'dannyraj658@gmail.com',
      avatar: './assets/images/faces/15.jpg',
      position: 'UI Designer',
      badgeClass: 'bg-success-transparent'
    },
    {
      name: 'Catalina Keira',
      email: 'catalinakeira023@gmail.com',
      avatar: './assets/images/faces/5.jpg',
      position: 'Product Designer',
      badgeClass: 'bg-info-transparent'
    },
    {
      name: 'Priceton Gray',
      email: 'pricetongray451@gmail.com',
      avatar: './assets/images/faces/11.jpg',
      position: 'Team Manager',
      badgeClass: 'bg-warning-transparent'
    },
    {
      name: 'Sarah Ruth',
      email: 'sarahruth45@gmail.com',
      avatar: './assets/images/faces/7.jpg',
      position: 'Product Designer',
      badgeClass: 'bg-info-transparent'
    },
    {
      name: 'Mahira Hose',
      email: 'mahirahose9456@gmail.com',
      avatar: './assets/images/faces/12.jpg',
      position: 'Product Designer',
      badgeClass: 'bg-info-transparent'
    },
    {
      name: 'Victoria Gracie',
      email: 'victoriagracie@gmail.com',
      avatar: './assets/images/faces/1.jpg',
      position: 'Product Designer',
      badgeClass: 'bg-info-transparent'
    },
    {
      name: 'Amith Gray',
      email: 'amithgray132@gmail.com',
      avatar: './assets/images/faces/13.jpg',
      position: 'Product Designer',
      badgeClass: 'bg-info-transparent'
    }
  ];

  userslist = [
    {
      name: 'Amelia Turner',
      avatar: './assets/images/faces/1.jpg'
    },
    {
      name: 'Henry Morgan',
      avatar: './assets/images/faces/14.jpg'
    },
    {
      name: 'Aurora Reed',
      avatar: './assets/images/faces/3.jpg'
    },
    {
      name: 'Leo Phillips',
      avatar: './assets/images/faces/10.jpg'
    },
    {
      name: 'Ava Taylor',
      avatar: './assets/images/faces/5.jpg'
    }
  ];

  socialLinks = [
    {
      platform: 'Github',
      iconClass: 'ri-github-line',
      bgClass: 'bg-primary-transparent',
      url: 'github.com/wcsrm'
    },
    {
      platform: 'Twitter',
      iconClass: 'ri-twitter-x-fill',
      bgClass: 'bg-secondary-transparent',
      url: 'twitter.com/wcsrm.me'
    },
    {
      platform: 'Linkedin',
      iconClass: 'ri-linkedin-box-line',
      bgClass: 'bg-success-transparent',
      url: 'linkedin.com/in/wcsrm'
    },
    {
      platform: 'My Portfolio',
      iconClass: 'ri-briefcase-2-line',
      bgClass: 'bg-info-transparent',
      url: 'wcsrm.com/'
    }
  ];


}

const data = [
  {
    srcUrl: './assets/images/media/media-40.jpg',
    previewUrl: './assets/images/media/media-40.jpg',
  },
  {
    srcUrl: './assets/images/media/media-41.jpg',
    previewUrl: './assets/images/media/media-41.jpg',
  },
  {
    srcUrl: './assets/images/media/media-42.jpg',
    previewUrl: './assets/images/media/media-42.jpg',
  },
  {
    srcUrl: './assets/images/media/media-43.jpg',
    previewUrl: './assets/images/media/media-43.jpg',
  },
  {
    srcUrl: './assets/images/media/media-44.jpg',
    previewUrl: './assets/images/media/media-44.jpg',
  },
  {
    srcUrl: './assets/images/media/media-45.jpg',
    previewUrl: './assets/images/media/media-45.jpg',
  },
  {
    srcUrl: './assets/images/media/media-46.jpg',
    previewUrl: './assets/images/media/media-46.jpg',
  },
  {
    srcUrl: './assets/images/media/media-41.jpg',
    previewUrl: './assets/images/media/media-41.jpg',
  },
  {
    srcUrl: './assets/images/media/media-60.jpg',
    previewUrl: './assets/images/media/media-60.jpg',
  },
  {
    srcUrl: './assets/images/media/media-26.jpg',
    previewUrl: './assets/images/media/media-26.jpg',
  },
  {
    srcUrl: './assets/images/media/media-32.jpg',
    previewUrl: './assets/images/media/media-32.jpg',
  },
  {
    srcUrl: './assets/images/media/media-30.jpg',
    previewUrl: './assets/images/media/media-30.jpg',
  },
  {
    srcUrl: './assets/images/media/media-46.jpg',
    previewUrl: './assets/images/media/media-46.jpg',
  },
  {
    srcUrl: './assets/images/media/media-59.jpg',
    previewUrl: './assets/images/media/media-59.jpg',
  },
  {
    srcUrl: './assets/images/media/media-61.jpg',
    previewUrl: './assets/images/media/media-61.jpg',
  },
  {
    srcUrl: './assets/images/media/media-42.jpg',
    previewUrl: './assets/images/media/media-42.jpg',
  },
 
  
]
