import { Component, ElementRef, inject, TemplateRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import {  NgbModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { LightgalleryModule } from 'lightgallery/angular';
import { LightboxModule } from 'ng-gallery/lightbox';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-chat',
    imports: [SharedModule, NgbModule, RouterModule, OverlayscrollbarsModule, LightgalleryModule, LightboxModule, SpkDropdownsComponent, CommonModule],
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})

export class ChatComponent {

  active = 1;

  @ViewChild('chatuserdetails') chatuserdetails!: ElementRef;

  RecentData = [
    {
      status: 'online',
      src: './assets/images/faces/5.jpg',
      name: 'JaneDoe',
      time: '1:32PM',
      message: "Hey there! How's your day going?",
      sent:'double-fill'
    },
    {
      status: 'online',
      src: './assets/images/faces/2.jpg',
      name: 'AlexJohnson',
      time: '12:24PM',
      message: 'Typing...',
      badge: '2',
      type:'chat-msg-typing'
    },
    {
      status: 'online',
      src: './assets/images/faces/10.jpg',
      name: 'SarahDavis',
      time: '1:21PM',
      message: "Just had the best coffee ever! ☕",
      sent:'double-fill',
    },
    {
      status: 'online',
      src: './assets/images/faces/8.jpg',
      name: 'DavidMiller',
      time: '12:32PM',
      message: 'Guess what? I aced that test!',
      sent:'double-fill'
    },
    
  ];
  RecentData1 = [
    {
      status: 'offline',
      src: './assets/images/faces/11.jpg',
      name: 'LiamNelson ',
      time: '12:32PM',
      message: 'Movie night tonight? 🎬',
      sent:''
    },
    {
      status: 'offline',
      src: './assets/images/faces/3.jpg',
      name: 'OliviaMartin',
      time: '12:10PM',
      message: 'Work is dragging...',
    },
    {
      status: 'offline',
      src: './assets/images/faces/6.jpg',
      name: 'JacksonLewis',
      time: '10:12PM',
      message: 'Meet for lunch tomorrow?',
      unread:'chat-msg-unread '
    },
    {
      status: 'offline',
      src: './assets/images/faces/4.jpg',
      name: 'HenryPhillips',
      time: '7:32PM',
      message: 'Weekend plans?',
    },
    {
      status: 'offline',
      src: './assets/images/faces/13.jpg',
      name: 'IsabellaKing',
      time: '1:22PM',
      message: 'Craving pizza right now! 🍕',
    },
    {
      status: 'offline',
      src: './assets/images/faces/15.jpg',
      name: 'SophiaWalker',
      time: '10.21AM',
      message: 'Got any Netflix recommendations? ',
    },
  ]

  GroupData = [
    {
      name: '1) Workplace Wizards',
      status: '4 Online',
      bg: 'success-transparent',
      Qty: ' +19',
      src: './assets/images/faces/2.jpg',
      src1: './assets/images/faces/8.jpg',
      src2: './assets/images/faces/2.jpg',
      src3: './assets/images/faces/10.jpg',
    },
    {
      name: '2)  ProgrammingPioneers',
      status: '32 Online',
      bg: 'secondary-transparent',
      Qty: ' +123',
      src: './assets/images/faces/1.jpg',
      src1: './assets/images/faces/7.jpg',
      src2: './assets/images/faces/3.jpg',
      src3: './assets/images/faces/9.jpg',
      src4: './assets/images/faces/12.jpg',
    },
    {
      name: '3) GoodTimesGroup',
      status: '3 Online',
      bg: 'warning-transparent',
      Qty: ' +15',
      src: './assets/images/faces/4.jpg',
      src1: './assets/images/faces/8.jpg',
      src2: './assets/images/faces/13.jpg',
      src3: './assets/images/faces/12.jpg',
      src4: './assets/images/faces/13.jpg',
    },
    {
      name: '4) The Hangout Haven',
      status: '10 Online',
      bg: 'danger-transparent',
      Qty: ' +23',
      src: './assets/images/faces/1.jpg',
      src1: './assets/images/faces/7.jpg',
      src2: './assets/images/faces/14.jpg',
      src3: './assets/images/faces/12.jpg',
      src4: './assets/images/faces/13.jpg',
    },
    {
      name: '5) The Family Room',
      status: '0 Online',
      bg: 'light text-dark',
      Qty: ' +15',
      src: './assets/images/faces/5.jpg',
      src1: './assets/images/faces/6.jpg',
      src2: './assets/images/faces/12.jpg',
      src3: './assets/images/faces/3.jpg',
    },
  ];
  GroupChatData = [
    {
      status: 'online',
      src: './assets/images/faces/17.jpg',
      name: '  BookLoversUnited 😍',
      time: '1:32PM',
      message: 'Hira Typing...',
      badge: '2',
      bg:'success-transparent',
      msgBg:'chat-msg-typing'
    },
    {
      status: 'online',
      src: './assets/images/faces/18.jpg',
      name: ' TogetherForever',
      time: '11:32PM',
      message1:'Ram :',
      message: 'Happy to be part of this group',
      bg:'',
      sent:'double-fill'
    },
    {
      status: 'offline',
      src: './assets/images/faces/19.jpg',
      name: 'The Idea Exchange Hub 😎',
      time: '3 days ago',
      message: 'Simon,Melissa,Amanda,Patrick,Siddique',
    },
    {
      status: 'offline',
      src: './assets/images/faces/20.jpg',
      name: ' TechieTribe',
      time: '5 days ago',
      message: 'Kamalan,Subha,Ambrose,Kiara,Jackson',
    },
    {
      status: 'offline',
      src: './assets/images/faces/21.jpg',
      name: 'The Chill Squad',
      time: '12 days ago',
      message: 'Subman,Rajen,Kairo,Dibasha,Alexa',
    },
  ];

  ContactData = [
    {
      status: 'online',
      src: './assets/images/faces/5.jpg',
      name: 'AmandaClark',
      time: 'Today,12:47PM',
      device: 'phone',
    },
    {
      status: 'online',
      src: './assets/images/faces/7.jpg',
      name: 'BenjaminAdams',
      time: 'Today,10:27AM',
      device: 'phone',
    },
    {
      status: 'online',
      src: './assets/images/faces/21.jpg',
      name: ' ChloeHarris',
      time: 'Yesterday,12:45PM',
      device: 'video',
    },
    {
      status: 'offline',
      src: './assets/images/faces/15.jpg',
      name: 'DanielLewis',
      time: '3 days ago',
      device: 'phone',
    },
    {
      status: 'offline',
      src: './assets/images/faces/4.jpg',
      name: '  DavidMiller',
      time: '22, Oct 2022',
      device: 'video',
    },
    {
      status: 'offline',
      src: './assets/images/faces/16.jpg',
      name: ' JohnSmith',
      time: '24, Oct 2022',
      device: 'phone',
    },
    {
      status: 'offline',
      src: './assets/images/faces/8.jpg',
      name: ' LauraWilson',
      time: '22, Oct 2022',
      device: 'phone',
    },
    {
      status: 'offline',
      src: './assets/images/faces/3.jpg',
      name: '  LiamNelson',
      time: '12, Oct 2022',
      device: 'video',
    },
    {
      status: 'offline',
      src: './assets/images/faces/9.jpg',
      name: ' Noah Russell',
      time: '13, Sep 2022',
      device: 'phone',
    },
    {
      status: 'offline',
      src: './assets/images/faces/21.jpg',
      name: '  Wyatt Thompson',
      time: '10, July 2022',
      device: 'phone',
    },
    {
      status: 'offline',
      src: './assets/images/faces/14.jpg',
      name: '  Jason Steph',
      time: '1, Apr 2022',
      device: 'phone',
    },
  ];

  contacts = [
    { initial: 'A', name: 'Ava Taylor', image: './assets/images/faces/5.jpg' },
    { initial: 'B', name: 'Benjamin Turner', image: './assets/images/faces/12.jpg' },
    { initial: 'C', name: 'Caleb Rodriguez', image: './assets/images/faces/14.jpg' },
    { initial: 'D', name: 'Daniel Sullivan', image: '', initialsAvatar: 'DS', bgClass: 'bg-primary' },
    { initial: 'E', name: 'Emma Johnson', image: './assets/images/faces/7.jpg' },
    { initial: 'J', name: 'Jackson Rivera', image: './assets/images/faces/15.jpg' },
    { initial: 'L', name: 'Leo Phillips', image: '', initialsAvatar: 'LP', bgClass: 'bg-primary' },
    { initial: 'N', name: 'Noah Russell', image: './assets/images/faces/10.jpg' },
    { initial: 'W', name: 'Wyatt Thompson', image: './assets/images/faces/16.jpg' },
  ];

  activeUser = this.RecentData[0];

  items!: GalleryItem[];

  imageData = data;
 
  constructor(
    public elementRef: ElementRef,public gallery: Gallery
  ) {}

  private offcanvasService = inject(NgbOffcanvas);

	openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}

  ngOnInit(): void {
    // Retrieve activeItemId from localStorage on initialization
    const savedActiveItemId = localStorage.getItem('activeItemId');
    if (savedActiveItemId) {
      this.activeItemId = savedActiveItemId;
    }
  }

  activeItemId: string | null = null; // Track the ID of the active item
  handleClick(activeUser: any): void {
    this.activeItemId = activeUser.name; // Set the clicked item as active
    localStorage.setItem('activeItemId', activeUser.name); 
    this.activeUser = activeUser;
    if (window.innerWidth <= 992) {
      document.querySelector('.main-chart-wrapper ')?.classList.add('responsive-chat-open');
    }
  }

  removedetails() {
    document.querySelector('.main-chart-wrapper ')?.classList.remove('responsive-chat-open');
  }

  ngOninit(){
    this.items = this.imageData.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );

  }
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
    srcUrl: './assets/images/media/media-60.jpg',
    previewUrl: './assets/images/media/media-60.jpg',
  },
  {
    srcUrl: './assets/images/media/media-61.jpg',
    previewUrl: './assets/images/media/media-61.jpg',
  },
]
