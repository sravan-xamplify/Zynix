import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModuleModule } from '../../../../material-module/material-module.module';
import { SharedModule } from '../../../../shared/shared.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxColorsModule } from 'ngx-colors';
import * as prismCodeData from '../../../../shared/data/prismData/forms/color-pickers'
import { ShowcodeCardComponent } from '../../../../shared/components/showcode-card/showcode-card.component';
@Component({
    selector: 'app-colorpicker',
    imports: [SharedModule, MaterialModuleModule, FormsModule, ReactiveFormsModule, ColorPickerModule, NgxColorsModule, ShowcodeCardComponent],
    templateUrl: './colorpicker.component.html',
    styleUrl: './colorpicker.component.scss'
})
export class ColorpickerComponent {
  prismCode = prismCodeData;
  public color: string = '#2889e9';
  public color1: string = '#2889e9';
  public color2: string = '#e920e9';
   
  public onEventLog(event: string, data: any): void {
  }
 
  constructor() { }
  color3:string = '#EC407A';
  input1: string = "#00897B";

}