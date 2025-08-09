import { Component } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SharedModule } from '../../../shared/shared.module';
import * as prismcodeData from '../../../shared/data/prismData/popovers'
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
@Component({
    selector: 'app-popovers',
  imports: [SharedModule, NgbPopoverModule, ShowcodeCardComponent],
    templateUrl: './popovers.component.html',
    styleUrls: ['./popovers.component.scss']
})
export class PopoversComponent {
  prismCode = prismcodeData;
  defaultPopovers = [
    {
      buttonText: 'Popover Top',
      placement: 'top',
      title: 'Popover on Top',
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      class: 'primary',
    },
    {
      buttonText: 'Popover Right',
      placement: 'right',
      title: 'Popover on Right',
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      class: 'primary',
    },
    {
      buttonText: 'Popover Bottom',
      placement: 'bottom',
      title: 'Popover on Bottom',
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      class: 'primary',
    },
    {
      buttonText: 'Popover Left',
      placement: 'start',
      title: 'Popover on Left',
      content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
      class: 'primary',
    },
  ];
  coloredPopovers = [
    { id: 1, header: "header-primary",   class: 'primary', title: 'colored header', title1: "Header Primary", content: "Popover with primary header.", textcolor: "" },
    { id: 5, header: "header-secondary", class: "secondary", title: 'colored header', title1: "Header Secondary", content: "Popover with Secondary header.", textcolor: '' },
    { id: 6, header: "header-info",      class: "info", title: 'colored header', title1: "Header Info", content: "Popover with Info header.", textcolor: '' },
    { id: 7, header: "header-warning",  class: "warning", title: 'colored header', title1: "Header Warning", content: "Popover with Warning header.", textcolor: '' },
    { id: 8, header: "header-success",  class: "success", title: 'colored header', title1: "Header Success", content: "Popover with success header.", textcolor: '' },
    { id: 9, header: "header-danger",  class: "danger", title: 'colored header', title1: "Header Danger", content: "Popover with Danger header.", textcolor: '' },
  ];
  coloredBackground = [
    { id: 1, header: "Color Background",class:"primary",popoverClass:"popover-primary", title: "Primary",  content: "Popover with Primary background.", color: "primary", textcolor: ""},
    { id: 2, header: "Color Background",class:"secondary", popoverClass:"popover-secondary",title: "Secondary", content: "Popover with Secondary background.", color: "secondary", textcolor: ''},
    { id: 3, header: "Color Background",class:"info",popoverClass:"popover-info",title: "Info", content: "Popover with Info background.", color: "info", textcolor: ''},
    { id: 4, header: "Color Background",class:"warning",popoverClass:"popover-warning",title: "Warning", content: "Popover with Warning background.", color: "warning", textcolor: ''},
    { id: 5, header: "Color Background",class:"success",popoverClass:"popover-success",title: "Success", content: "Popover with Success background.", color: "success", textcolor: ''},
    { id: 6, header: "Color Background",class:"danger",popoverClass:"popover-danger",title: "Danger", content: "Popover with danger background.", color: "danger", textcolor: ''},
    { id: 7, header: "Color Background",class:"teal",popoverClass:"popover-teal", title: "Teal",content: "Popover with Teal background.", color: "teal", textcolor: ''},
    { id: 8, header: "Color Background",class:"purple",popoverClass:"popover-purple", title: "Purple",content: "Popover with Purple background.", color: "purple", textcolor: ''}
  ];
  lightPopovers = [
    { id: 1, header: "Color Background",class:"primary",popoverClass:"primary", title: "Primary",  content: "Popover with Primary background.", color: "primary", textcolor: ""},
    { id: 2, header: "Color Background",class:"secondary", popoverClass:"secondary",title: "Secondary", content: "Popover with Secondary background.", color: "secondary", textcolor: ''},
    { id: 3, header: "Color Background",class:"info",popoverClass:"info",title: "Info", content: "Popover with Info background.", color: "info", textcolor: ''},
    { id: 4, header: "Color Background",class:"warning",popoverClass:"warning",title: "Warning", content: "Popover with Warning background.", color: "warning", textcolor: ''},
    { id: 5, header: "Color Background",class:"success",popoverClass:"success",title: "Success", content: "Popover with Success background.", color: "success", textcolor: ''},
    { id: 6, header: "Color Background",class:"danger",popoverClass:"danger",title: "Danger", content: "Popover with danger background.", color: "danger", textcolor: ''},
    { id: 7, header: "Color Background",class:"teal",popoverClass:"teal", title: "Teal",content: "Popover with Teal background.", color: "teal", textcolor: ''},
    { id: 8, header: "Color Background",class:"purple",popoverClass:"purple", title: "Purple",content: "Popover with Purple background.", color: "purple", textcolor: ''}
  ];
  DismisablePopover = [
    { id: 1,header:'Dismissible popover', title: "popover Dismiss", content: "And here's some amazing content. It's very engaging. Right?", color: "primary"},
    { id: 2,header:'Dismissible popover', title: "popover Dismiss", content: "And here's some amazing content. It's very engaging. Right?", color: "secondary"},
    { id: 3,header:'Dismissible popover', title: "popover Dismiss", content: "And here's some amazing content. It's very engaging. Right?", color: "info"},
    { id: 4,header:'Dismissible popover', title: "popover Dismiss", content: "And here's some amazing content. It's very engaging. Right?", color: "warning"},
  ]
  SvgPopover = [
    { id: 1,
      class:'primary',svg:'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" /></svg>',
      content: "This popover is used to provide details about this icon.",  color: "primary", textcolor: ""},
    { id: 2,
      class:'secondary',
      content: "This popover is used to provide details about this icon.", svg: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`, color: "secondary", textcolor: ''},
   
  ]
  
  constructor( private sanitizer: DomSanitizer) { }
  
  getSanitizedSVG(svgContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  } 
}
