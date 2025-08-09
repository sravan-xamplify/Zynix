import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared.module';
import * as prismcodeData from '../../../shared/data/prismData/progress'
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import { SpkProgressComponent } from '../../../@spk/reusable-ui-elements/spk-progress/spk-progress.component';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-progress',
    imports: [SharedModule, NgbModule, ShowcodeCardComponent, SpkProgressComponent, CommonModule],
    templateUrl: './progress.component.html',
    styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
  prismCode = prismcodeData;

}
