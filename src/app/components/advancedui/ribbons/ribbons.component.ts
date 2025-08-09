import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { RibbonCardsComponent } from '../../../@spk/ribbon-cards/ribbon-cards.component';

@Component({
    selector: 'app-ribbons',
    imports: [SharedModule, RibbonCardsComponent],
    templateUrl: './ribbons.component.html',
    styleUrl: './ribbons.component.scss'
})
export class RibbonsComponent {

}
