import { ChangeDetectorRef, Component, NgZone, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { interval } from 'rxjs';
import { SharedModule } from '../../../../shared/shared.module';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { BounceRateData, ConversionRateData, ReviewChartData, SessionDurationData, TotalFollowersData } from '../../../../shared/data/dashboard_chartData/analyticscharts.data';
import { CommonModule } from '@angular/common';
import { SpkListviewCardComponent } from '../../../../@spk/reusable-apps/spk-listview-card/spk-listview-card.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkReusableTablesComponent } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables.component';
import { SpkFlatpickrComponent } from '../../../../@spk/spk-flatpickr/spk-flatpickr.component';
import { SpkDropdownsComponent } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';


@Component({
    selector: 'app-list-view',
  imports: [SharedModule, NgApexchartsModule, NgbModule, RouterModule, SpkFlatpickrComponent,
    FlatpickrModule, NgSelectModule, FormsModule, SpkNgSelectComponent, SpkDropdownsComponent,
    CommonModule, SpkListviewCardComponent, SpkReusableTablesComponent],
    providers: [FlatpickrDefaults],
    templateUrl: './list-view.component.html',
    styleUrl: './list-view.component.scss'
})
export class ListViewComponent {

  public chartOptions = TotalFollowersData;
  public chartOptions1 = BounceRateData;
  public chartOptions2 = ConversionRateData;
  public chartOptions3 = SessionDurationData;
  public chartOptions4 = ReviewChartData;
  

  constructor(private modalService: NgbModal,private cdr: ChangeDetectorRef,private zone: NgZone,private sanitizer : DomSanitizer) {
} 
  sanitizeIcon(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }
taskCards = [
  {
    title: "New Tasks",
    count: 41,
    total: "12,345",
    percentage: 18.21,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"></path></svg>`,
    badgeClass: "bg-primary",
    chartId: "newtaskschart",
    countClass: "text-success",
    changeDirection: "up",
    chartOptions: TotalFollowersData
  },
  {
    title: "Completed Tasks",
    count: 152,
    total: "12,345",
    percentage: -12.61,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"></path></svg>`,
    badgeClass: "bg-secondary",
    chartId: "completetaskschart",
    countClass: "text-danger",
    changeDirection: "down",
    chartOptions: BounceRateData
  },
  {
    title: "OnGoing Tasks",
    count: 35,
    total: "12,345",
    percentage: 11.81,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"></path></svg>`,
    badgeClass: "bg-success",
    chartId: "ongoingtaskschart",
    countClass: "text-success",
    changeDirection: "up",
    chartOptions: ConversionRateData
  },
  {
    title: "Pending Tasks",
    count: 98,
    total: "12,345",
    percentage: 13.65,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"></path></svg>`,
    badgeClass: "bg-info",
    chartId: "pendingtaskschart",
    countClass: "text-danger",
    changeDirection: "up",
    chartOptions: SessionDurationData
  },
  {
    title: "InReview Tasks",
    count: 120,
    total: "12,345",
    percentage: 4.21,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"></path></svg>`,
    badgeClass: "bg-warning",
    chartId: "reviewtaskschart",
    countClass: "text-success",
    changeDirection: "up",
    chartOptions: ReviewChartData
  }
];

creatModel(content: any) {
  this.modalService.open(content, { centered: true });
}

ngAfterViewInit() {
  // Delay the initialization of the counter to ensure the DOM is fully rendered
  this.zone.runOutsideAngular(() => {
    setTimeout(() => {
      this.initCounterUp();
    }, 1000);
  }); // Add a small delay to ensure all elements are rendered
}

initCounterUp() {
  const elements = document.querySelectorAll('.count-up');
  elements.forEach((el) => {
    const target = +el.getAttribute('data-count')!;
    const updateCount = () => {
      const current = +el.textContent!;
      const increment = Math.ceil(target / 100);
      if (current < target) {
        el.textContent = `${current + increment}`;
        setTimeout(updateCount, 41);
      } else {
        el.textContent = `${target}`;
      }
    };
    updateCount();
  });
}

deleteTask(index: number) {
  this.tasks.splice(index, 1);  // Removes the task at the given index
}

listColumns=[
  {header:"Task",field:"Task"},
  {header:"Task ID",field:"Task ID"},
  {header:"Priority",field:"Priority"},
  {header:"Assigned Date",field:"Assigned Date"},
  {header:"Due Date",field:"Due Date"},
  {header:"Status",field:"Status"},
  {header:"Assigned To",field:"Assigned To"},
  {header:"Action",field:"Action"},
]
Status=[
  {label:'New',value:4},
  {label:'Inprogress',value:1},
  {label:'On-hold',value:2},
  {label:'Completed',value:3},
]
Priority=[
  {label:'High',value:1},
  {label:'Medium',value:2},
  {label:'Low',value:3},
]
tags=[
  {value:1,label:'Angelina May'},
  {value:2,label:'Kiara advain'},
  {value:3,label:'Hercules Jhon'},
  {value:4,label:'Mayor Kim'},
]
selectedChoices = [];

tasks = [
  {
    taskName: "Implement a sticky navigation bar",
    taskID: "SPK - 01",
    priority: "Medium",
    startDate: "02-06-2024",
    endDate: "10-06-2024",
    status: "New",
    statusClass: "badge bg-primary-transparent text-primary",
    avatars: [
      { img: "./assets/images/faces/2.jpg" },
      { img: "./assets/images/faces/8.jpg" },
      { img: "./assets/images/faces/2.jpg" },
      { additional: "+2" }
    ],
    actions: ["edit", "delete"],
    checked: false
  },
  {
    taskName: "Integrate new UI components",
    taskID: "SPK - 04",
    priority: "High",
    startDate: "05-06-2024",
    endDate: "15-06-2024",
    status: "Inprogress",
    statusClass: "badge bg-secondary-transparent text-secondary",
    avatars: [
      { img: "./assets/images/faces/12.jpg" },
      { img: "./assets/images/faces/11.jpg" },
      { additional: "+4" }
    ],
    actions: ["edit", "delete"],
    checked: true
  },
  {
    taskName: "Optimize API endpoints for faster response times",
    taskID: "SPK - 11",
    priority: "Low",
    startDate: "12-06-2024",
    endDate: "16-06-2024",
    status: "Pending",
    statusClass: "badge bg-warning-transparent text-warning",
    avatars: [
      { img: "./assets/images/faces/5.jpg" },
      { img: "./assets/images/faces/9.jpg" },
      { img: "./assets/images/faces/13.jpg" },
      { additional: "+5" }
    ],
    actions: ["edit", "delete"],
    checked: false
  },
  {
    taskName: "Write unit tests for new JavaScript functions",
    taskID: "SPK - 24",
    priority: "Low",
    startDate: "08-06-2024",
    endDate: "17-06-2024",
    status: "Completed",
    statusClass: "badge bg-success-transparent text-success",
    avatars: [
      { img: "./assets/images/faces/2.jpg" },
      { img: "./assets/images/faces/8.jpg" },
      { img: "./assets/images/faces/2.jpg" },
      { additional: "+2" }
    ],
    actions: ["edit", "delete"],
    checked: false
  },
  {
    taskName: "Generate sales reports using ApexCharts",
    taskID: "SPK - 16",
    priority: "Medium",
    startDate: "03-06-2024",
    endDate: "08-06-2024",
    status: "Inprogress",
    statusClass: "badge bg-secondary-transparent text-secondary",
    avatars: [
      { img: "./assets/images/faces/10.jpg" },
      { img: "./assets/images/faces/15.jpg" },
      { additional: "+3" }
    ],
    actions: ["edit", "delete"],
    checked: true
  },
  {
    taskName: "Research free hosting options for a Blazor Server app",
    taskID: "SPK - 07",
    priority: "High",
    startDate: "12-06-2024",
    endDate: "25-06-2024",
    status: "New",
    statusClass: "badge bg-primary-transparent text-primary",
    avatars: [{ img: "./assets/images/faces/12.jpg" }],
    actions: ["edit", "delete"],
    checked: true
  },
  {
    taskName: "Updating Old UI",
    taskID: "SPK - 13",
    priority: "Low",
    startDate: "06-06-2024",
    endDate: "12-06-2024",
    status: "Completed",
    statusClass: "badge bg-success-transparent text-success",
    avatars: [
      { img: "./assets/images/faces/11.jpg" },
      { img: "./assets/images/faces/1.jpg" },
      { img: "./assets/images/faces/10.jpg" },
      { additional: "+1" }
    ],
    actions: ["edit", "delete"],
    checked: false
  },
  {
    taskName: "Create wireframes for the new dashboard layout",
    taskID: "SPK - 20",
    priority: "High",
    startDate: "14-06-2024",
    endDate: "19-06-2024",
    status: "Pending",
    statusClass: "badge bg-warning-transparent text-warning",
    avatars: [
      { img: "./assets/images/faces/3.jpg" },
      { img: "./assets/images/faces/9.jpg" },
      { additional: "+2" }
    ],
    actions: ["edit", "delete"],
    checked: true
  },
  {
    taskName: "Resolve outstanding tickets in the support queue",
    taskID: "SPK - 26",
    priority: "Medium",
    startDate: "11-06-2024",
    endDate: "18-06-2024",
    status: "Completed",
    statusClass: "badge bg-success-transparent text-success",
    avatars: [
      { img: "./assets/images/faces/5.jpg" },
      { img: "./assets/images/faces/14.jpg" },
      { img: "./assets/images/faces/12.jpg" },
      { img: "./assets/images/faces/3.jpg" },
      { additional: "+1" }
    ],
    actions: ["edit", "delete"],
    checked: false
  },
  {
    taskName: "Implement a dark mode toggle for the web application",
    taskID: "SPK - 32",
    priority: "Low",
    startDate: "03-06-2024",
    endDate: "09-06-2024",
    status: "Inprogress",
    statusClass: "badge bg-secondary-transparent text-secondary",
    avatars: [
      { img: "./assets/images/faces/12.jpg" },
      { img: "./assets/images/faces/6.jpg" },
      { additional: "+4" }
    ],
    actions: ["edit", "delete"],
    checked: false
  }
]


}
