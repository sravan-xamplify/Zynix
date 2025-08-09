import { Component, Input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../../shared/shared.module';
import * as noUiSlider from 'nouislider';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
    selector: 'app-search-company',
    imports: [SharedModule, NgbModule, NgSelectModule, SpkNgSelectComponent, SpkDropdownsComponent],
    templateUrl: './search-company.component.html',
    styleUrl: './search-company.component.scss'
})
export class SearchCompanyComponent {
  lowerValue: number = 100;
  upperValue: number = 500;

  ngAfterViewInit(): void {
    const slider = document.getElementById('nonlinear') as noUiSlider.target; // Correct type is noUiSlider.target

    noUiSlider.create(slider, {
      start: [this.lowerValue, this.upperValue],
      connect: true,
      range: {
        'min': [0],
        'max': [1000]
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
  Employement = [
    {label:"Select Type",value:1},
    {label:"Full Time",value:2},
    {label:"Part Time",value:3},
    {label:"Internship",value:4},
   ]
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
   Recruiter = [
    {label:"Select Type",value:1},
    {label:"Agency",value:2},
    {label:"Direct Company",value:3},
   ]
  companies = [
    {
      position:'HTML Developer - Fresher',
      name: 'Costco Wholesale Corporation',
      location: 'Kondapur, Hyderabad',
      establishmentYear: 2019,
      logo: './assets/images/company-logos/1.png',
      employees: 345,
      vacancies: 50,
      website: 'costcowholesalecorporation.com',
      verified: true,
      heartBg:'line'
    },
    {
      position:'HTML Developer - Fresher',
      name: 'Bayerische Motoren Werke AG',
      location: 'Gachibowli, Hyderabad',
      establishmentYear: 2015,
      logo: './assets/images/company-logos/2.png',
      employees: 146,
      vacancies: 40,
      website: 'bayerische.solutions.com',
      verified: true,
       heartBg:'fill'
    },
    {
      position:'HTML Developer - Fresher',
      name: 'Verizon Communications Inc.',
      location: 'Gachibowli, Chennai',
      establishmentYear: 2013,
      logo: './assets/images/company-logos/3.png',
      employees: 56,
      vacancies: 35,
      website: 'verizon.communications.com',
      verified: true,
       heartBg:'fill'
    },
    {
      position:'HTML Developer - Fresher',
      name: 'The Walt Disney Pvt Ltd',
      location: 'Gachibowli, Bangalore',
      establishmentYear: 2002,
      logo: './assets/images/company-logos/7.png',
      employees: 120,
      vacancies: 10,
      website: 'waltdisney.pvt.ltd',
      verified: true,
       heartBg:'line'
    },
    {
      position:'HTML Developer - Fresher',
      name: 'Northrop Grumman Corporation',
      location: 'Gachibowli, Bangalore',
      establishmentYear: 2017,
      logo: './assets/images/company-logos/5.png',
      employees: 120,
      vacancies: 10,
      website: 'northropgrumman.orporation.com',
      verified: true,
       heartBg:'line'
    },
    {
      position:'HTML Developer - Fresher',
      name: 'Starbucks Corporation',
      location: 'Kukatpally, Hyderabad',
      establishmentYear: 2000,
      logo: './assets/images/company-logos/6.png',
      employees: 120,
      vacancies: 10,
      website: 'starbuckscorporation.com',
      verified: true,
       heartBg:'fill'
    },
    {
      position:'HTML Developer - Fresher',
      name: 'Robinhood Markets, Inc',
      location: 'Kondapur, Hyderabad',
      establishmentYear: 2019,
      logo: './assets/images/company-logos/10.png',
      employees: 345,
      vacancies: 50,
      website: 'robinhood.markets.com',
      verified: true,
       heartBg:'line'
    },
    {
      position:'HTML Developer - Fresher',
      name: 'International Data Group, Inc.',
      location: 'Gachibowli, Hyderabad',
      establishmentYear: 2015,
      logo: './assets/images/company-logos/9.png',
      employees: 146,
      vacancies: 40,
      website: 'international.group.com',
      verified: true,
       heartBg:'line'
    },
  ];
  Location=['Hyderabad','Banglore','Chennai']
}
