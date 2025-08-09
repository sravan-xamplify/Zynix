import { Component } from '@angular/core';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared.module';
import { SortablejsModule} from '@maksim_m/ngx-sortablejs';
import { SpkBgcolorCardComponent } from '../../../@spk/reusable-ui-elements/spk-cards/spk-bgcolor-card/spk-bgcolor-card.component';
import { SpkBlockquoteCardComponent } from '../../../@spk/reusable-ui-elements/spk-cards/spk-blockquote-card/spk-blockquote-card.component';
import { SpkOverlayCardComponent } from '../../../@spk/reusable-ui-elements/spk-cards/spk-overlay-card/spk-overlay-card.component';
import { SpkCollapseCardComponent } from '../../../@spk/reusable-ui-elements/spk-cards/spk-collapse-card/spk-collapse-card.component';
import { SpkLinkCardComponent } from '../../../@spk/reusable-ui-elements/spk-link-card/spk-link-card.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-draggable-cards',
    imports: [SharedModule, CommonModule, SortablejsModule, SpkCollapseCardComponent, SpkBgcolorCardComponent, SpkOverlayCardComponent, SpkLinkCardComponent, SpkBlockquoteCardComponent],
    templateUrl: './draggable-cards.component.html',
    styleUrls: ['./draggable-cards.component.scss']
})
export class DraggableCardsComponent {
  isCollapsed = false;
  isCollapsed1 = false;
  closeResult: string | undefined;
  ngOnInit(): void {}
  fullScreenToggle() {
    document
      .querySelector('.fullscreentoggle')
      ?.classList.toggle('card-fullscreen');
  }

    // Define sortable options
    normalOptions = {
      animation: 150,
      group: 'shared',
      // Add other options here as needed
    };
    // Handle sort end event
    onSortEnd(event: any) { }
    normalList1:any
    normalList2:any
  
}
