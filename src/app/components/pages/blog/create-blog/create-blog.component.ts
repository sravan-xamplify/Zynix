import { Component, ViewChild } from '@angular/core';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import * as FilePond from 'filepond';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import { SharedModule } from '../../../../shared/shared.module';
import { Time } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { Editor, NgxEditorModule, Toolbar, Validators } from 'ngx-editor';
import jsonDoc from '../../../../shared/data/ngxeditor';
import { SpkFlatpickrComponent } from '../../../../@spk/spk-flatpickr/spk-flatpickr.component';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';

@Component({
    selector: 'app-create-blog',
    imports: [SharedModule, NgxEditorModule, FormsModule, SpkFlatpickrComponent,
        ReactiveFormsModule, FlatpickrModule, FilePondModule, NgSelectModule, HttpClientModule, SpkNgSelectComponent],
    providers: [FlatpickrDefaults],
    templateUrl: './create-blog.component.html',
    styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent {
  BlogCategory=[
    {label:"Select Category",value:1},
    {label:"Nature",value:2},
    {label:"Sports",value:3},
    {label:"Food",value:4},
    {label:"Travel",value:5},
    {label:"Fashion",value:6},
    {label:"Beauty",value:7},
  ]
  selecteddate: Date | null = null;

  selectedTime: Time | null = null;

  //First Selelct
  selectedSimpleItem = 'Select Category';
  simpleItems: any = [];
  // second Select
  selectedSimpleItem1 = 'Select';
  simpleItems1: any = [];
  //Select 3
  selectedBlogs = ['Landscape', 'Top Blog'];
  Blogs = [
    { id: 1, name: 'Adventure' },
    { id: 2, name: 'Blogger' },
    { id: 1, name: 'Landscape' },
    { id: 2, name: 'Top Blog' },
  ];
  Publish=[
    {label:"Top Blog",value:2},
    {label:"Blogger",value:3},
    {label:"Adventure",value:4},
    {label:"Landscape",value:5},
  ]
  selectedTags=[2,5]
  ngOnInit(): void {
    this.simpleItems = ['Beauty', 'Fashion', 'Food', 'Nature', 'Sports'];
    this.simpleItems1 = ['Hold', 'Published'];
    this.editor = new Editor();
  }
  toggleDisabled() {
    const Blog: any = this.Blogs[1];
    Blog.disabled = !Blog.disabled;
  }
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
  // Angular Editor
  htmlContent = '';
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
}
