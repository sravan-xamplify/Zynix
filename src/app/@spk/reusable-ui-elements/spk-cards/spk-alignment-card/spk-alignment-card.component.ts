import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'spk-alignment-card',
    imports: [CommonModule],
    templateUrl: './spk-alignment-card.component.html',
    styleUrl: './spk-alignment-card.component.scss'
})
export class SpkAlignmentCardComponent {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() buttonText: string = 'Go somewhere';
  @Input() imageUrl: string = '';
  @Input() alignmentClass: string = ''; // For text alignment
}
