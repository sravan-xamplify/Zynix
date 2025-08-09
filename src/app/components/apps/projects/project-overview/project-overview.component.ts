import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkProjectoverviewCardComponent } from '../../../../@spk/reusable-apps/spk-projectoverview-card/spk-projectoverview-card.component';
import { CommonModule } from '@angular/common';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
    selector: 'app-project-overview',
    imports: [SharedModule, RouterModule, NgbModule, SpkProjectoverviewCardComponent, CommonModule, SpkDropdownsComponent],
    templateUrl: './project-overview.component.html',
    styleUrl: './project-overview.component.scss'
})
export class ProjectOverviewComponent {
  listGroupData = [
    {
      column: 1,
      items: [
        {
          iconClass: "ri-link fs-15 text-primary lh-1 p-1 bg-primary-transparent rounded-circle",
          description: "Identify the key requirements for the voting system"
        },
        {
          iconClass: "ri-link fs-15 text-primary lh-1 p-1 bg-primary-transparent rounded-circle",
          description: "Research blockchain technologies suitable for voting."
        },
        {
          iconClass: "ri-link fs-15 text-primary lh-1 p-1 bg-primary-transparent rounded-circle",
          description: "Plan for scalability, security, and privacy."
        }
      ]
    },
    {
      column: 2,
      items: [
        {
          iconClass: "ri-link fs-15 text-primary lh-1 p-1 bg-primary-transparent rounded-circle",
          description: "Research latest web development trends."
        },
        {
          iconClass: "ri-link fs-15 text-primary lh-1 p-1 bg-primary-transparent rounded-circle",
          description: "Implement additional security measures as needed."
        },
        {
          iconClass: "ri-link fs-15 text-primary lh-1 p-1 bg-primary-transparent rounded-circle",
          description: "Test the network’s performance and reliability."
        }
      ]
    }
  ];
  badgeData = [
    'Teamwork',
    'Graphic Design',
    'Responsive Design',
    'Web Accessibility',
    'Front-End Build Tools',
    'RESTful APIs',
    'Performance Testing',
    'Angular',
    'Vue.js'
  ];
  TagsData = [
    'Dashboard',
    'Medium',
    'Launch',
    'SpaceX',
  ];
  teamData = [
    { image: './assets/images/faces/1.jpg', name: 'Robert Fox', role: 'Web Developer' },
    { image: './assets/images/faces/2.jpg', name: 'Simon Cowall', role: 'Ui Tester' },
    { image: './assets/images/faces/3.jpg', name: 'Meisha Kerr', role: 'React Developer' },
    { image: './assets/images/faces/4.jpg', name: 'Jessica', role: 'UX Designer' },
    { image: './assets/images/faces/5.jpg', name: 'Amanda B', role: 'HTML Developer' },
    { image: './assets/images/faces/6.jpg', name: 'Stathman', role: 'Web Developer' }
  ];

  categories = [
    { name: 'In Progress', iconClass: 'ri-loop-left-line', iconColor: 'blue', cardCount: 8, percentage: 60 },
    { name: 'Need Review', iconClass: 'ri-error-warning-line', iconColor: 'gray', cardCount: 5, percentage: 54 },
    { name: 'Completed', iconClass: 'ri-checkbox-circle-line', iconColor: 'green', cardCount: 7, percentage: 15 },
    { name: 'Backlog', iconClass: 'ri-arrow-left-circle-line', iconColor: 'teal', cardCount: 12, percentage: 20 },
    { name: 'Pending', iconClass: 'ri-arrow-left-circle-line', iconColor: 'orange', cardCount: 10, percentage: 32 }
  ];

  goals = [
    { label: 'Enhance user experience', checked: true },
    { label: 'Boost inventory accuracy', checked: false },
    { label: 'Reduce manual errors', checked: false },
    { label: 'Improve data security', checked: false },
    { label: 'Increase operational efficiency', checked: true }
  ];

  handleCheckboxChange(updatedItem: { label: string; checked: boolean }) {
    // console.log('Checkbox updated:', updatedItem);
  }

  documents = [
    {
      fileName: 'Full Project',
      fileSize: '0.45MB',
      iconClass: 'svg-primary',
      svgPath: 'M213.66,66.34l-40-40A8,8,0,0,0,168,24H88A16,16,0,0,0,72,40V56H56A16,16,0,0,0,40,72V216a16,16,0,0,0,16,16H168a16,16,0,0,0,16-16V200h16a16,16,0,0,0,16-16V72A8,8,0,0,0,213.66,66.34ZM136,192H88a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm0-32H88a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm64,24H184V104a8,8,0,0,0-2.34-5.66l-40-40A8,8,0,0,0,136,56H88V40h76.69L200,75.31Z'
    },
    {
      fileName: 'assets.doc',
      fileSize: '0.99MB',
      iconClass: 'svg-secondary',
      svgPath: 'M245,110.64A16,16,0,0,0,232,104H216V88a16,16,0,0,0-16-16H130.67L102.94,51.2a16.14,16.14,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V208h0a8,8,0,0,0,8,8H211.1a8,8,0,0,0,7.59-5.47l28.49-85.47A16.05,16.05,0,0,0,245,110.64ZM93.34,64,123.2,86.4A8,8,0,0,0,128,88h72v16H69.77a16,16,0,0,0-15.18,10.94L40,158.7V64Z'
    },
    {
      fileName: 'image-1.png',
      fileSize: '245KB',
      iconClass: 'svg-success',
      svgPath: 'M216,40H72A16,16,0,0,0,56,56V72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V184h16a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM172,72a12,12,0,1,1-12,12A12,12,0,0,1,172,72Zm12,128H40V88H56v80a16,16,0,0,0,16,16H184Zm32-32H72V120.69l30.34-30.35a8,8,0,0,1,11.32,0L163.31,140,189,114.34a8,8,0,0,1,11.31,0L216,130.07V168Z'
    },
    {
      fileName: 'documentation.zip',
      fileSize: '2MB',
      iconClass: 'svg-info',
      svgPath: 'M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H92a4,4,0,0,0,4-4V208H88.27A8.17,8.17,0,0,1,80,200.53,8,8,0,0,1,88,192h8V176H88.27A8.17,8.17,0,0,1,80,168.53,8,8,0,0,1,88,160h8V144H88.27A8.17,8.17,0,0,1,80,136.53,8,8,0,0,1,88,128h8v-7.73a8.18,8.18,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v8h7.73a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53h-8v16h7.73a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53h-8v16h7.73a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53h-8v20a4,4,0,0,0,4,4h84a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44Z'
    },
    {
      fileName: 'landing.pdf',
      fileSize: '3.46MB',
      iconClass: 'svg-warning',
      svgPath: 'M44,120H212a4,4,0,0,0,4-4V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76A4,4,0,0,0,44,120ZM152,44l44,44H152Zm72,108.53a8.18,8.18,0,0,1-8.25,7.47H192v16h15.73a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53H192v15.73a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152.53ZM64,144H48a8,8,0,0,0-8,8v55.73A8.17,8.17,0,0,0,47.47,216,8,8,0,0,0,56,208v-8h7.4c15.24,0,28.14-11.92,28.59-27.15A28,28,0,0,0,64,144Zm-.35,40H56V160h8a12,12,0,0,1,12,13.16A12.25,12.25,0,0,1,63.65,184ZM128,144H112a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8h15.32c19.66,0,36.21-15.48,36.67-35.13A36,36,0,0,0,128,144Zm-.49,56H120V160h8a20,20,0,0,1,20,20.77C147.58,191.59,138.34,200,127.51,200Z'
    }
  ];
  
  
}
