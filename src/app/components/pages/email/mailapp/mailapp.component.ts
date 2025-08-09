import { Component, HostListener, inject, TemplateRef } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { NgbModal, NgbModule, NgbOffcanvas, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { CommonModule } from '@angular/common';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
    selector: 'app-mailapp',
    imports: [SharedModule, NgbModule, NgSelectModule, AngularEditorModule, SpkNgSelectComponent, SpkDropdownsComponent,
        ReactiveFormsModule, FormsModule, HttpClientModule, NgbTooltipModule, OverlayscrollbarsModule, CommonModule],
    templateUrl: './mailapp.component.html',
    styleUrl: './mailapp.component.scss'
})
export class MailappComponent  {
  Mails=[
    {label:"jay@gmail.com",value:1},
    {label:"kia@gmail.com",value:2},
    {label:"don@gmail.com",value:3},
    {label:"kimo@gmail.com",value:4},
  ]
  selectedTags=[1]
	

  openWindowCustomClass(content: any) {
		this.modalService.open(content, {  size: 'lg' });
	}
  

  htmlContent1:string = ``;

  config1: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',    
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

  private offcanvasService = inject(NgbOffcanvas);

	openEnd(content1: TemplateRef<any>) {
    this.offcanvasService.open(content1, {
      position: 'end',
      panelClass: 'mail-info-offcanvas'
    });
	}
  constructor(private modalService: NgbModal) { 
    // this.updateDisplay(); 
  }
  isScreenSmall: boolean = window.innerWidth < 992;

  // Listener for window resize
  @HostListener('window:resize', [])
  onResize() {
    this.isScreenSmall = window.innerWidth < 992;
    this.updateDisplay();
  }

  // Function to toggle between mail-navigation and total-mails
  removedetails1() {
    const mailNavigation = document.querySelector('.mail-navigation') as HTMLElement;
    const totalMails = document.querySelector('.total-mails') as HTMLElement;

    if (this.isScreenSmall) {
      if (mailNavigation.classList.contains('d-block')) {
        mailNavigation.classList.remove('d-block');
        mailNavigation.classList.add('d-none');
        totalMails.classList.remove('d-none');
        totalMails.classList.add('d-block');
      } else {
        mailNavigation.classList.remove('d-none');
        mailNavigation.classList.add('d-block');
        totalMails.classList.remove('d-block');
        totalMails.classList.add('d-none');
      }
    } else {
      this.updateDisplay(); // Ensure both are displayed for larger screens
    }
  }

  // Ensure both sections are visible for larger screens
  updateDisplay() {
    const mailNavigation = document.querySelector('.mail-navigation') as HTMLElement;
    const totalMails = document.querySelector('.total-mails') as HTMLElement;

    if (this.isScreenSmall) {
      // Handle small screens
      mailNavigation.classList.add('d-block');
      mailNavigation.classList.remove('d-none');
      totalMails.classList.add('d-none');
      totalMails.classList.remove('d-block');
    } else {
      // Handle large screens
      mailNavigation.classList.add('d-block');
      mailNavigation.classList.remove('d-none');
      totalMails.classList.add('d-block');
      totalMails.classList.remove('d-none');
    }
  }

  // Function to remove all mail details
  allMailremove() {
    const mailNavigation = document.querySelector('.mail-navigation') as HTMLElement;
    const totalMails = document.querySelector('.total-mails') as HTMLElement;

    if (this.isScreenSmall) {
      mailNavigation.classList.remove('d-block');
      mailNavigation.classList.add('d-none');
      totalMails.classList.remove('d-none');
      totalMails.classList.add('d-block');
    } else {
      this.updateDisplay(); // Ensure proper display for larger screens
    }
  }
  
  mailData = [
     {
      status :'',
      active:'',
      img:'./assets/images/faces/5.jpg',
      time:'1:32PM',
      name:' Amelia Turner',
      title:'Quarterly Report Review',
      content:'Dear Team, kindly review the attached quarterly report before our meeting at 2 PM tomorrow. Your insights are appreciated.',
      badge:'fill',
      
     },
     {
      active:'active',
      status :'checked',
      img:'./assets/images/faces/12.jpg',
      time:'10:27AM',
      name:' Liam Parker',
      title:'Proposal Submission Confirmation',
      content:'Good day, this is to confirm the successful submission of our proposal for the upcoming client presentation. Await further instructions',
      badge:'fill',
      check:'checked'
     },
     {
      status :'',
      badge1:'Promotion',
      bg:'success',
      img:'./assets/images/faces/7.jpg',
      time:'Yesterday, 10:27AM',
      name:'  Owen Foster',
      title:'Schedule Adjustment Request',
      content:'Colleagues, I am requesting a brief meeting tomorrow to discuss a necessary adjustment to our project schedule. Your availability appreciated.',
      badge:'fill'
     },
     {
      status :'',
      badge1:'Social',
      bg:'primary ',
      img:'./assets/images/faces/8.jpg',
      time:'24 Oct, 5:45PM',
      name:' Isabella Carter',
      title:'Invitation to Industry Webinar',
      content:'Greetings, your registration for the upcoming training session on [Topic] has been confirmed. Details and pre-read materials are attached. Ensure your readiness',
      badge:'fill',
      check:'checked'
     },
     {
      status :'',
      img:'./assets/images/faces/15.jpg',
      time:'12 Sep, 11:24AM',
      name:' Mason Wallace',
      title:'Budget Approval Pending',
      content:"Team, our budget proposal is pending approval. Please review the final draft attached and share any last-minute feedback before tomorrow's meeting.",
      badge:'fill'
     },
     {
      status :'',
      badge1:'Personal',
      bg:'danger',
      img:'./assets/images/faces/16.jpg',
      time:'11 Sep, 10:32AM',
      name:' Leo Phillips',
      title:'Project Update Meeting',
      content:"Hello Team, let's convene for a project update meeting on Thursday at 10 AM. Please come prepared with progress reports and potential roadblocks",
      badge:'fill'
     },
     {
      status :'',
      img:'./assets/images/faces/14.jpg',
      time:'08 Aug, 08:12AM',
      name:'  Logan Brooks',
      title:'Request for Collaboration',
      content:'Dear [Name], I am reaching out to explore potential collaboration opportunities between our organizations. Would you be available for a brief discussion next week?.',
      badge:'fill'
     },
     {
      status :'',
      img:'./assets/images/faces/13.jpg',
      time:'16 July, 05:52PM',
      name:'Jackson Rivera',
      title:'Training Session Confirmation',
      content:'Greetings, your registration for the upcoming training session on [Topic] has been confirmed. Details and pre-read materials are attached. Ensure your readiness.',
      badge:'fill',
      
     },
  ]
  mails = [
    { name: 'All Mails', icon: 'ti ti-mail', badge: '6,446', badgeClass: 'bg-primary' },
    { name: 'Inbox', icon: 'ti ti-inbox', badge: '26', badgeClass: 'bg-secondary' },
    { name: 'Sent', icon: 'ti ti-send' },
    { name: 'Drafts', icon: 'ti ti-notes' },
    { name: 'Spam', icon: 'ti ti-alert-circle', badge: '6', badgeClass: 'bg-success' },
    { name: 'Archive', icon: 'ti ti-archive' },
    { name: 'Important', icon: 'ti ti-bookmark' },
    { name: 'Trash', icon: 'ti ti-trash' },
    { name: 'Starred', icon: 'ti ti-star', badge: '16', badgeClass: 'bg-info' },
  ];

  labels = [
    { name: 'Mail', iconClass: 'text-primary' },
    { name: 'Home', iconClass: 'text-secondary' },
    { name: 'Work', iconClass: 'text-success' },
    { name: 'Friends', iconClass: 'text-info' }
  ];
  events = [
    {
      name: "Blockers For Interview",
      time: "10:30AM-12:30PM",
      icon: "ri-group-line",
      bgColor: "bg-primary-transparent"
    },
    {
      name: "Design Team Meeting",
      time: "9:00AM-1:30PM",
      icon: "ri-calendar-schedule-line",
      bgColor: "bg-secondary-transparent"
    },
    {
      name: "Office Anniversary Event",
      time: "10:00AM-6:30PM",
      icon: "ri-gift-2-line",
      bgColor: "bg-success-transparent"
    }
  ];

}
