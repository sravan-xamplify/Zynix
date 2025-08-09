import { Component } from '@angular/core';
import { addSteps as defaultSteps, defaultStepOptions } from "./tour.data";
import { ShepherdService } from "angular-shepherd";

@Component({
    selector: 'app-tour',
    imports: [],
    templateUrl: './tour.component.html',
    styleUrl: './tour.component.scss'
})
export class TourComponent {
  constructor(private shepherdService: ShepherdService) {}

  ngOnInit(): void {
    this.setupTour();
    this.startTour(); // Automatically starts the tour when the page loads
  }

  setupTour(): void {
    const steps = [
      {
        id: 'step-1',
        attachTo: { element: '#step-1', on: 'bottom' as const },
        title: 'Welcome to Tour App',
        text: 'Embark on a journey of discovery with our exclusive tour experiences.',
        buttons: [
          {
            text: 'Next',
            action: () => this.shepherdService.next(),
          },
        ],
      },
      {
        id: 'step-2',
        attachTo: { element: '#step-2', on: 'bottom' as const },
        title: 'Explore Tour Options',
        text: 'Explore available tour packages, places, and destinations.',
        buttons: [
          {
            text: 'Back',
            action: () => this.shepherdService.back(),
          },
          {
            text: 'Next',
            action: () => this.shepherdService.next(),
          },
        ],
      },
      {
        id: 'step-3',
        attachTo: { element: '#step-3', on: 'bottom' as const },
        title: 'Traveler Information',
        text: 'Enter personal information for all travelers.',
        buttons: [
          {
            text: 'Back',
            action: () => this.shepherdService.back(),
          },
          {
            text: 'Next',
            action: () => this.shepherdService.next(),
          },
        ],
      },
      {
        id: 'step-4',
        attachTo: { element: '#step-4', on: 'bottom' as const },
        title: 'Review and Confirm',
        text: 'Check all details of the tour package, including dates and traveler information.',
        buttons: [
          {
            text: 'Back',
            action: () => this.shepherdService.back(),
          },
          {
            text: 'Next',
            action: () => this.shepherdService.next(),
          },
        ],
      },
      {
        id: 'step-5',
        attachTo: { element: '#step-5', on: 'bottom' as const },
        title: 'Booking Confirmation',
        text: 'Receive a booking confirmation, including tour details and reference number.',
        buttons: [
          {
            text: 'Back',
            action: () => this.shepherdService.back(),
          },
          {
            text: 'Next',
            action: () => this.shepherdService.next(),
          },
        ],
      },
      {
        id: 'step-6',
        attachTo: { element: '#step-6', on: 'bottom' as const },
        title: 'Enjoy Your Tour',
        text: 'Embark on your tour and enjoy the experience as planned.',
        buttons: [
          {
            text: 'Back',
            action: () => this.shepherdService.back(),
          },
          {
            text: 'Next',
            action: () => this.shepherdService.next(), // Moves to step-7
          },
        ],
      },
      {
        id: 'step-7',
        attachTo: { element: '#step-7', on: 'top' as const },
        title: 'Start Your Journey',
        text: 'Share the itinerary with participants and confirm bookings.',
        buttons: [
          {
            text: 'Back',
            action: () => this.shepherdService.back(),
          },
          {
            text: 'Finish',
            action: () => this.shepherdService.complete(), // Completes the tour
          },
        ],
      },
    ];

    this.shepherdService.defaultStepOptions = {
      classes: 'shepherd-theme-arrows',
      scrollTo: true,
      cancelIcon: {
        enabled: true
      }
    };

    this.shepherdService.modal = true;
    this.shepherdService.addSteps(steps);
  }

  startTour(): void {
    this.shepherdService.start();
  }
}