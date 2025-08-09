import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
@Component({
    selector: 'app-leads',
    imports: [SharedModule, NgbModule, NgSelectModule, FormsModule, SpkReusableTablesComponent, SpkNgSelectComponent, SpkDropdownsComponent],
    templateUrl: './leads.component.html',
    styleUrl: './leads.component.scss'
})
export class LeadsComponent {
closeResult!: string;

constructor(private modalService: NgbModal) {}

openModal(content:any) {
  this.modalService.open(content,{ centered: true });
}

handleSelectChange(value: any | any[]) {
}
Leadsstatus=[
  {label:'New',value:1},
  {label:'Follow-up',value:2},
  {label:'Closed',value:3},
  {label:'Contacted',value:4},
  {label:'Disqualified',value:5},
  {label:'Qualified',value:6},
]
Leadssource=[
  {label:'Social Media',value:1},
  {label:'Direct mail',value:2},
  {label:'Blog Articles',value:3},
  {label:'Affiliates',value:4},
  {label:'Organic search',value:5},
]
Tags=[
  {label:'New Lead',value:1},
  {label:'Prospect',value:2},
  {label:'Customer',value:3},
  {label:'Hot Lead',value:4},
  {label:'Partner',value:5},
  {label:'LostCustomer',value:6},
  {label:'Influencer',value:4},
  {label:'Subscriber',value:5},
]


leadsColumn=[
  {header:"Contact Name",field:"Contact Name"},
  {header:"Email",field:"Email"},
  {header:"Phone",field:"Phone"},
  {header:"Lead Status",field:"Lead Status"},
  {header:"Company",field:"Company"},
  {header:"Lead Source",field:"Lead Source"},
  {header:"Tags",field:"Tags"},
  {header:"Actions",field:"Actions"},
]

contacts = [
  {
    id: 1,
    avatar: './assets/images/faces/4.jpg',
    name: 'Charlotte',
    lead: 'new',
    score:'258',
    email: 'Charlotte2981@gmail.com',
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
    name: 'Thomas',
    lead: 'Follow-up',
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
    lead: 'Closed',
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
    lead: 'Contacted',
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
    lead: 'Follow-up',
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
    lead: 'Closed',
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
    lead: 'Disqualified',
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
    lead: 'Qualified',
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
    lead: 'Contacted',
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
    name: 'Thomas',
    score:'240',
    lead: 'new',
    email: 'Thomas186@gmail.com',
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
