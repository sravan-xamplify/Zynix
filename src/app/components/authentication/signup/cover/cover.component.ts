
import { Component, ElementRef, Inject, Renderer2, DOCUMENT } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from '../../../../shared/shared.module';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router'; 
import { ParticlesService } from '../../../../shared/services/particles.service';

@Component({
    selector: 'app-cover',
    imports: [SharedModule, CarouselModule, NgbModule, RouterModule],
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


public showPassword: boolean = false;
public showPassword1: boolean = false;

toggleClass = 'ri-eye-off-line';
toggleClass1 = 'ri-eye-off-line';

public togglePassword() {
  this.showPassword = !this.showPassword;
  if (this.toggleClass === 'ri-eye-line') {
    this.toggleClass = 'ri-eye-off-line';
  } else {
    this.toggleClass = 'ri-eye-line';
  }
}
public togglePassword1() {
  this.showPassword1 = !this.showPassword1;
  if (this.toggleClass1 === 'ri-eye-line') {
    this.toggleClass1 = 'ri-eye-off-line';
  } else {
    this.toggleClass1 = 'ri-eye-line';
  }
}

private containerId = 'particles-js';
  
ngAfterViewInit(): void {
   this.particlesService.loadParticles(this.containerId);
 }
}
