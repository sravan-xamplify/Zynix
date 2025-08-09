import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import * as prismcodeData from '../../../shared/data/prismData/borders'
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';

@Component({
    selector: 'app-borders',
    imports: [SharedModule, ShowcodeCardComponent],
    templateUrl: './borders.component.html',
    styleUrls: ['./borders.component.scss']
})
export class BordersComponent {
  prismCode = prismcodeData;
}
