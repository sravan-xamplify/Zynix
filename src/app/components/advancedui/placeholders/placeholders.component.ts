import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/data/prismData/advancedUi/placeholder';
@Component({
    selector: 'app-placeholders',
    imports: [SharedModule, ShowcodeCardComponent],
    templateUrl: './placeholders.component.html',
    styleUrl: './placeholders.component.scss'
})
export class PlaceholdersComponent {
  prismCode = prismCodeData;
 
}
