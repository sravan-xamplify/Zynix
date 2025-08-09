import { HttpClientModule } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { NgbDateStruct, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
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
import { SharedModule } from '../../../../shared/shared.module';
import { FlatpickrModule } from 'angularx-flatpickr';
import { SpkFlatpickrComponent } from '../../../../@spk/spk-flatpickr/spk-flatpickr.component';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';
import { Editor, NgxEditorModule, Toolbar, Validators } from 'ngx-editor';
import jsonDoc from '../../../../shared/data/ngxeditor';

@Component({
    selector: 'app-create-project',
    imports: [SharedModule, NgSelectModule, FormsModule, ReactiveFormsModule, NgbModule, SpkNgSelectComponent,
        DropzoneModule, NgxEditorModule, HttpClientModule, FlatpickrModule, SpkFlatpickrComponent],
    providers: [{
            provide: DROPZONE_CONFIG,
            useValue: DEFAULT_DROPZONE_CONFIG
        }
    ],
    templateUrl: './create-project.component.html',
    styleUrl: './create-project.component.scss'
})
export class CreateProjectComponent {

  basicDemoValue = '2017-01-01';
  basicDemoValue1 = '2017-01-01';

  editordoc = jsonDoc;

  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form = new FormGroup({
    editorContent: new FormControl(
      { value: jsonDoc, disabled: false },
      Validators.required()
    ),
  });

  ngOnDestroy(): void {
    this.editor.destroy();
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
  
    public toggleType(): void {
      this.type = (this.type === 'component') ? 'directive' : 'component';
    }
    public toggleAutoReset(): void {
      this.config.autoReset = this.config.autoReset ? null : 5000;
      this.config.errorReset = this.config.errorReset ? null : 5000;
      this.config.cancelReset = this.config.cancelReset ? null : 5000;
    }
  
    public toggleMultiUpload(): void {
      this.config.maxFiles = this.config.maxFiles ? 0 : 1;
    }
  
    public toggleClickAction(): void {
      this.config.clickable = !this.config.clickable;
    }
  
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
  
 
  model!: NgbDateStruct;
  model1!: NgbDateStruct;

  // Select 
  selectedSimpleItem='Completed';
  simpleItems:any=[];
// Select 1
  selectedSimpleItem1='High';
  simpleItems1:any=[];


ngOnInit(): void {
  this.simpleItems=['Completed','Inprogress','OnHold'];
  this.simpleItems1=['High','Low','medium',];
  this.editor = new Editor();
}


files2: File[] = [];
  OnSelect2(event: any) {
    this.files2.push(...event.addedFiles);
  }

  OnRemove2(event: any) {
    this.files2.splice(this.files2.indexOf(event), 1);
  }
  tags=[
    {value:1,label:'Kiara advain'},
    {value:2,label:'Hercules Jhon'},
    {value:3,label:'Mayor Kim'},
    {value:4,label:'Alexa Biss'},
    {value:5,label:'Karley Dia'},
    {value:6,label:'Kim Jong'},
    {value:7,label:'Angelina May'},
    {value:8,label:'Elizabeth'},
    {value:9,label:'Phillip Jhon'},
    {value:10,label:'Alex Carey'},
  ]
  selectedTags=[4,7,9];
  selectedTags1=[{label:'Marketing',value:1},
                {label:'Sales',value:2},
                {label: 'Development',value:4},
                {label: 'Design', value:5},
                {label:'Research',value:6}
              ];

selected=[1,2,3,4,5,6]
}