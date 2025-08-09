import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbDateStruct, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowcodeCardComponent } from '../../../../shared/components/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../../shared/data/prismData/forms/inputs'

@Component({
    selector: 'app-inputs',
    imports: [SharedModule, NgbModule, ReactiveFormsModule, FormsModule, ShowcodeCardComponent],
    templateUrl: './inputs.component.html',
    styleUrl: './inputs.component.scss'
})
export class InputsComponent {
  model!: NgbDateStruct;
  timePicker: Date | null = null;
  dateTimeValue: Date = new Date();
  prismCode = prismCodeData;
}
