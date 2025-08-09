import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { SharedModule } from '../../../../shared/shared.module';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import * as FilePond from 'filepond';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';

@Component({
    selector: 'app-create-nft',
    imports: [SharedModule, NgSelectModule, FormsModule, DropzoneModule, FilePondModule, SpkNgSelectComponent],
    templateUrl: './create-nft.component.html',
    styleUrl: './create-nft.component.scss'
})
export class CreateNftComponent {
  @ViewChild("myPond") myPond!: FilePondComponent;

  pondOptions: FilePond.FilePondOptions = {
    allowMultiple: true,
    labelIdle: "Png, Gif, MP4 (or) MP3, WEBP, 3D Model ",
    
  };
  singlepondOptions: FilePond.FilePondOptions = {
    allowMultiple: false,
    labelIdle: "Png, Gif, MP4 (or) MP3, WEBP, 3D Model ",
  };
  dropzoneOptions: FilePond.FilePondOptions = {
    allowMultiple: false,
    labelIdle: "Png, Gif, MP4 (or) MP3, WEBP, 3D Model ",
  };

  pondFiles: FilePond.FilePondOptions["files"] = [];

  pondHandleInit() {}

  pondHandleAddFile(event: any) { }

  pondHandleActivateFile(event: any) {}

  Royality=[
    {label:'Choose Royalities',value:1},
    {label:'Flat Royalty',value:2},
    {label:'Graduated Royalty',value:3},
    {label:'Tiered Royalty',value:4},
    {label:'Time-Limited Royalty',value:5},
    {label:'Customized Royalty',value:6},
  ]
}



