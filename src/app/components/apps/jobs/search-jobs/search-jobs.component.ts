import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LabelType, NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { SharedModule } from '../../../../shared/shared.module';   
import { NgSelectModule } from '@ng-select/ng-select';
import * as noUiSlider from 'nouislider';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkJobsearchCardComponent } from '../../../../@spk/reusable-apps/spk-jobsearch-card/spk-jobsearch-card.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';


@Component({
    selector: 'app-search-jobs',
    imports: [SharedModule, NgbModule, FormsModule, ReactiveFormsModule, SpkDropdownsComponent, CommonModule, NgxSliderModule, NgSelectModule, SpkNgSelectComponent, SpkJobsearchCardComponent],
    templateUrl: './search-jobs.component.html',
    styleUrl: './search-jobs.component.scss'
})
export class SearchJobsComponent {
  lowerValue: number = 8000;
  upperValue: number = 40000;


  ngAfterViewInit(): void {
    const slider = document.getElementById('nonlinear') as noUiSlider.target; // Correct type is noUiSlider.target

    noUiSlider.create(slider, {
      start: [this.lowerValue, this.upperValue],
      connect: true,
      range: {
        'min': [0],
        'max': [50000]
      }
    });

    const lowerValueElem :any= document.getElementById('lower-value');
    const upperValueElem:any = document.getElementById('upper-value');

    slider.noUiSlider?.on('update', (values: any, handle: any) => {
      if (handle === 0) {
        this.lowerValue = Math.round(values[0] as number);
        lowerValueElem.innerHTML = this.lowerValue.toString();
      } else {
        this.upperValue = Math.round(values[1] as number);
        upperValueElem.innerHTML = this.upperValue.toString();
      }
    });
  }

  Qualification = [
    {label:"Select Qualification",value:1},
    {label:"All Education Levels",value:2},
    {label:"10th Pass and Above",value:3},
    {label:"12th Pass and Above",value:4},
    {label:"Diploma and Graduate",value:5},
   ]
   Experience = [
    {label:"Select Experince",value:1},
    {label:"Fresher",value:2},
    {label:"Less than 1 year",value:3},
    {label:"Less than 2 year",value:4},
    {label:"Less than 3 year",value:5},
   ]
   Employement = [
    {label:"Select Type",value:1},
    {label:"Full Time",value:2},
    {label:"Part Time",value:3},
    {label:"Internship",value:4},
   ]
   Skills = [
    {label:"Select Skill",value:1},
    {label:"HTML5",value:2},
    {label:"Javascript",value:3},
    {label:"PHP",value:4},
    {label:"React JS",value:5},
   ]

  jobAlerts = [
    {
      title: 'HTML Developer - Fresher',
      company: 'Spotech Technical Solutions',
      location: 'Hyderabad',
      openings: '13 Openings',
      education: 'Graduate',
      experience: 'Min - 2Years',
      shift: 'flexible-shift',
      salary: '$25,000',
      avatarIcon: 'ri-html5-fill',
      avatarColor: 'primary',
      wishlistIcon: 'ri-heart-3-line',
      salaryDetails: {
        value: 25000,
        unit: 'Month',
      },
      applyLink: 'javascript:void(0);',
    },
    {
      title: 'React Lead Developer',
      company: 'Infratech PVT LTD',
      location: 'Hyderabad',
      openings: '13 Openings',
      education: 'Graduate',
      experience: 'Min - 2Years',
      shift: 'flexible-shift',
      salary: '$17,000',
      avatarIcon: 'ri-reactjs-line',
      avatarColor: 'secondary',
      wishlistIcon: 'ri-heart-3-fill',
      salaryDetails: {
        value: 17000,
        unit: 'Month',
      },
      applyLink: 'javascript:void(0);',
    },
    {
      title: 'Vuejs Frontend Developer',
      company: 'G Technical Solutions',
      location: 'Hyderabad',
      openings: '13 Openings',
      education: 'Graduate',
      experience: 'Min - 2Years',
      shift: 'flexible-shift',
      salary: '$16,000',
      avatarIcon: 'ri-vuejs-line',
      avatarColor: 'success',
      wishlistIcon: 'ri-heart-3-line',
      salaryDetails: {
        value: 16000,
        unit: 'Month',
      },
      applyLink: 'javascript:void(0);',
    },
    {
      title: 'Wordpress Developer - Remote',
      company: 'Hardware Private Solutions',
      location: 'Hyderabad',
      openings: '13 Openings',
      education: 'Graduate',
      experience: 'Min - 2Years',
      shift: 'flexible-shift',
      salary: '$12,000',
      avatarIcon: 'ri-wordpress-line',
      avatarColor: 'info',
      wishlistIcon: 'ri-heart-3-line',
      salaryDetails: {
        value: 12000,
        unit: 'Month',
      },
      applyLink: 'javascript:void(0);',
    },
    {
      title: 'HTML Developer - Fresher',
      company: 'Spotech Technical Solutions',
      location: 'Hyderabad',
      openings: '13 Openings',
      education: 'Graduate',
      experience: 'Min - 2Years',
      shift: 'flexible-shift',
      salary: '$10,000',
      avatarIcon: 'ri-html5-fill',
      avatarColor: 'warning',
      wishlistIcon: 'ri-heart-3-fill',
      salaryDetails: {
        value: 10000,
        unit: 'Month',
      },
      applyLink: 'javascript:void(0);',
    },
    {
      title: 'React Lead Developer',
      company: 'Infratech PVT LTD',
      location: 'Hyderabad',
      openings: '13 Openings',
      education: 'Graduate',
      experience: 'Min - 2Years',
      shift: 'flexible-shift',
      salary: '$20,000',
      avatarIcon: 'ri-reactjs-line',
      avatarColor: 'primary',
      wishlistIcon: 'ri-heart-3-fill',
      salaryDetails: {
        value: 20000,
        unit: 'Month',
      },
      applyLink: 'javascript:void(0);',
    },
    {
      title: 'Vuejs Frontend Developer',
      company: 'G Technical Solutions',
      location: 'Hyderabad',
      openings: '13 Openings',
      education: 'Graduate',
      experience: 'Min - 2Years',
      shift: 'flexible-shift',
      salary: '$55,000',
      avatarIcon: 'ri-vuejs-line',
      avatarColor: 'secondary',
      wishlistIcon: 'ri-heart-3-line',
      salaryDetails: {
        value: 55000,
        unit: 'Month',
      },
      applyLink: 'javascript:void(0);',
    },
    {
      title: 'HTML Developer - Fresher',
      company: 'Spotech Technical Solutions',
      location: 'Hyderabad',
      openings: '13 Openings',
      education: 'Graduate',
      experience: 'Min - 2Years',
      shift: 'flexible-shift',
      salary: '$30,000',
      avatarIcon: 'ri-html5-fill',
      avatarColor: 'danger',
      wishlistIcon: 'ri-heart-3-fill',
      salaryDetails: {
        value: 30000,
        unit: 'Month',
      },
      applyLink: 'javascript:void(0);',
    },
  ];

}
