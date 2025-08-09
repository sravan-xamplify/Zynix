import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
    selector: 'app-mailsettings',
    imports: [SharedModule, NgSelectModule, FormsModule, ReactiveFormsModule, NgbNavModule, NgSelectModule, NgbModule, CommonModule, SpkNgSelectComponent, SpkDropdownsComponent],
    templateUrl: './mailsettings.component.html',
    styleUrl: './mailsettings.component.scss'
})
export class MailsettingsComponent {

  languages=[
    {value:1,label:'English'},
    {value:2,label:'French'},
    {value:3,label:'Arabic'},
    {value:4,label:'Hindi'},
  
  ]
  selected=[1,2]

  Country = ['Australia', 'Dubai', 'USA'];

  MailPage = ['10','50','100','120']
  
  Attempts = ['3 Attempts','5 Attempts','10 Attempts','20 Attempts']

   Freezetime = ['1 Day','1 Hour','1 Month','1 Year']
  
  devices = [
    {
      name: "Mobile-LG-1023",
      location: "Manchester, UK",
      date: "Nov 30, 04:45PM",
      icon: "bi-phone",
    },
    {
      name: "Lenovo-1291203",
      location: "England, UK",
      date: "Aug 12, 12:25PM",
      icon: "bi-laptop",
    },
    {
      name: "Macbook-Suzika",
      location: "Brightoon, UK",
      date: "Jul 18, 8:34AM",
      icon: "bi-laptop",
    },
    {
      name: "Apple-Desktop",
      location: "Darlington, UK",
      date: "Jan 14, 11:14AM",
      icon: "bi-pc-display-horizontal",
    }
  ];

  settings = [
    {
      title: "Daily Sending Limit",
      description: "Specify the maximum number of emails you can send.",
      icon: "bi-envelope",
      time: "10:30AM-12:30PM",
      borderClass:'border-bottom'
    },
    {
      title: "Signature",
      description: "Add an email signature that will be shown at the end of every mail.",
      icon: "bi-journal-medical",
      time: "9:00AM-1:30PM",
      borderClass:'border-bottom'
    },
    {
      title: "Custom Tracking Domain",
      description: "See up to 20% improvement in deliverability.",
      icon: "bi-send",
      time: "10:00AM-6:30PM",
      borderClass:'border-bottom'
    },
    {
      title: "Email Warm-up",
      description: "Launch a warm-up campaign to improve inbox placement and sender reputation.",
      icon: "bi-fire",
      time: "N/A",
    }
  ];

  radioButton = [
    { title: 'All Mails', icon: 'ti ti-mail-opened', checked: true },
    { title: 'Inbox', icon: 'ti ti-inbox', checked: true },
    { title: 'Sent', icon: 'ti ti-send', checked: true },
    { title: 'Drafts', icon: 'ti ti-notes', checked: true },
    { title: 'Spam', icon: 'ti ti-mail-x', checked: true },
    { title: 'Important', icon: 'ti ti-mail-star', checked: true },
    { title: 'Trash', icon: 'ti ti-trash', checked: true },
    { title: 'Archive', icon: 'ti ti-archive', checked: true },
    { title: 'Starred', icon: 'ti ti-folder-star', checked: true }
  ];

  
CustomLabels = [
    { title: 'Mail', icon: 'ti ti-mail', id: 'label-mail', checked: true },
    { title: 'Home', icon: 'ti ti-home', id: 'label-home', checked: true },
    { title: 'Work', icon: 'ti ti-briefcase', id: 'label-work', checked: true },
    { title: 'Friends', icon: 'ti ti-users', id: 'label-friends', checked: true }
  ];

  EmailNotificationSettings = [
    { title: 'Updates & Features', description: 'Notifications about new updates and their features.', id: 'switch-lg12', checked: true },
    { title: 'Early Access', description: 'Users are selected for beta testing of new update, notifications relating or participate in any of paid product promotion.', id: 'switch-lg19', checked: true },
    { title: 'Email Shortcuts', description: 'Shortcut notifications for email.', id: 'switch-lg13', checked: false },
    { title: 'New Mails', description: 'Notifications related to new mails received.', id: 'switch-lg14', checked: true },
    { title: 'Mail Chat Messages', description: 'Any of new messages are received will be updated through notifications.', id: 'switch-lg15', checked: true }
  ];

  PushNotificationSettings = [
    { title: 'New Mails', description: 'Notifications related to new mails received.', id: 'switch-lg16', checked: true },
    { title: 'Mail Chat Messages', description: 'Any of new messages are received will be updated through notifications.', id: 'switch-lg17', checked: true },
    { title: 'Mail Extensions', description: 'Notifications related to the extensions received by new emails and their properties also been displayed.', id: 'switch-lg18', checked: true }
  ];
 
  ngOnInit() {
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

  isToggled: boolean = false;
  isToggled1: boolean = false;
  isToggled2: boolean = false;
  isToggled3: boolean = false;
  isToggled4: boolean = false;
  isToggled5: boolean = false;
  isToggled6: boolean = false;
  isToggled7: boolean = false;
  isToggled8: boolean = false;
  isToggled9: boolean = false;
  isToggled10: boolean = false;
  isToggled11: boolean = false;
  isToggled12: boolean = false;
  isToggled13: boolean = false;
  isToggled14: boolean = false;
  isToggled15: boolean = false;
  isToggled16: boolean = false;
  isToggled17: boolean = false;
  isToggled18: boolean = false;
  isToggled19: boolean = false;
  isToggled20: boolean = false;
  isToggled21: boolean = false;

  
  toggle() {
    this.isToggled = !this.isToggled;
  }
  toggle1() {
    this.isToggled1 = !this.isToggled1;
  }
  toggle2() {
    this.isToggled2 = !this.isToggled2;
  }
  toggle3() {
    this.isToggled3 = !this.isToggled3;
  }
  toggle4() {
    this.isToggled4 = !this.isToggled4;
  }
  toggle5() {
    this.isToggled5 = !this.isToggled5;
  }
  toggle6() {
    this.isToggled6 = !this.isToggled6;
  }
  toggle7() {
    this.isToggled7 = !this.isToggled7;
  }
  toggle8() {
    this.isToggled8 = !this.isToggled8;
  }
  toggle9() {
    this.isToggled9 = !this.isToggled9;
  }
  toggle10() {
    this.isToggled10 = !this.isToggled10;
  }
  toggle11() {
    this.isToggled11 = !this.isToggled11;
  }
  toggle12() {
    this.isToggled12 = !this.isToggled12;
  }
  toggle13() {
    this.isToggled13 = !this.isToggled13;
  }
  toggle14() {
    this.isToggled14 = !this.isToggled14;
  }
  toggle15() {
    this.isToggled15 = !this.isToggled15;
  }
  toggle16() {
    this.isToggled16 = !this.isToggled16;
  }
  toggle17() {
    this.isToggled17 = !this.isToggled17;
  }
  toggle18() {
    this.isToggled18 = !this.isToggled18;
  }
  toggle19() {
    this.isToggled19 = !this.isToggled19;
  }
  toggle20() {
    this.isToggled20 = !this.isToggled20;
  }
  toggle21() {
    this.isToggled21 = !this.isToggled21;
  }
 
  
}
