
import { Component, ElementRef, ViewChild, DOCUMENT } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ParticlesService } from '../../../../shared/services/particles.service';

@Component({
    selector: 'app-cover',
    imports: [SharedModule, NgbModule, RouterModule],
    templateUrl: './cover.component.html',
    styleUrls: ['./cover.component.scss']
})
export class CoverComponent {
  constructor(private particlesService: ParticlesService){
    document.body.classList.add('authenticationcover-background','bg-primary-transparent','position-relative');
    let html = document.querySelector('html');
    html?.removeAttribute("data-width");
  }
  ngOnDestroy(): void {
    document.body.classList.remove('authenticationcover-background','bg-primary-transparent','position-relative');   
    this.particlesService.destroyParticles(this.containerId);
  }

  @ViewChild('oneInput') oneInput!: ElementRef<HTMLInputElement>;
  @ViewChild('twoInput') twoInput!: ElementRef<HTMLInputElement>;
  @ViewChild('threeInput') threeInput!: ElementRef<HTMLInputElement>;
  @ViewChild('fourInput') fourInput!: ElementRef<HTMLInputElement>;

  // Automatically move the focus to the next input field after entering a digit
  onDigitInput(event: KeyboardEvent, nextInput: HTMLInputElement | null): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.value.length > 0) {
      // If a digit is entered, move the focus to the next input field
      if (nextInput) {
        nextInput.focus();
      }
    }
  }

  private containerId = 'particles-js';
  
  ngAfterViewInit(): void {
     this.particlesService.loadParticles(this.containerId);
   }
}
