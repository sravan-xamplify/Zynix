import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDateStruct, NgbModal, NgbInputDatepickerConfig, NgbCalendar, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { SharedModule } from '../../../../shared/shared.module';
import { SortablejsModule} from '@maksim_m/ngx-sortablejs'; 
import { CommonModule } from '@angular/common';
import { SpkDealsCardComponent } from '../../../../@spk/reusable-apps/spk-deals-card/spk-deals-card.component';
import { SpkFlatpickrComponent } from '../../../../@spk/spk-flatpickr/spk-flatpickr.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';


@Component({
    selector: 'app-deals',
    imports: [SharedModule, NgbModule, FormsModule, ReactiveFormsModule, FlatpickrModule, SortablejsModule, CommonModule, SpkDropdownsComponent, SpkDealsCardComponent, SpkFlatpickrComponent],
    providers: [FlatpickrDefaults],
    templateUrl: './deals.component.html',
    styleUrl: './deals.component.scss'
})
export class DealsComponent {
    
  model!: NgbDateStruct;
  closeResult!: string;
  basicDemoValue = '2017-01-01';

  constructor(private modalService: NgbModal, private config: NgbInputDatepickerConfig, calendar: NgbCalendar) {  }
  
  openWindowCustomClass(content:any) {
		this.modalService.open(content, { windowClass: 'dark-modal', centered:true });
	}

  normalOptions: any = {
    animation: 150,
 group: 'shared',
 // Your sortable options
 onEnd: (event: any) => this.handleDragEnd(event)
};
normalOptions1: any = {
 animation: 150,
group: 'shared',
// Your sortable options
onEnd: (event: any) => this.handleDragEnd(event)
};
normalOptions2: any = {
animation: 150,
group: 'shared',
// Your sortable options
onEnd: (event: any) => this.handleDragEnd(event)
};
normalOptions3: any = {
animation: 150,
group: 'shared',
// Your sortable options
onEnd: (event: any) => this.handleDragEnd(event)
};
normalOptions4: any = {
animation: 150,
group: 'shared',
// Your sortable options
onEnd: (event: any) => this.handleDragEnd(event)
};
normalOptions5: any = {
 animation: 150,
 group: 'shared',
 // Your sortable options
 onEnd: (event: any) => this.handleDragEnd(event)
 };
handleDragEnd(event: any): void {
 const container = document.getElementById('new-tasks-draggable');
 const cardElements = document.querySelectorAll('#new-tasks-draggable .card');
 if (container) {
   // Check if there are no child cards left
   if (container.children.length === 0) {
     container.classList.add('task-Null');
   } else {
     container.classList.remove('task-Null');
   }
 }
}
  // Handle sort end event
  onSortEnd(event: any) { }
  normalList1:any
  normalList2:any
  normalList3:any
  normalList4:any
  normalList5:any
  normalList6:any
   
  url1: string = ''; // Assuming url1 is a property in your component
  handleFileInput(event: any): void {
    const file = event.target.files[0];
    if (file) { 
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.url1 = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  statusCards = [
    {
      ngClass: 'lead-discovered',
      title:'Discovered',
      colorClass: 'bg-primary-transparent',
      amount: '$25,238',
      textClass: 'text-primary',
      iconClass: 'ri-circle-fill',
    },
    {
      title: 'Qualified',
      ngClass: 'lead-qualified',
      colorClass: 'bg-secondary-transparent',
      amount: '$32,453',
      textClass: 'text-warning',
      iconClass: 'ri-circle-fill',
    },
    {
      title: 'Initiated',
      ngClass:'contact-initiated',
      colorClass: 'bg-success-transparent',
      amount: '$13,756',
      textClass: 'text-success',
      iconClass: 'ri-circle-fill',
    },
    {
      ngClass: 'need-identified',
      title:'Identified',
      colorClass: 'bg-info-transparent',
      amount: '$47,093',
      textClass: 'text-info',
      iconClass: 'ri-circle-fill',
    },
    {
      title: 'Negotiation',
      ngClass:'negotiation',
      colorClass: 'bg-danger-transparent',
      amount: '$26,146',
      textClass: 'text-danger',
      iconClass: 'ri-circle-fill',
    },
    {
      title: 'Finalized',
      ngClass:'deal-finalized',
      colorClass: 'bg-warning-transparent',
      amount: '$1,74,679',
      textClass: 'text-warning',
      iconClass: 'ri-circle-fill',
    }
  ];
  
  discoveredLeads = [
    {
      title: 'Service Upgrade',
      companyName: 'Wcsrm Software',
      amount: '$12,000',
      date: '21,May 2024',
      imgSrc: './assets/images/faces/12.jpg',
      type: 'discovered'
    },
    {
      title: 'Product Demo',
      companyName: 'Acme Corporation LTD',
      amount: '$50,000',
      date: '18,Apr 2024',
      imgSrc: './assets/images/faces/5.jpg',
      type: 'discovered'
    },
    {
      title: 'Website Redesign',
      companyName: 'Embark Technologies',
      amount: '$20,000',
      date: '12,Jul 2024',
      imgSrc: './assets/images/faces/15.jpg',
      type: 'qualified'
    },
    {
      title: 'Consulting Services',
      companyName: 'Adam Johnson',
      amount: '$10,000',
      date: '29,Jul 2024',
      imgSrc: './assets/images/faces/6.jpg',
      type: 'qualified'
    },
  ];

  // Qualified Leads
  qualifiedLeads = [
    {
      title: 'Event Sponsorship',
      companyName: 'Initech Info',
      amount: '$10,000',
      date: '21,May 2024',
      imgSrc: './assets/images/faces/6.jpg',
      type: 'contact-initiated'
    },
    {
      title: 'Sales Training',
      companyName: 'Soylent Corp',
      amount: '$6,000',
      date: '10,May 2024',
      imgSrc: './assets/images/faces/6.jpg',
      type: 'contact-initiated'
    },
    {
      title: 'Content Creation',
      companyName: 'Hooli Technologies',
      amount: '$3,000',
      date: '25,Aug 2024',
      imgSrc: './assets/images/faces/14.jpg',
      type: 'contact-initiated'
    },
  ];

  // Contact Initiated Leads
  contactInitiatedLeads = [
    {
      title: 'E-commerce Integration',
      companyName: 'Spice Infotech',
      amount: '$12,000',
      date: '15,Sep 2024',
      imgSrc: './assets/images/faces/3.jpg',
      type: 'contact-initiated'
    },
    {
      title: 'Ad Campaign',
      companyName: 'Umbrella Corp',
      amount: '$5,500',
      date: '17,Jun 2024',
      imgSrc: './assets/images/faces/16.jpg',
      type: 'contact-initiated'
    },
  ];

  // Needs Identified Leads
  needsIdentifiedLeads = [
    {
      title: 'Webinar Series',
      companyName: 'Massive Dynamic',
      amount: '$9,500',
      date: '16,May 2024',
      imgSrc: './assets/images/faces/16.jpg',
      type: 'needs-identified'
    },
    {
      title: 'SEO Audit',
      companyName: 'Logitech Ecostics',
      amount: '$3,500',
      date: '16,May 2024',
      imgSrc: './assets/images/faces/13.jpg',
      type: 'needs-identified'
    },
    {
      title: 'Loyalty Program',
      companyName: 'Globex Corp',
      amount: '$12,000',
      date: '26,Jul 2024',
      imgSrc: './assets/images/faces/8.jpg',
      type: 'needs-identified'
    },
    {
      title: 'CRM Integration',
      companyName: 'CrystalClear Consulting',
      amount: '$10,000',
      date: '14,May 2024',
      imgSrc: './assets/images/faces/9.jpg',
      type: 'needs-identified'
    },
  ];

  // Negotiation Leads
  negotiationLeads = [
    {
      title: 'Media Analytics',
      companyName: 'GlobalConnect',
      amount: '$9,000',
      date: '18,Mar 2024',
      imgSrc: './assets/images/faces/16.jpg',
      type: 'negotiation'
    },
    {
      title: 'Lead Nurturing Strategy',
      companyName: 'AlphaTech Solutions',
      amount: '$4,000',
      date: '16,Jul 2024',
      imgSrc: './assets/images/faces/21.jpg',
      type: 'negotiation'
    },
    {
      title: 'Website Maintenance',
      companyName: 'RedRock Industries',
      amount: '$7,500',
      date: '30,Jul 2024',
      imgSrc: './assets/images/faces/13.jpg',
      type: 'negotiation'
    },
    {
      title: 'Newsletter Campaign',
      companyName: 'CoreTech Solutions',
      amount: '$2,500',
      date: '12,May 2024',
      imgSrc: './assets/images/faces/2.jpg',
      type: 'negotiation'
    },
    {
      title: 'Graphic Design',
      companyName: 'TechPro Services',
      amount: '$5,500',
      date: '10,Jul 2024',
      imgSrc: './assets/images/faces/14.jpg',
      type: 'negotiation'
    },
  ];

  // Deal Finalized Leads
  dealFinalizedLeads = [
    {
      title: 'CRM Training',
      companyName: 'BlueSky Industries',
      amount: '$4,200',
      date: '15,May 2024',
      imgSrc: './assets/images/faces/1.jpg',
      type: 'deal-finalized'
    },
    {
      title: 'Market Research',
      companyName: 'BrightStar Solutions',
      amount: '$10,700',
      date: '28,Jun 2024',
      imgSrc: './assets/images/faces/10.jpg',
      type: 'deal-finalized'
    }
  ];

}
