import { Component, ViewChild } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlatpickrModule } from 'angularx-flatpickr';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import * as FilePond from 'filepond';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpkFlatpickrComponent } from '../../../../@spk/spk-flatpickr/spk-flatpickr.component';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';
import { Editor, NgxEditorModule, Toolbar, Validators } from 'ngx-editor';
import jsonDoc from '../../../../shared/data/ngxeditor';

@Component({
    selector: 'app-add-product',
    imports: [NgbNavModule, NgSelectModule, FlatpickrModule, FilePondModule, FormsModule, ReactiveFormsModule, NgxEditorModule, SpkFlatpickrComponent, SpkNgSelectComponent],
    templateUrl: './add-product.component.html',
    styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

  selected = ["Plain","Solid"]

  @ViewChild("myPond") myPond!: FilePondComponent;

  pondOptions: FilePond.FilePondOptions = {
    allowMultiple: true,
    labelIdle: "Drop files here to Upload...",
  };

  pondFiles: FilePond.FilePondOptions["files"] = [];

  pondHandleInit() {}

  pondHandleAddFile(event: any) { }

  pondHandleActivateFile(event: any) {}
  //select 1
selectedSimpleItem ='select' ;
simpleItems:any= [];
//select 2
selectedSimpleItem1 ='select' ;
simpleItems1:any= [];
//select 3
selectedSimpleItem2 ='select' ;
simpleItems2:any= [];
//select 4
selectedSimpleItem3 ='select' ;
simpleItems3:any= [];
//select 5
selectedSimpleItem4 =['select'] ;
simpleItems4:any= [];
//select 6
selectedSimpleItem5 ='select' ;
simpleItems5:any= [];
//select 7
selectedSimpleItem6 ='select' ;
simpleItems6:any= [];

selectedSimpleItem7 ='select' ;
simpleItems7:any= [];
ngOnInit() {
  this.editor = new Editor();
  this.simpleItems= ['Small','Medium','Extra Large','Large'];
  this.simpleItems1= ['Armani','Lacoste','Arrrabi','Mufti'];
  this.simpleItems2 = ['Jewellery','Ethnic & Festive','Grooming','Accesories','Footwear','Category','Clothing',];
  this.simpleItems3= ['Male','All','Female','Others'];
  this.simpleItems4= ['White','Red','Pink','Yellow','Orange','Green'];
  this.simpleItems5= ['Publish','Scheduled'];
  this.simpleItems6= ['In Stock','Out Of Stock','Select'];
  this.simpleItems7= ['Chudidar','Shirt','T-shirt','Frock','Night Pant','Kurties'];
}
Avaliability=[
  {label:"Select",value:1},
  {label:"In Stock",value:2},
  {label:"Out Of Stock",value:3},
]
Tags=[
  {label:"Relaxed",value:1},
  {label:"Solid",value:2},
  {label:"Washed",value:3},
  {label:"Plain",value:4},
]

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
}