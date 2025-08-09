import { Component, Input } from '@angular/core';

@Component({
    selector: 'spk-bgcolor-card',
    imports: [],
    templateUrl: './spk-bgcolor-card.component.html',
    styleUrl: './spk-bgcolor-card.component.scss'
})
export class SpkBgcolorCardComponent {
  @Input() image:string = '';  
  @Input() status:string = ''; 
  @Input() BgColor:string = ''; 
  @Input() name:string = ''; 
  @Input() textColor:string = ''; 

}
