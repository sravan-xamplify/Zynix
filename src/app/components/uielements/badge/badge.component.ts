import { Component } from '@angular/core';
import * as PrismCode from '../../../shared/data/prismData/badge';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import { SharedModule } from '../../../shared/shared.module';

@Component({
    selector: 'app-badge',
  imports: [SharedModule, ShowcodeCardComponent],
    templateUrl: './badge.component.html',
    styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  prsimCodeData: any = PrismCode;
  badges = [
    { text: 'Primary', class: 'bg-primary' },
    { text: 'Secondary', class: 'bg-secondary' },
    { text: 'Success', class: 'bg-success' },
    { text: 'Danger', class: 'bg-danger' },
    { text: 'Warning', class: 'bg-warning' },
    { text: 'Info', class: 'bg-info' },
    { text: 'Light', class: 'bg-light text-dark' },
    { text: 'Dark', class: 'bg-dark text-white' }
  ];
  notificationButtons = [
    { btnClass: 'btn-primary',   badgeClass: 'bg-secondary', count:4 },
    { btnClass: 'btn-secondary', badgeClass: 'bg-primary',  count: 7 },
    { btnClass: 'btn-success',   badgeClass: 'bg-danger',   count: 12 },
    { btnClass: 'btn-info',      badgeClass: 'bg-warning',  count: 32 }

  ];
  outlineButtonBadges = [
      { btnClass: 'primary',   badgeClass: 'badge', count:4 },
      { btnClass: 'secondary', badgeClass: 'badge',  count: 7 },
      { btnClass: 'success',   badgeClass: 'badge',   count: 12 },
      { btnClass: 'info',      badgeClass: 'badge',  count: 32 }
  ];
  pillBadges=[
    { text: 'Primary', class: 'bg-primary' },
    { text: 'Secondary', class: 'bg-secondary' },
    { text: 'Success', class: 'bg-success' },
    { text: 'Danger', class: 'bg-danger' },
    { text: 'Warning', class: 'bg-warning' },
    { text: 'Info', class: 'bg-info' },
    { text: 'Light', class: 'bg-light text-dark' },
    { text: 'Dark', class: 'bg-dark text-white' }
  ]
  lightpillBadges=[
    { text: 'Primary', class: 'bg-primary-transparent' },
    { text: 'Secondary', class: 'bg-secondary-transparent' },
    { text: 'Success', class: 'bg-success-transparent' },
    { text: 'Danger', class: 'bg-danger-transparent' },
    { text: 'Warning', class: 'bg-warning-transparent' },
    { text: 'Info', class: 'bg-info-transparent' },
    { text: 'Light', class: 'bg-light text-dark' },
    { text: 'Dark', class: 'bg-dark text-white' }
  ]
  lightBadges=[
    { text: 'Primary', class: 'bg-primary-transparent' },
    { text: 'Secondary', class: 'bg-secondary-transparent' },
    { text: 'Success', class: 'bg-success-transparent' },
    { text: 'Danger', class: 'bg-danger-transparent' },
    { text: 'Warning', class: 'bg-warning-transparent' },
    { text: 'Info', class: 'bg-info-transparent' },
    { text: 'Light', class: 'bg-light-transparent text-dark' },
    { text: 'Dark', class: 'bg-dark-transparent' }
  ]
  gradientBadges=[
    { text: 'Primary', class: 'bg-primary-gradient' },
    { text: 'Secondary', class: 'bg-secondary-gradient' },
    { text: 'Success', class: 'bg-success-gradient' },
    { text: 'Danger', class: 'bg-danger-gradient' },
    { text: 'Warning', class: 'bg-warning-gradient' },
    { text: 'Info', class: 'bg-info-gradient' },
    { text: 'Orange', class: 'bg-orange-gradient' },
    { text: 'Purple', class: 'bg-purple-gradient' }
  ]
  outlineBadges=[
    { text: 'Primary', class: 'primary' },
    { text: 'Secondary', class: 'secondary' },
    { text: 'Success', class: 'success' },
    { text: 'Danger', class: 'danger' },
    { text: 'Warning', class: 'warning' },
    { text: 'Info', class: 'info' },
    { text: 'light ', class: 'light text-dark' },
    { text: 'dark', class: 'dark' }
  ]
  getSanitizedSVG(svgContent: any): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  } 
constructor(private sanitizer:DomSanitizer) {}
}



  
  

  

  

  

  
  

  

  

