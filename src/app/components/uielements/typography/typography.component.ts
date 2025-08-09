import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import * as prismcodeData from '../../../shared/data/prismData/typography'
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
@Component({
    selector: 'app-typography',
    imports: [SharedModule, ShowcodeCardComponent],
    templateUrl: './typography.component.html',
    styleUrl: './typography.component.scss'
})

export class TypographyComponent {
  prismCode = prismcodeData;
}
