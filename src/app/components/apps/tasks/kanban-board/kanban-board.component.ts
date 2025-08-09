import { Component, ViewChild } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropzoneComponent , DropzoneDirective,
  DropzoneConfigInterface, 
  DropzoneModule,
  DROPZONE_CONFIG} from 'ngx-dropzone-wrapper';
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  acceptedFiles: 'image/*',
  createImageThumbnails: true
};
import { MaterialModuleModule } from '../../../../material-module/material-module.module';
import { SharedModule } from '../../../../shared/shared.module';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { SortablejsModule} from '@maksim_m/ngx-sortablejs'; 
import { KanbanCardComponent } from '../../../../@spk/spk-kanban-card/kanban-card.component';
import { SpkKanbanDraggableCardsComponent } from '../../../../@spk/reusable-apps/spk-kanban-draggable-cards/spk-kanban-draggable-cards.component';
import { SpkFlatpickrComponent } from '../../../../@spk/spk-flatpickr/spk-flatpickr.component';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';
@Component({
    selector: 'app-kanban-board',
    imports: [SharedModule,
        SortablejsModule,
        NgSelectModule,
        MaterialModuleModule,
        OverlayscrollbarsModule,
        FormsModule,
        ReactiveFormsModule,
        DropzoneModule, SpkFlatpickrComponent,
        KanbanCardComponent,
        SpkKanbanDraggableCardsComponent, SpkNgSelectComponent,
        NgbModule],
    providers: [{
            provide: DROPZONE_CONFIG,
            useValue: DEFAULT_DROPZONE_CONFIG
        }],
    templateUrl: './kanban-board.component.html',
    styleUrl: './kanban-board.component.scss'
})
export class KanbanBoardComponent {
  closeResult!: string;
  selectedSimpleItem = 'Sort By';
  simpleItems: any = [];

  selectedSimpleItem1 = [1,2];

  selectedCars = [1];
  cars = [
    { value: 1, label: 'Admin' },
    { value: 2, label: 'Authentication' },
    { value: 3, label: 'Designing' },
    { value: 4, label: 'Development' },
    { value: 5, label: 'Finance' },
    { value: 5, label: 'Marketing' },
  ];
  simpleItems1 = [
    { value: 1, label:'Angelina May'},
    { value: 2, label: 'Hercules Jhon'},
    { value: 3, label: 'Kairar Advin'},
    { value: 4, label: 'Mayour Kim'},
  ];
  constructor(private modalService: NgbModal ) {
  }

  openWindowCustomClass(content: any) {
    this.modalService.open(content, { centered: true });
  }
  openWindowCustomClass1(content1: any) {
    this.modalService.open(content1, { centered: true });
  }
  ngOnInit(): void {
    this.simpleItems = ['Sort By', 'A-Z', 'Date Add', 'Newest', 'Type'];
  }

  public type: string = 'component';
  public disabled: boolean = false;
  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 100,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };

  @ViewChild(DropzoneComponent, { static: false }) componentRef?: DropzoneComponent;
  @ViewChild(DropzoneDirective, { static: false }) directiveRef?: DropzoneDirective;

  public resetDropzoneUploads(): void {
    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.reset();
    } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
      this.componentRef.directiveRef.reset();
    }
  }

  public onUploadInit(args: any): void { }

  public onUploadError(args: any): void { }

  public onUploadSuccess(args: any): void { }

  toggleDisabled() {
    const car: any = this.cars[1];
    car.disabled = !car.disabled;
  }

  normalList1 = []; 
  normalList2 = []; 
  normalList3 = []; 
  normalList4 = []; 
  normalList5 = []; 




  normalOptions: any = {
       animation: 150,
    group: 'shared',
    // Your sortable options
    onEnd: (event: any) => this.handleDragEnd(event)
  };
  normalOptions1: any = {
    animation: 150,
 group: 'shared',
 // Your sortable options
 onEnd: (event: any) => this.handleDragEnd1(event)
};
normalOptions2: any = {
animation: 150,
group: 'shared',
// Your sortable options
onEnd: (event: any) => this.handleDragEnd2(event)
};
normalOptions3: any = {
animation: 150,
group: 'shared',
// Your sortable options
onEnd: (event: any) => this.handleDragEnd3(event)
};
normalOptions4: any = {
animation: 150,
group: 'shared',
// Your sortable options
onEnd: (event: any) => this.handleDragEnd4(event)
};
 
ngAfterViewInit() {
// Optionally, check the initial state of cards here
this.handleDragEnd(event);
}
  handleDragEnd(event: any): void {
    const container = document.getElementById('new-tasks-draggable');
    const cardElements = document.querySelectorAll('#new-tasks-draggable .card');
    this.isHidden = cardElements.length === 0; // Hide button if no cards are left
    if (container) {
      // Check if there are no child cards left
      if (container.children.length === 0) {
        container.classList.add('task-Null');
      } else {
        container.classList.remove('task-Null');
      }
    }
  }
  handleDragEnd1(event: any): void {
    const container1 = document.getElementById('todo-tasks-draggable');
    const cardElements = document.querySelectorAll('#todo-tasks-draggable .card');
    this.isHidden = cardElements.length === 0; // Hide button if no cards are left
    if (container1) {
      // Check if there are no child cards left
      if (container1.children.length === 0) {
        container1.classList.add('task-Null');
      } else {
        container1.classList.remove('task-Null');
      }
    }
  }
  handleDragEnd2(event: any): void {
    const container2 = document.getElementById('inprogress-tasks-draggable');
    const cardElements = document.querySelectorAll('#inprogress-tasks-draggable .card');
    this.isHidden = cardElements.length === 0; // Hide button if no cards are left
    if (container2) {
      // Check if there are no child cards left
      if (container2.children.length === 0) {
        container2.classList.add('task-Null');
      } else {
        container2.classList.remove('task-Null');
      }
    }
  }
  isHidden:boolean=false;
handleDragEnd3(event: any): void {
const container3 = document.getElementById('inreview-tasks-draggable');
if (container3) {
  // Check if there are no child cards left
  if (container3.children.length === 0) {
    container3.classList.add('task-Null');
  } else {
    container3.classList.remove('task-Null');
  }
}
const cardElements = document.querySelectorAll('#inreview-tasks-draggable .card');
this.isHidden = cardElements.length === 0; // Hide button if no cards are left
}


handleDragEnd4(event: any): void {
const container4 = document.getElementById('completed-tasks-draggable');  
const cardElements = document.querySelectorAll('#completed-tasks-draggable .card');
this.isHidden = cardElements.length === 0; // Hide button if no cards are left
if (container4) {
  // Check if there are no child cards left
  if (container4.children.length === 0) {
    container4.classList.add('task-Null');
  } else {
    container4.classList.remove('task-Null');
  }
}
}

    Math = Math
    taskCards = [
      {
        title: "New Tasks",
        value: "32",
        percentageChange: "0.19",
        percentageColor:'success',
        iconClass: "briefcase",
        badgeClass: "primary",
        changeDirection: "up"  // Use 'down' for negative change
      },
      {
        title: "Todo Task",
        value: "16",
        percentageChange: "-1.23",
        percentageColor:'danger',
        iconClass: "briefcase",
        badgeClass: "secondary",
        changeDirection: "down"
      },
      {
        title: "Ongoing Task",
        value: "26",
        percentageChange: "0.54",
        percentageColor:'success',
        iconClass: "briefcase",
        badgeClass: "success",
        changeDirection: "up"
      },
      {
        title: "In Review Tasks",
        value: "52",
        percentageChange: "-0.16",
        percentageColor:'danger',
        iconClass: "briefcase",
        badgeClass: "info",
        changeDirection: "down"
      },
      {
        title: "Completed Tasks",
        value: "43",
        percentageChange: "0.29",
        percentageColor:'success',
        iconClass: "briefcase",
        badgeClass: "warning",
        changeDirection: "up"
      }
    ];

    NewTaskData = [
      {
        id: "#SPK123",
        badges: ["UI/UX"],
        title: "New Dashboard design.",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit, Nulla soluta consectetur sit amet elit dolor sit amet.",
        subTask: {
          completed: 2,
          total: 14,
          progress: 55
        },
        actions: [
          { label: "View", icon: "ri-eye-line" },
          { label: "Delete", icon: "ri-delete-bin-line" },
          { label: "Edit", icon: "ri-edit-line" }
        ],
        likes: 12,
        comments: 2,
        avatars: [
          "./assets/images/faces/11.jpg",
          "./assets/images/faces/12.jpg",
          "./assets/images/faces/7.jpg",
          "./assets/images/faces/8.jpg"
        ]
      },
      {
        id: "#SPK05",
        badges: ["Marketing", "Finance"],
        title: "Marketing next projects.",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta",
        subTask: {
          completed: 15,
          total: 23,
          progress: 35
        },
        actions: [
          { label: "View", icon: "ri-eye-line" },
          { label: "Delete", icon: "ri-delete-bin-line" },
          { label: "Edit", icon: "ri-edit-line" }
        ],
        likes: 17,
        comments: 9,
        avatars: [
          "./assets/images/faces/11.jpg",
          "./assets/images/faces/12.jpg"
        ]
      },
      {
        id: "#SPK - 08",
        badges: ["Designing"],
        title: "Design multi usage landing.",
        description: '',
        image: "./assets/images/media/media-36.jpg",
        subTask: {
          completed: 9,
          total: 12,
          progress: 35
        },
        actions: [
          { label: "View", icon: "ri-eye-line" },
          { label: "Delete", icon: "ri-delete-bin-line" },
          { label: "Edit", icon: "ri-edit-line" }
        ],
        likes: 11,
        comments: 15,
        avatars: [
          "./assets/images/faces/11.jpg",
          "./assets/images/faces/12.jpg",
          "./assets/images/faces/10.jpg"
        ]
      }
    ];

    ToDotask = [
      {
        id: '#SPK107',
        badges: ['Admin', 'Authentication'],
        title: 'Adding Authentication Pages.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta',
        subTask: {
          completed: 3,
          total: 45,
          progress: 35
        },
        actions: [
          { label: 'View', icon: 'ri-eye-line' },
          { label: 'Delete', icon: 'ri-delete-bin-line' },
          { label: 'Edit', icon: 'ri-edit-line' }
        ],
        likes: 18,
        comments: 5,
        avatars: [
          './assets/images/faces/11.jpg',
          './assets/images/faces/12.jpg',
          './assets/images/faces/10.jpg'
        ]
      },
      {
        id: '#SPK15',
        badges: ['Planning'],
        title: 'New Project Discussion.',
        image: './assets/images/media/media-41.jpg',
        description: '',
        subTask: {
          completed: 21,
          total: 45,
          progress: 35
        },
        actions: [
          { label: 'View', icon: 'ri-eye-line' },
          { label: 'Delete', icon: 'ri-delete-bin-line' },
          { label: 'Edit', icon: 'ri-edit-line' }
        ],
        likes: 4,
        comments: 14,
        avatars: [
          './assets/images/faces/11.jpg',
          './assets/images/faces/12.jpg'
        ]
      }
    ];

    OnGoingData = [
      {
        id: '#SPK13',
        badges: ['UI Design', 'Development'],
        title: 'Create Calendar & Mail pages.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta',
        subTask: { completed: 21, total: 45, progress: 35 },
        actions: [
          { label: 'View', icon: 'ri-eye-line' },
          { label: 'Delete', icon: 'ri-delete-bin-line' },
          { label: 'Edit', icon: 'ri-edit-line' }
        ],
        likes: 4,
        comments: 14,
        avatars: [
          './assets/images/faces/11.jpg',
          './assets/images/faces/12.jpg',
          './assets/images/faces/1.jpg',
          './assets/images/faces/2.jpg'
        ]
      },
      {
        id: '#SPK09',
        badges: ['Product'],
        title: 'Project design Figma,Sketch.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta',
        subTask: { completed: 11, total: 23, progress: 75 },
        actions: [
          { label: 'View', icon: 'ri-eye-line' },
          { label: 'Delete', icon: 'ri-delete-bin-line' },
          { label: 'Edit', icon: 'ri-edit-line' }
        ],
        likes: 24,
        comments: 7,
        avatars: [
          './assets/images/faces/1.jpg',
          './assets/images/faces/2.jpg'
        ]
      },
      {
        id: '#SPK145',
        badges: ['Product'],
        title: 'Project design Figma,Sketch.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta',
        subTask: { completed: 13, total: 34, progress: 26 },
        actions: [
          { label: 'View', icon: 'ri-eye-line' },
          { label: 'Delete', icon: 'ri-delete-bin-line' },
          { label: 'Edit', icon: 'ri-edit-line' }
        ],
        likes: 17,
        comments: 12,
        avatars: [
          './assets/images/faces/1.jpg',
          './assets/images/faces/9.jpg',
          './assets/images/faces/2.jpg'
        ]
      }
    ];

    ReviewTaskData = [
      {
        id: '#SPK15',
        badges: ['Review'],
        title: 'Design Architecture strategy.',
        description: '', // No description provided
        image: './assets/images/media/media-43.jpg',
        subTask: { completed: 15, total: 16, progress: 48 },
        actions: [
          { label: 'View', icon: 'ri-eye-line' },
          { label: 'Delete', icon: 'ri-delete-bin-line' },
          { label: 'Edit', icon: 'ri-edit-line' }
        ],
        likes: 17,
        comments: 12,
        avatars: [
          './assets/images/faces/1.jpg',
          './assets/images/faces/9.jpg',
          './assets/images/faces/2.jpg'
        ]
      },
      {
        id: '#SPK465',
        badges: ['Review'],
        title: 'Design Architecture strategy.',
        description: '',
        image: './assets/images/media/media-43.jpg',
        subTask: { completed: 11, total: 34, progress: 88 },
        actions: [
          { label: 'View', icon: 'ri-eye-line' },
          { label: 'Delete', icon: 'ri-delete-bin-line' },
          { label: 'Edit', icon: 'ri-edit-line' }
        ],
        likes: 19,
        comments: 6,
        avatars: [
          './assets/images/faces/1.jpg',
          './assets/images/faces/2.jpg'
        ]
      }
    ];
    CompletedData = [
      {
        id: '#SPK04',
        badges: ['UI/UX'],
        title: 'Sash project update.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta',
        image: '', // No image for this card
        subTask: { completed: 13, total: 16, progress: 56 },
        actions: [
          { label: 'View', icon: 'ri-eye-line' },
          { label: 'Delete', icon: 'ri-delete-bin-line' },
          { label: 'Edit', icon: 'ri-edit-line' }
        ],
        likes: 15,
        comments: 23,
        avatars: [
          './assets/images/faces/1.jpg',
          './assets/images/faces/7.jpg',
          './assets/images/faces/2.jpg'
        ]
      },
      {
        id: '#SPK10',
        badges: ['Development'],
        title: 'React JS new version update.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta',
        image: '', // No image for this card
        subTask: { completed: 16, total: 22, progress: 65 },
        actions: [
          { label: 'View', icon: 'ri-eye-line' },
          { label: 'Delete', icon: 'ri-delete-bin-line' },
          { label: 'Edit', icon: 'ri-edit-line' }
        ],
        likes: 24,
        comments: 6,
        avatars: [
          './assets/images/faces/7.jpg',
          './assets/images/faces/2.jpg'
        ]
      },
      {
        id: '#SPK16',
        badges: ['Discussion'],
        title: 'Project discussion with client.',
        description: '', // No description
        image: './assets/images/media/media-69.jpg',
        subTask: { completed: 18, total: 25, progress: 73 },
        actions: [
          { label: 'View', icon: 'ri-eye-line' },
          { label: 'Delete', icon: 'ri-delete-bin-line' },
          { label: 'Edit', icon: 'ri-edit-line' }
        ],
        likes: 16,
        comments: 25,
        avatars: [
          './assets/images/faces/7.jpg',
          './assets/images/faces/2.jpg',
          './assets/images/faces/8.jpg',
          './assets/images/faces/6.jpg'
        ]
      }
    ];
}
