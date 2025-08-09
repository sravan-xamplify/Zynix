import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import * as PrismCode from '../../../shared/data/prismData/link-interaction'

@Component({
    selector: 'app-links-interactions',
    imports: [SharedModule, ShowcodeCardComponent],
    templateUrl: './links-interactions.component.html',
    styleUrl: './links-interactions.component.scss'
})
export class LinksInteractionsComponent {
  prsimCodeData: any = PrismCode;
}
