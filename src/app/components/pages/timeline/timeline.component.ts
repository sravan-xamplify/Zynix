import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SpkDropdownsComponent } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns.component';

@Component({
    selector: 'app-timeline',
    imports: [SharedModule, SpkDropdownsComponent],
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {

}
