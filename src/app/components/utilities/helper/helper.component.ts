import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
    selector: 'app-helper',
    imports: [SharedModule],
    templateUrl: './helper.component.html',
    styleUrl: './helper.component.scss'
})
export class HelperComponent {

}
