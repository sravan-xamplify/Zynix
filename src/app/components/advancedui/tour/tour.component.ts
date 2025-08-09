import { Component } from '@angular/core';

@Component({
    selector: 'app-tour',
    templateUrl: './tour.component.html',
    styleUrl: './tour.component.scss'
})
export class TourComponent {
  // Tour temporarily disabled due to Angular 20 peer deps. Keep UI rendering.
  ngOnInit(): void {}
}