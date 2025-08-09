import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import * as FilePond from 'filepond';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import { ShowcodeCardComponent } from '../../../../shared/components/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../../shared/data/prismData/forms/file_uploads'
@Component({
    selector: 'app-fileuploads',
    imports: [SharedModule, FilePondModule, ShowcodeCardComponent],
    templateUrl: './fileuploads.component.html',
    styleUrl: './fileuploads.component.scss'
})
export class FileuploadsComponent {
  prismCode = prismCodeData;
  @ViewChild("myPond") myPond!: FilePondComponent;

  pondOptions: FilePond.FilePondOptions = {
    allowMultiple: true,
    labelIdle: "Drop files here to Upload...",
  };
  singlepondOptions: FilePond.FilePondOptions = {
    allowMultiple: false,
    labelIdle: "Drop files here to Upload...",
  };
  dropzoneOptions: FilePond.FilePondOptions = {
    allowMultiple: false,
    labelIdle: "Drop files here to Upload...",
  };

  pondFiles: FilePond.FilePondOptions["files"] = [];

  pondHandleInit() {}

  pondHandleAddFile(event: any) { }

  pondHandleActivateFile(event: any) {}

}