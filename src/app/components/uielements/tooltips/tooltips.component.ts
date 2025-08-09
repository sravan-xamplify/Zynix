import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as prismcodeData from '../../../shared/data/prismData/tooltips'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
@Component({
    selector: 'app-tooltips',
  imports: [SharedModule, NgbModule, CommonModule, ShowcodeCardComponent],
    templateUrl: './tooltips.component.html',
    styleUrls: ['./tooltips.component.scss']
})
export class TooltipsComponent {
  prismCode = prismcodeData;
  DirectionsTooltip = [
    {title:'Tooltip on Top',placement:'top' },
    {title:'Tooltip on right',placement:'right'},
    {title:'Tooltip on bottom',placement:'bottom'},
    {title:'Tooltip on left',placement:'left'},
  ]
  
  ColorTooltip = [
    { title: 'Primary Tooltip', color: 'tooltip-primary', buttonClass: 'btn btn-primary btn-wave waves-effect waves-light'},
    { title: 'Secondary Tooltip', color: 'tooltip-secondary', buttonClass: 'btn btn-secondary btn-wave waves-effect waves-light'},
    { title: 'Warning Tooltip', color: 'tooltip-warning', buttonClass: 'btn btn-warning btn-wave waves-effect waves-light' },
    { title: 'Info Tooltip', color: 'tooltip-info', buttonClass: 'btn btn-info btn-wave waves-effect waves-light' },
    { title: 'Success Tooltip', color: 'tooltip-success', buttonClass: 'btn btn-success btn-wave waves-effect waves-light' },
    { title: 'Danger Tooltip', color: 'tooltip-danger', buttonClass: 'btn btn-danger btn-wave waves-effect waves-light' },
    { title: 'Light Tooltip', color: 'tooltip-light', buttonClass: 'btn btn-light btn-wave waves-effect waves-light' },
    { title: 'Dark Tooltip', color: 'tooltip-dark', buttonClass: 'btn btn-dark btn-wave waves-effect waves-light' },
  ];
  LinkTooltip = [
    {title:'Link Tooltip',placement:'top', color:'tooltip-primary' },
  ]
  
  DisabledTooltip = [
    {title:' Disabled Button', disabled:'disabled'},
  ]

  imagesTooltip = [
    { title: 'Alex Carey', buttonClass: 'avatar avatar-md me-2 online avatar-rounded', images:'./assets/images/faces/12.jpg'},
    { title: 'Marina Kai', buttonClass: 'avatar avatar-lg me-2 online avatar-rounded',images:'./assets/images/faces/3.jpg'},
    { title: 'Tim Cook', buttonClass: 'avatar avatar-xl me-2 online avatar-rounded',images:'./assets/images/faces/15.jpg' },
   
  ];

  constructor( private sanitizer: DomSanitizer) { }

  getSanitizedSVG(svgContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  } 
}
