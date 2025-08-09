import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import * as prismcodeData from '../../../shared/data/prismData/spinners'
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';


@Component({
    selector: 'app-spinners',
    imports: [SharedModule, CommonModule, ShowcodeCardComponent],
    templateUrl: './spinners.component.html',
    styleUrls: ['./spinners.component.scss']
})
export class SpinnersComponent {
  prismCode = prismcodeData;
  colors: string[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
  spinnerTypes: string[] = ['border', 'grow'];
}
