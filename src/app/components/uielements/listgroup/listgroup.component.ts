import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import * as PrismCode from '../../../shared/data/prismData/listgroup'
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';

@Component({
    selector: 'app-listgroup',
    imports: [SharedModule, ShowcodeCardComponent],
    templateUrl: './listgroup.component.html',
    styleUrls: ['./listgroup.component.scss']
})
export class ListgroupComponent {
  prsimCodeData: any = PrismCode;

}

