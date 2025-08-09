import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import * as prismCodeData from '../../../shared/data/prismData/forms/floating_labels'
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';

@Component({
    selector: 'app-floating-labels',
    imports: [SharedModule, NgSelectModule, MatFormFieldModule, MatSelectModule, ShowcodeCardComponent],
    templateUrl: './floating-labels.component.html',
    styleUrl: './floating-labels.component.scss'
})
export class FloatingLabelsComponent {
  prismCode = prismCodeData;
}
