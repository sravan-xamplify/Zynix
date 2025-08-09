import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import { SpkButtongroupComponent } from '../../../@spk/reusable-ui-elements/spk-buttongroup/spk-buttongroup.component';
import * as PrismCode from '../../../shared/data/prismData/buttongroup';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';
@Component({
    selector: 'app-buttongroup',
    imports: [SharedModule, NgbModule, ShowcodeCardComponent, SpkButtongroupComponent, SpkDropdownsComponent],
    templateUrl: './buttongroup.component.html',
    styleUrls: ['./buttongroup.component.scss']
})
export class ButtongroupComponent {
  prsimCodeData: any = PrismCode;
  basicButtons=[
  {class:'btn-info btn-wave',icon:'bi bi-skip-backward'},
  {class:'btn-info btn-wave',icon:'bi bi-pause'},
  {class:'btn-info btn-wave',icon:'bi bi-skip-forward'}
  ]
}