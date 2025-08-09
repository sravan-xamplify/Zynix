import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../../shared/shared.module';
import * as noUiSlider from 'nouislider';
import { CommonModule } from '@angular/common';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
    selector: 'app-search-candidate',
    imports: [SharedModule, NgbModule, NgSelectModule, FormsModule, RouterModule, CommonModule, SpkNgSelectComponent, SpkDropdownsComponent],
    templateUrl: './search-candidate.component.html',
    styleUrl: './search-candidate.component.scss'
})
export class SearchCandidateComponent {

  lowerValue: number = 5000;
  upperValue: number = 9000;

  ngAfterViewInit(): void {
    const slider = document.getElementById('nonlinear') as noUiSlider.target; // Correct type is noUiSlider.target

    noUiSlider.create(slider, {
      start: [this.lowerValue, this.upperValue],
      connect: true,
      range: {
        'min': [1000],
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

  Categories=[
    {label:"All Categories",value:1},
    {label:"Software Developer",value:2},
    {label:"Web Developer",value:3},
    {label:"Software Architect",value:4},
    {label:"IT Hardware",value:5},
    {label:"Network Engineer",value:6},
    {label:"Angular Developer",value:7},
    {label:"React Developer",value:8}
   ]
   Experiance=[
    {label:"Fresher's",value:1},
    {label:"1 Year Exp",value:2},
    {label:"2 Year Exp",value:3},
    {label:"3 Year Exp",value:4},
    {label:"4 Year Exp",value:5},
    {label:"5 yrs Exp",value:6},
   ]


  Availability = [
    {label:"Select Availability",value:1},
    {label:"Immediate",value:2},
    {label:"30 Days",value:3},
    {label:"3 months",value:4},
   ]


   Agreement = [
    {label:"Select Bond",value:1},
    {label:"0.5 Year",value:2},
    {label:"1 year",value:3},
    {label:"2 year",value:4},
    {label:"3 year",value:5},
   ]
   Language = [
    {label:"Select Language",value:1},
    {label:"English",value:2},
    {label:"Hindi",value:3},
    {label:"Telugu",value:4}
   ]
   Employement = [
    {label:"Select Type",value:1},
    {label:"Full Time",value:2},
    {label:"Part Time",value:3},
    {label:"Internship",value:4},
   ]
 
   Qualification = [
    {label:"Select Qualification",value:1},
    {label:"All Education Levels",value:2},
    {label:"10th Pass and Above",value:3},
    {label:"12th Pass and Above",value:4},
    {label:"Diploma and Graduate",value:5},
   ]

   Skills = [
    {label:"Select Skill",value:1},
    {label:"HTML5",value:2},
    {label:"Javascript",value:3},
    {label:"PHP",value:4},
    {label:"React JS",value:5},
   ]


  jobCandidates = [
    {
      name: 'Emily Brown',
      role: 'UI Developer',
      heartBg: 'line',
      location: 'Kondapur, Hyderabad',
      imageUrl: './assets/images/faces/1.jpg',
      package: { current: '$2,300', expected: '$3,678' },
      languages: ['English', 'Hindi', 'Telugu'],
      skills: ['HTML', 'CSS', 'Javascript'],
      thumbs:'thumbs',
       bgcolor:'primary',
      bgcolor1:'secondary',
      bond: '1 year bond accepted',
      experience: 'Exp: 2 Years',
      resume: { downloadLabel: 'Download Resume', wishlistLabel: 'Add to Wishlist' }
    },
    {
      name: 'David Miller',
      role: 'Web Developer',
      heartBg: 'line',
      location: 'Gachibowli, Hyderabad',
      imageUrl: './assets/images/faces/3.jpg',
      package: { current: '$3,600', expected: '$4,700' },
      languages: ['English', 'Telugu'],
      skills: ['React', 'React Native'],
      thumbs:'thumbs',
       bgcolor:'primary',
      bgcolor1:'secondary',
      bond: '2 years bond accepted',
      experience: 'Exp: 4 Years',
      resume: { downloadLabel: 'Download Resume', wishlistLabel: 'Add to Wishlist' }
    },
    {
      name: 'Daniel Kim',
      role: 'Python Developer',
      heartBg: 'fill',
      location: 'Gachibowli, Chennai',
      imageUrl: './assets/images/faces/21.jpg',
      package: { current: '$4,300', expected: '$5,000' },
      languages: ['English', 'Hindi'],
      skills: ['Python', 'Java', 'React'],
      thumbs:'',
      bgcolor1:'primary',
      bgcolor:'',
      experience: 'Exp: 5 Years',
      resume: { downloadLabel: 'Download Resume', wishlistLabel: 'Add to Wishlist' }
    },
    {
      name: 'Emma Clark',
      role: 'Java Developer',
      heartBg: 'fill',
      location: 'Gachibowli, Banglore',
      imageUrl: './assets/images/faces/5.jpg',
      package: { expected: '$3,678' },
      languages: ['English', 'Hindi', 'Telugu'],
      skills: ['Java', 'Core Java'],
      thumbs:'thumbs',
       bgcolor:'info',
      bgcolor1:'primary',
      bond: '2 years bond accepted',
      experience: 'Fresher',
      resume: { downloadLabel: 'Download Resume', wishlistLabel: 'Add to Wishlist' }
    },
    {
      name: 'Liam Walker',
      role: 'Angular Developer',
      heartBg: 'fill',
      location: 'Gachibowli, Nellore',
      imageUrl: './assets/images/faces/13.jpg',
      package: { current: '$3,600', expected: '$4,700' },
      languages: ['English', 'Telugu'],
      skills: ['Angular', 'Advanced Java'],
      thumbs:'thumbs',
       bgcolor:'info',
      bgcolor1:'primary',
      bond: '2 years bond accepted',
      experience: 'Exp: 5 Years',
      resume: { downloadLabel: 'Download Resume', wishlistLabel: 'Add to Wishlist' }
    },
    {
      name: 'Ethan Martin',
      role: 'AWS Developer',
      heartBg: 'line',
      location: 'Kukatpally, Hyderabad',
      imageUrl: './assets/images/faces/21.jpg',
      package: { expected: '$8,900' },
      languages: ['English', 'Hindi', 'Telugu'],
      skills: ['AWS Lambda', 'Athena', 'Linux'],
      thumbs:'',
      bgcolor:'',
      bgcolor1:'primary',
      experience: 'Fresher',
      resume: { downloadLabel: 'Download Resume', wishlistLabel: 'Add to Wishlist' }
    },
    {
      name: 'Chris Taylor',
      role: 'UI Developer',
      heartBg: 'fill',
      location: 'Kondapur, Hyderabad',
      imageUrl: './assets/images/faces/1.jpg',
      package: { current: '$2,300', expected: '$3,678' },
      languages: ['English', 'Hindi', 'Telugu'],
      skills: ['HTML', 'CSS', 'Javascript'],
      thumbs:'thumbs',
       bgcolor:'info',
      bgcolor1:'primary',
      bond: '1 year bond accepted',
      experience: 'Exp: 2 Years',
      resume: { downloadLabel: 'Download Resume', wishlistLabel: 'Add to Wishlist' }
    },
    {
      name: 'Sarah Davis',
      role: 'Web Developer',
      heartBg: 'line',
      location: 'Gachibowli, Hyderabad',
      imageUrl: './assets/images/faces/3.jpg',
      package: { current: '$3,600', expected: '$4,700' },
      languages: ['English', 'Telugu'],
      skills: ['React', 'React Native'],
      thumbs:'thumbs',
       bgcolor:'info',
      bgcolor1:'primary',
      bond: '2 years bond accepted',
      experience: 'Exp: 4 Years',
      rating: { stars: 3.5, totalRatings: 35 },
      resume: { downloadLabel: 'Download Resume', wishlistLabel: 'Add to Wishlist' }
    }
  ];
  
  

}
