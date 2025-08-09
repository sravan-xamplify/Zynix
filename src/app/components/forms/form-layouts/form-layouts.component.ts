import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../shared/shared.module';
import { SpkNgSelectComponent } from '../../../@spk/spk-ng-select/spk-ng-select.component';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/data/prismData/forms/form_layouts'

@Component({
    selector: 'app-form-layouts',
    imports: [SharedModule, NgSelectModule, FormsModule, ReactiveFormsModule, SpkNgSelectComponent, ShowcodeCardComponent],
    templateUrl: './form-layouts.component.html',
    styleUrls: ['./form-layouts.component.scss']
})
export class FormLayoutsComponent {
  prismCode = prismCodeData;
  Preference=[
    {label:'Choose...',value:1},
    {label:'One',value:2},
    {label:'Two',value:3},
    {label:'Three',value:4},
  ]
 }
