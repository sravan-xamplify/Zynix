import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../../shared/shared.module';

import { Observable } from 'rxjs';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';
import * as prismCodeData from '../../../../shared/data/prismData/forms/formselect'
import { ShowcodeCardComponent } from '../../../../shared/components/showcode-card/showcode-card.component';

@Component({
    selector: 'app-formselect',
    imports: [SharedModule, NgSelectModule, FormsModule, ReactiveFormsModule, SpkNgSelectComponent, ShowcodeCardComponent],
    templateUrl: './formselect.component.html',
    styleUrl: './formselect.component.scss'
})
export class FormselectComponent {

  prismCode = prismCodeData;
  handleSelectChange(value: any | any[]) {
  }
  multipleSelect = [
    { label: 'Choice 1', value: 1 },
    { label: 'Choice 2', value: 2 },
    { label: 'Choice 3', value: 3 },
    { label: 'Choice 4', value: 4 },
    { label: 'Choice 5', value: 5 },
    { label: 'Choice 6', value: 6, disabled: true },
    // Add more options as needed
  ];
selected=[1]
selectedValues=[1,2];
Passing=[
  { label: 'one', value: 1 },
  { label: 'two', value: 2 },
  { label: 'three', value: 3 },
  { label: 'four', value: 4 },
]
Options=[
  { label: 'Label Five', value: 1 },
  { label: 'Label Four', value: 2 },
  { label: 'Label One', value: 3 },
  { label: 'Label Six', value: 4 },
  { label: 'Label Three', value: 5 },
  { label: 'Label Two', value: 6 },
  { label: 'Label Zero', value: 7 },
]
PassingUnique=[
  { label: 'child-1', value: 1 },
  { label: 'child-2', value: 2 },
]
Single=[
  {label:'Choice 1',value:1},
  {label:'Choice 2',value:2},
  {label:'Choice 3',value:3},
]
cityOptions = [
  { label: 'Choose a city', value: '' },
  { label: 'UK', disabled: true },
  { label: 'London', value: 'London' },
  { label: 'Manchester', value: 'Manchester' },
  { label: 'Liverpool', value: 'Liverpool' },
  { label: 'FR', disabled: true },
  { label: 'Paris', value: 'Paris' },
  { label: 'Lyon', value: 'Lyon' },
  { label: 'Marseille', value: 'Marseille' },
  { label: 'US', disabled: true },
  { label: 'New York', value: 'New York' },
  { label: 'Washington', value: 'Washington', disabled: true },
  { label: 'Michigan', value: 'Michigan' },
  { label: 'SP', disabled: true },
  { label: 'Madrid', value: 'Madrid' },
  { label: 'Barcelona', value: 'Barcelona' },
  { label: 'Malaga', value: 'Malaga' },
  { label: 'CA', disabled: true },
  { label: 'Montreal', value: 'Montreal' },
  { label: 'Toronto', value: 'Toronto' },
  { label: 'Vancouver', value: 'Vancouver' },
];
selectedValues1=[1,2];
  selectedCompanies: any;
  companies: any[] = [];
  companiesNames = ['Uber', 'Microsoft', 'Flexigen'];
  month$!: Observable<any[]>;
  selectedMonth = '6';
  selectedAccount = 'AZ';
  email: string = '';
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  uniqueOptions: any=['child1','child2'];
  DefaultOptions: any=['Choice 1','Choice 2','Choice 3'];
  
  ngOnInit() {
    this.companiesNames.forEach((c, i) => {
      this.companies.push({ id: i, name: c });
    });
  }
  
  accounts = [
    {
      name: 'Arizona',
      value: 'AZ',
      country: 'Mountain Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Colorado',
      value: 'CO',
      country: 'Mountain Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Idaho',
      value: 'ID',
      country: 'Mountain Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Montana',
      value: 'MT',
      country: 'Mountain Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Nebraska',
      value: 'NE',
      country: 'Mountain Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'New Mexico',
      value: 'NM',
      country: 'Mountain Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'North Dakota',
      value: 'AZ',
      country: 'Mountain Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Utah',
      value: 'UT',
      country: 'Mountain Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Wyoming',
      value: 'WY',
      country: 'Mountain Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Alabama',
      value: 'AL',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Arkansas',
      value: 'AR',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Illinois',
      value: 'IL',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Iowa',
      value: 'IA',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Kansas',
      value: 'KS',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Kentucky',
      value: 'KY',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Louisiana',
      value: 'LA',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Minnesota',
      value: 'MN',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Mississippi',
      value: 'MS',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Missouri',
      value: 'MO',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Oklahoma',
      value: 'OK',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'South Dakota',
      value: 'SD',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Texas',
      value: 'TX',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Tennessee',
      value: 'TN',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
    {
      name: 'Wisconsin',
      value: 'WI',
      country: 'Central Time Zone',
      child: { state: 'Active' },
    },
  ];

  addTagFn(name: any) {
    return { name: name, tag: true };
  }

  selectedAccounts = [{ name: 'Adam' }];
  compareAccounts = (item: any, selected: any) => {
    if (selected.country && item.country) {
      return item.country === selected.country;
    }
    if (item.name && selected.name) {
      return item.name === selected.name;
    }
    return false;
  };

  hideselectedAccounts = [{ name: 'Adam' }];
  hidecompareAccounts = (item: any, selected: any) => {
    if (selected.country && item.country) {
      return item.country === selected.country;
    }
    if (item.name && selected.name) {
      return item.name === selected.name;
    }
    return false;
  };
  selectedUniqueValue = ['child-1','child-2']
  
  selectedgroup = 'Adam';
  groups = [
      { name: 'Adam', email: 'adam@email.com', age: 12, country: 'United States', child: { state: 'Active' } },
      { name: 'Homer', email: 'homer@email.com', age: 47, country: '', child: { state: 'Active' } },
      { name: 'Samantha', email: 'samantha@email.com', age: 30, country: 'United States', child: { state: 'Active' } },
      { name: 'Amalie', email: 'amalie@email.com', age: 12, country: 'Argentina', child: { state: 'Active' } },
      { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina', child: { state: 'Active' } },
      { name: 'Adrian', email: 'adrian@email.com', age: 21, country: 'Ecuador', child: { state: 'Active' } },
      { name: 'Wladimir', email: 'wladimir@email.com', age: 30, country: 'Ecuador', child: { state: 'Inactive' } },
      { name: 'Natasha', email: 'natasha@email.com', age: 54, country: 'Ecuador', child: { state: 'Inactive' } },
      { name: 'Nicole', email: 'nicole@email.com', age: 43, country: 'Colombia', child: { state: 'Inactive' } },
      { name: 'Michael', email: 'michael@email.com', age: 15, country: 'Colombia', child: { state: 'Inactive' } },
      { name: 'Nicolás', email: 'nicole@email.com', age: 43, country: 'Colombia', child: { state: 'Inactive' } }
  ];
  showattributeName = [{ name: 'one' }];
  MultipleAttribute = (item: any, selected: any) => {
    if (selected.country && item.country) {
      return item.country === selected.country;
    }
    if (item.name && selected.name) {
      return item.name === selected.name;
    }
    return false;
  };
}
