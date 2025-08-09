import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SpkNgSelectComponent } from '../../../@spk/spk-ng-select/spk-ng-select.component';

@Component({
    selector: 'app-profile-settings',
    imports: [SharedModule, NgbModule, RouterModule, NgSelectModule, FormsModule, ReactiveFormsModule, CommonModule, SpkNgSelectComponent,],
    templateUrl: './profile-settings.component.html',
    styleUrl: './profile-settings.component.scss'
})
export class ProfileSettingsComponent {

  isToggled1: boolean = false;
  isToggled2: boolean = false;
  isToggled3: boolean = false;
  isToggled4: boolean = false;
  toggle1() {
    this.isToggled1 = !this.isToggled1;
  }
  toggle2() {
    this.isToggled2 = !this.isToggled2;
  }
  toggle3() {
    this.isToggled3 = !this.isToggled3;
  }
  toggle4() {
    this.isToggled4 = !this.isToggled4;
  }
 
  Language=[
    {label:"Us English",value:1},
    {label:"Arabic",value:2},
    {label:"Korean",value:3},
  ]
}
