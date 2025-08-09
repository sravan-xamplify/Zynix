import { Component, Input } from '@angular/core';

@Component({
    selector: 'spk-buttongroup',
    imports: [],
    templateUrl: './spk-buttongroup.component.html',
    styleUrl: './spk-buttongroup.component.scss'
})
export class SpkButtongroupComponent {
  @Input() mainClass?: string;
  @Input() ariaLabel?: string;
}
