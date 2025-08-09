import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import * as prismcodeData from '../../../shared/data/prismData/avatars';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
@Component({
    selector: 'app-avatars',
    imports: [SharedModule, ShowcodeCardComponent],
    templateUrl: './avatars.component.html',
    styleUrls: ['./avatars.component.scss']
})
export class AvatarsComponent {
  prismcode = prismcodeData;
}
