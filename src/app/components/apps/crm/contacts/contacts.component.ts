import { Component, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbOffcanvas, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlatpickrModule } from 'angularx-flatpickr';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkFlatpickrComponent } from '../../../../@spk/spk-flatpickr/spk-flatpickr.component';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
@Component({
    selector: 'app-contacts',
    imports: [SharedModule, NgbModule, NgSelectModule, FormsModule, FlatpickrModule, SpkDropdownsComponent, CommonModule, SpkNgSelectComponent, SpkFlatpickrComponent, SpkReusableTablesComponent],
    templateUrl: './contacts.component.html',
    styleUrl: './contacts.component.scss'
})
export class ContactsComponent {


  contactColumn=[
    {header:"Contact Name",field:"Contact Name"},
    {header:"Lead Score",field:"Lead Score"},
    {header:"Email",field:"Email"},
    {header:"Company",field:"Company"},
    {header:"Phone",field:"Phone"},
    {header:"Lead Source",field:"Lead Source"},
    {header:"Tags",field:"Tags"},
    {header:"Actions",field:"Actions"},
  ]
  
  leads=[
    {label:'Social Media',value:1},
    {label:'Direct mail',value:2},
    {label:'Blog Articles',value:3},
    {label:'Affiliates',value:4},
    {label:'Organic search',value:5},
  ]

  Tags=[
    {label:'Select Tag',value:1},
    {label:'New Lead',value:2},
    {label:'Prospect',value:3},
    {label:'Customer',value:4},
    {label:'Hot Lead',value:5},
    {label:'Partner',value:6},
    {label:'LostCustomer',value:7},
    {label:'Influencer',value:8},
    {label:'Subscriber',value:9},
  ]

  handleSelectChange(value: any | any[]) {
  }


ngOnInit(): void {
}

 closeResult!: string;

 constructor(private offcanvasService: NgbOffcanvas, private modalService: NgbModal,) {}

 openWindowCustomClass(content: any) {
   this.modalService.open(content, { windowClass: 'dark-modal'  });
   
 }
 //Offcanavs 

 openEnd(content: TemplateRef<any>) {
   this.offcanvasService.open(content, { position: 'end' });
 }

 contacts = [
  {
    id: 1,
    avatar: './assets/images/faces/4.jpg',
    name: 'JaneDoe',
    lastContacted: 'Jul,24 2024 - 4:45PM',
    score:'258',
    email: 'JaneDoe2981@gmail.com',
    companyLogo: './assets/images/company-logos/1.png',
    company: 'Wcsrm Software',
    phone: '1678-28993-223',
    source: 'Social Media',
    status: 'New Lead',
    status1: 'Prospect',
    bgColor:'primary',
    bgColor1:'primary'
  },
  {
    id: 2,
    avatar: './assets/images/faces/12.jpg',
    name: 'SarahDavis',
    lastContacted: 'Jul,15 2024 - 11:45AM',
    score:'335',
    email: 'Sarah289@gmail.com',
    companyLogo: './assets/images/company-logos/3.png',
    company: 'Spice Infotech',
    phone: '8122-2342-4453',
    source: 'Direct mail',
    status: 'Customer',
    status1: 'Hot Lead',
    bgColor:'primary',
    bgColor1:'danger'
  },
  {
    id: 3,
    avatar: './assets/images/faces/14.jpg',
    name: 'LauraWilson',
    lastContacted: 'Aug,10 2024 - 3:25PM',
    score:'685',
    email: 'Laurawilson9@gmail.com',
    companyLogo: './assets/images/company-logos/4.png',
    company: 'Logitech Ecostics',
    phone: '1902-2001-3023',
    source: 'Blog Articles',
    status: 'Partner',
    bgColor:'success',
  },
  {
    id: 4,
    avatar: './assets/images/faces/6.jpg',
    name: 'ChrisTaylor',
    lastContacted: 'Aug,18 2024 - 10:10AM',
    score:'425',
    email: 'Chris290@gmail.com',
    companyLogo: './assets/images/company-logos/5.png',
    company: 'Initech Info',
    phone: '1603-2032-1123',
    source: 'Affiliates',
    status: 'LostCustomer',
    status1: 'Influencer',
    bgColor:'light text-default ',
    bgColor1:'secondary'
  },
  {
    id: 5,
    avatar: './assets/images/faces/8.jpg',
    name: 'JamesWhite',
    lastContacted: 'Jul,19 2024 - 12:41PM',
    score:'516',
    email: 'James1993@gmail.com',
    companyLogo: './assets/images/company-logos/6.png',
    company: 'Massive Dynamic',
    phone: '1129-2302-1092',
    source: 'Organic search',
    status: 'Subscriber',
    status1: 'Partner',
    bgColor:'pink',
    bgColor1:'success'
  },
  {
    id: 6,
    avatar: './assets/images/faces/9.jpg',
    name: 'LiamWalker',
    lastContacted: 'Aug,14 2024 - 5:18PM',
    score:'127',
    email: 'LiamWalker345@gmail.com',
    companyLogo: './assets/images/company-logos/7.png',
    company: 'Globex Corporation',
    phone: '9923-2344-2003',
    source: 'Social media',
    status: 'Hot Lead',
    status1: 'Referral',
    bgColor:'danger',
    bgColor1:'info'
  },
  {
    id: 7,
    avatar: './assets/images/faces/15.jpg',
    name: 'EthanMartin',
    lastContacted: 'Jun,12 2024 - 11:38AM',
    score:'368',
    email: 'EthanMartin78@gmail.com',
    companyLogo: './assets/images/company-logos/8.png',
    company: 'Acme Corporation',
    phone: '7891-2093-1994',
    source: 'Blog Articles',
    status: 'Trial User',
    status1: 'Cold Lead',
    bgColor:'warning',
    bgColor1:'purple'
  },
  {
    id: 8,
    avatar: './assets/images/faces/1.jpg',
    name: 'MiaMoore',
    lastContacted: 'May,19 2024 - 1:57PM',
    score:'563',
    email: 'MiaMoore678@gmail.com',
    companyLogo: './assets/images/company-logos/9.png',
    company: 'Soylent Corp',
    phone: '1899-2993-0923',
    source: 'Organic search',
    status: 'Influencer',
    status1: 'Influencer',
    bgColor:'success',
    bgColor1:'info'
  },
  {
    id: 9,
    avatar: './assets/images/faces/3.jpg',
    name: 'Isabella',
    lastContacted: 'Jul,28 2024 - 9:31AM',
    score:'185',
    email: 'Isabella289@gmail.com',
    companyLogo: './assets/images/company-logos/10.png',
    company: 'Umbrella Corporation',
    phone: '1768-2332-4934',
    source: 'Affiliates',
    status: 'New Lead',
    status1: 'Subscriber',
    bgColor:'primary',
    bgColor1:'light text-default '
  },
  {
    id: 10,
    avatar: './assets/images/faces/3.jpg',
    name: 'SarahDavis',
    score:'240',
    lastContacted: 'Jul,28 2024 - 9:31AM',
    email: 'SarahDavis186@gmail.com',
    companyLogo: './assets/images/company-logos/2.png',
    company: 'Hooli Technologies',
    phone: '4788-7822-4786',
    source: ' Direct mail ',
    status: 'New Lead',
    status1: 'Lost Customer',
    bgColor:'primary',
    bgColor1:'pink'
  }
];

deleteContact(contactId: number): void {
    this.contacts = this.contacts.filter(contact => contact.id !== contactId);
}
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
}

