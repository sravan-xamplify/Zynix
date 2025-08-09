import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared.module';
import { ShowcodeCardComponent } from '../../../shared/components/showcode-card/showcode-card.component';
import * as prismCodeData from '../../../shared/data/prismData/advancedUi/scrollspy'

@Component({
    selector: 'app-scrollspy',
    imports: [NgbModule, SharedModule, ShowcodeCardComponent],
    templateUrl: './scrollspy.component.html',
    styleUrl: './scrollspy.component.scss'
})
export class ScrollspyComponent {
  prismCode = prismCodeData;
}
