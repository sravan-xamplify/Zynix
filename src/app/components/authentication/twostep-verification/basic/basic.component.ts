import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ParticlesService } from '../../../../shared/services/particles.service';
@Component({
    selector: 'app-basic',
    imports: [SharedModule, RouterModule],
    templateUrl: './basic.component.html',
    styleUrls: ['./basic.component.scss']
})
export class BasicComponent {
  @ViewChild('oneInput') oneInput!: ElementRef<HTMLInputElement>;
  @ViewChild('twoInput') twoInput!: ElementRef<HTMLInputElement>;
  @ViewChild('threeInput') threeInput!: ElementRef<HTMLInputElement>;
  @ViewChild('fourInput') fourInput!: ElementRef<HTMLInputElement>;

  
  onDigitInput(event: KeyboardEvent, nextInput: HTMLInputElement | null): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.value.length > 0) {
      // If a digit is entered, move the focus to the next input field
      if (nextInput) {
        nextInput.focus();
      }
    }
  }

  constructor(private particlesService: ParticlesService){
    document.body.classList.add('authentication-background');
    let html = document.querySelector('html');
    html?.removeAttribute("data-width");
  }
  ngOnDestroy(): void {
    document.body.classList.remove('authentication-background');   
    this.particlesService.destroyParticles(this.containerId);
  }

  private containerId = 'particles-js';
  
 ngAfterViewInit(): void {
    this.particlesService.loadParticles(this.containerId);
  }

 
}
