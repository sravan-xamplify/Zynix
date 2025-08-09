import { Component, ViewChild } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import * as FilePond from 'filepond';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';
import { SpkFlatpickrComponent } from '../../../../@spk/spk-flatpickr/spk-flatpickr.component';
import { Editor, NgxEditorModule, Toolbar, Validators } from 'ngx-editor';
import jsonDoc from '../../../../shared/data/ngxeditor';

@Component({
    selector: 'app-edit-product',
    imports: [NgbNavModule, NgSelectModule, FilePondModule, FormsModule, ReactiveFormsModule, SpkNgSelectComponent, SpkFlatpickrComponent, NgxEditorModule],
    templateUrl: './edit-product.component.html',
    styleUrl: './edit-product.component.scss'
})
export class EditProductComponent {
  
  selected = ["Plain","Solid"]

  @ViewChild('myPond') myPond!: FilePondComponent;

  pondOptions: FilePond.FilePondOptions = {
    allowMultiple: true,
    labelIdle: 'Drop files here to Upload...',
  };
  singlepondOptions: FilePond.FilePondOptions = {
    allowMultiple: false,
    labelIdle: 'Drop files here to Upload...',
  };

  pondFiles: FilePond.FilePondOptions['files'] = [];

  pondHandleInit() {
  }

  pondHandleAddFile(event: any) {
  }

  pondHandleActivateFile(event: any) {
  }

  ngOninit(){
    this.editor = new Editor();
  }
  
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


  simpleItems7= ['Chudidar','Shirt','T-shirt','Frock','Night Pant','Kurties'];
  Categories=[
    {label:'Clothing',value:1},
    {label:'Footwear',value:2},
    {label:'Accesories',value:3},
    {label:'Grooming',value:4},
    {label:'Watches',value:5},
    {label:'Ethnic & Festive',value:6},
    {label:'Jewellery',value:7},
    {label:'Toys & Babycare',value:8},
    {label:'Festive Gifts',value:9},
    {label:'Kitchen',value:10},
    {label:'Dining',value:11},
    {label:'Home Decors',value:12},
    {label:'Stationery',value:13},
   ]
   Gender=[
    {label:'All',value:1},
    {label:'Male',value:2},
    {label:'Female',value:3},
    {label:'Others',value:4},
   ]
   Size=[
    {label:'Extra Small',value:1},
    {label:'Small',value:2},
    {label:'Medium',value:3},
    {label:'Large',value:4},
    {label:'Extra Large',value:5},
   ]
   Brand=[
    {label:'Armani',value:1},
    {label:'Lacoste',value:2},
    {label:'Puma',value:3},
    {label:'Spykar',value:4},
    {label:'Mufti',value:5},
    {label:'Home Town',value:4},
    {label:'Arrabi',value:5},
   ]
   Color= [
    {label:'White',value:1},
    {label:'Black',value:2},
    {label:'Red',value:3},
    {label:'Orange',value:4},
    {label:'Yellow',value:5},
    {label:'Green',value:6},
    {label:'Blue',value:7},
    {label:'Pink',value:8},
    {label:'Purple',value:9},
   ];
   published=[
    {label:'Select',value:1},
    {label:'Published',value:2},
    {label:'Scheduled',value:3},
   ]
   Tags=[
    {label:"Relaxed",value:1},
    {label:"Solid",value:2},
    {label:"Washed",value:3},
    {label:"Plain",value:4},
  
  ]
  Availability=[
    {label:"In Stock",value:1},
    {label:"Out Of Stock",value:2},
  
  ]
}
