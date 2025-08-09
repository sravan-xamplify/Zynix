import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
    selector: 'app-terms-conditions',
    imports: [SharedModule],
    templateUrl: './terms-conditions.component.html',
    styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent {
  toggleClass = '';

  fullScreenToggle() {
    if (this.toggleClass === 'card-fullscreen') {
      this.toggleClass = '';
    } else {
      this.toggleClass = 'card-fullscreen';
    }
  }
  
}
