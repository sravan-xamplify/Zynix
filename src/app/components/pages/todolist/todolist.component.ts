import { Component, TemplateRef } from '@angular/core';
import flatpickr from 'flatpickr';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { MaterialModuleModule } from '../../../material-module/material-module.module';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDateStruct, NgbModal, NgbModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { SpkFlatpickrComponent } from '../../../@spk/spk-flatpickr/spk-flatpickr.component';
import { SpkNgSelectComponent } from '../../../@spk/spk-ng-select/spk-ng-select.component';
import { CommonModule } from '@angular/common';
import { SpkReusableTablesComponent } from '../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
    selector: 'app-todolist',
    imports: [SharedModule, NgSelectModule, MaterialModuleModule, FlatpickrModule, FormsModule, ReactiveFormsModule, SpkReusableTablesComponent, SpkDropdownsComponent,
        NgbModule, SpkNgSelectComponent, CommonModule, CdkDropList, CdkDrag, SpkFlatpickrComponent],
    providers: [FlatpickrDefaults],
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {
  closeResult!: string;
  model!: NgbDateStruct;

  constructor(private modalService: NgbModal) {}

  openWindowCustomClass(content: any) {
    this.modalService.open(content, {
      windowClass: 'dark-modal',
      centered: true,
    });
  }
  
  flatpickrOptions: any = {
    inline: true,
  };
  ngOnInit() {
    this.flatpickrOptions = {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
    };
  
    flatpickr('#inlinetime', this.flatpickrOptions);
  
      this.flatpickrOptions = {
        enableTime: true,
        dateFormat: 'Y-m-d H:i', // Specify the format you want
        defaultDate: '2023-11-07 14:30', // Set the default/preloaded time (adjust this to your desired time)
      };
  
      flatpickr('#pretime', this.flatpickrOptions);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todoData, event.previousIndex, event.currentIndex);
  }

  Status=[
    {label:'In progress',value:1},
    {label:'Not Started',value:2},
    {label:'Completed',value:3},
    {label:'Pending',value:4},
  ]
  Priority=[
    {label:'Critical',value:1},
    {label:'High',value:2},
    {label:'Medium',value:3},
    {label:'Low',value:4},
  
  ]
  tags=[
    {value:1,label:'Angelina May'},
    {value:2,label:'Kiara advain'},
    {value:3,label:'Hercules Jhon'},
    {value:4,label:'Mayor Kim'},
  ]
  selectedChoices = [1];
  cardsData = [
    {
      taskCount: '12/35 Task',
      taskType: 'Priority Tasks',
      percentage: '23%',
      badgeClass: 'bg-primary-transparent',
      svgClass: 'text-primary',
      borderClass: 'border-primary border-opacity-25',
      iconPath1:'M224,152v48a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V152Z',
      iconPath: 'M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v72H40V72Zm0,128H40V160H216v40Z',
    },
    {
      taskCount: '3/34 Task',
      taskType: 'Upcoming Task',
      percentage: '12.6%',
      badgeClass: 'bg-secondary-transparent',
      svgClass: 'text-secondary',
      borderClass: 'border-secondary border-opacity-25',
      iconPath1:'M192,64V75.64A8,8,0,0,1,188.82,82L128,128,67.2,82.4A8,8,0,0,1,64,76V64Z',
      iconPath: 'M184,24H72A16,16,0,0,0,56,40V76a16.07,16.07,0,0,0,6.4,12.8L114.67,128,62.4,167.2A16.07,16.07,0,0,0,56,180v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.36a16.09,16.09,0,0,0-6.35-12.77L141.27,128l52.38-39.59A16.09,16.09,0,0,0,200,75.64V40A16,16,0,0,0,184,24Zm0,16V56H72V40Zm0,176H72V180l56-42,56,42.35Zm-56-98L72,76V72H184v3.64Z',
    },
    {
      taskCount: '12/35',
      taskType: 'Overdue Task',
      percentage: '0.56%',
      badgeClass: 'bg-success-transparent',
      svgClass: 'text-success',
      borderClass: 'border-success border-opacity-25',
      iconPath1:'M208,88H152V32Z',
      iconPath: 'M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z',
    },
    {
      taskCount: '9/24',
      taskType: 'Pending Task',
      percentage: '12.4%',
      badgeClass: 'bg-info-transparent',
      svgClass: 'text-info',
      borderClass: 'border-info border-opacity-25',
      iconPath1:'M208,40H176V80a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V40.73a8,8,0,0,0-2.34,1.61L42.34,77.66A8,8,0,0,0,40,83.31V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48A8,8,0,0,0,208,40ZM128,184a32,32,0,1,1,32-32A32,32,0,0,1,128,184Z',
      iconPath: 'M208,32H83.31A15.86,15.86,0,0,0,72,36.69L36.69,72A15.86,15.86,0,0,0,32,83.31V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM88,48h80V80H88ZM208,208H48V83.31l24-24V80A16,16,0,0,0,88,96h80a16,16,0,0,0,16-16V48h24Zm-80-96a40,40,0,1,0,40,40A40,40,0,0,0,128,112Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,176Z',
    },
  ];
  todolistColumn=[
    {header:"",field:"",tableHeadColumn:"todolist-handle-drag"},
    {header:"Task Title",field:"Task Title",},
    {header:"Status",field:"Status"},
    {header:"Due Date",field:"Dead Line"},
    {header:"Priority",field:"Priority"},
    {header:"Progress",field:"Progress",tableHeadColumn:"todolist-progress"},
    {header:"Action",field:"Action",tableHeadColumn:"text-end"},
  ]
  todoData = [
    {
      checkboxState: false,
      task: 'Complete Project Proposal',
      status: {
        label: 'In Progress',
        badgeClass: 'bg-primary-transparent',
        textClass: 'text-primary',
      },
      dueDate: '2024-03-10',
      priority: {
        label: 'Medium',
        badgeClass: 'bg-primary',
      },
      progress: {
        percentage: 40,
        progressBarClass: 'bg-primary',
      },
      actions: [
        { label: 'Edit', icon: 'ri-edit-line' },
        { label: 'Delete', icon: 'ri-delete-bin-5-line' },
      ],
    },
    {
      checkboxState: true,
      task: 'Client Meeting',
      status: {
        label: 'Not Started',
        badgeClass: 'bg-success-transparent',
        textClass: 'text-success',
      },
      dueDate: '2024-03-15',
      priority: {
        label: 'High',
        badgeClass: 'bg-danger',
      },
      progress: {
        percentage: 70,
        progressBarClass: 'bg-secondary',
      },
      actions: [
        { label: 'Edit', icon: 'ri-edit-line' },
        { label: 'Delete', icon: 'ri-delete-bin-5-line' },
      ],
    },
    {
      checkboxState: false,
      task: 'Research Market Trends',
      status: {
        label: 'Completed',
        badgeClass: 'bg-warning-transparent',
        textClass: 'text-warning',
      },
      dueDate: '2024-03-12',
      priority: {
        label: 'Low',
        badgeClass: 'bg-success',
      },
      progress: {
        percentage: 62,
        progressBarClass: 'bg-success',
      },
      actions: [
        { label: 'Edit', icon: 'ri-edit-line' },
        { label: 'Delete', icon: 'ri-delete-bin-5-line' },
      ],
    },
    {
      checkboxState: false,
      task: 'Update Website Content',
      status: {
        label: 'Not Started',
        badgeClass: 'bg-success-transparent',
        textClass: 'text-success',
      },
      dueDate: '2024-03-18',
      priority: {
        label: 'Low',
        badgeClass: 'bg-success',
      },
      progress: {
        percentage: 85,
        progressBarClass: 'bg-orange',
      },
      actions: [
        { label: 'Edit', icon: 'ri-edit-line' },
        { label: 'Delete', icon: 'ri-delete-bin-5-line' },
      ],
    },
    {
      checkboxState: true,
      task: 'Team Meeting',
      status: {
        label: 'Pending',
        badgeClass: 'bg-secondary-transparent',
        textClass: 'text-secondary',
      },
      dueDate: '2024-03-22',
      priority: {
        label: 'Medium',
        badgeClass: 'bg-primary',
      },
      progress: {
        percentage: 55,
        progressBarClass: 'bg-info',
      },
      actions: [
        { label: 'Edit', icon: 'ri-edit-line' },
        { label: 'Delete', icon: 'ri-delete-bin-5-line' },
      ],
    },
    {
      checkboxState: true,
      task: 'Prepare Monthly Report',
      status: {
        label: 'Not Started',
        badgeClass: 'bg-success-transparent',
        textClass: 'text-success',
      },
      dueDate: '2024-03-28',
      priority: {
        label: 'High',
        badgeClass: 'bg-danger',
      },
      progress: {
        percentage: 96,
        progressBarClass: 'bg-warning',
      },
      actions: [
        { label: 'Edit', icon: 'ri-edit-line' },
        { label: 'Delete', icon: 'ri-delete-bin-5-line' },
      ],
    },
    {
      checkboxState: false,
      task: 'Review Project Milestones',
      status: {
        label: 'In Progress',
        badgeClass: 'bg-success-transparent',
        textClass: 'text-success',
      },
      dueDate: '2024-03-14',
      priority: {
        label: 'Low',
        badgeClass: 'bg-success',
      },
      progress: {
        percentage: 78,
        progressBarClass: 'bg-danger',
      },
      actions: [
        { label: 'Edit', icon: 'ri-edit-line' },
        { label: 'Delete', icon: 'ri-delete-bin-5-line' },
      ],
    },
    {
      checkboxState: true,
      task: 'Customer Feedback Analysis',
      status: {
        label: 'In Progress',
        badgeClass: 'bg-primary-transparent',
        textClass: 'text-primary',
      },
      dueDate: '2024-03-20',
      priority: {
        label: 'High',
        badgeClass: 'bg-danger',
      },
      progress: {
        percentage: 71,
        progressBarClass: 'bg-teal',
      },
      actions: [
        { label: 'Edit', icon: 'ri-edit-line' },
        { label: 'Delete', icon: 'ri-delete-bin-5-line' },
      ],
    },
    {
      checkboxState: false,
      task: 'Training Session',
      status: {
        label: 'Not Started',
        badgeClass: 'bg-success-transparent',
        textClass: 'text-success',
      },
      dueDate: '2024-03-24',
      priority: {
        label: 'Medium',
        badgeClass: 'bg-primary',
      },
      progress: {
        percentage: 60,
        progressBarClass: 'bg-pink',
      },
      actions: [
        { label: 'Edit', icon: 'ri-edit-line' },
        { label: 'Delete', icon: 'ri-delete-bin-5-line' },
      ],
    },
    {
      checkboxState: false,
      task: 'Finalize Budget',
      status: {
        label: 'In Progress',
        badgeClass: 'bg-primary-transparent',
        textClass: 'text-primary',
      },
      dueDate: '2024-03-25',
      priority: {
        label: 'Low',
        badgeClass: 'bg-success',
      },
      progress: {
        percentage: 80,
        progressBarClass: 'bg-dark',
      },
      actions: [
        { label: 'Edit', icon: 'ri-edit-line' },
        { label: 'Delete', icon: 'ri-delete-bin-5-line' },
      ],
    },
  ];
}

