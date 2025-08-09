import { Component } from '@angular/core';
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

  constructor(private particlesService: ParticlesService){
    document.body.classList.add('authentication-background');
    let html = document.querySelector('html');
    html?.removeAttribute("data-width");
  }
  ngOnDestroy(): void {
    document.body.classList.remove('authentication-background');   
    this.particlesService.destroyParticles(this.containerId);
  }


  
  public showPassword: boolean = false;
  toggleClass = 'ri-eye-off-line';

  public togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.toggleClass === 'ri-eye-line') {
      this.toggleClass = 'ri-eye-off-line';
    } else {
      this.toggleClass = 'ri-eye-line';
    }
  }
  private containerId = 'particles-js';
  
 ngAfterViewInit(): void {
    this.particlesService.loadParticles(this.containerId);
  }
}
