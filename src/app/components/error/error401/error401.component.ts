import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { ParticlesService } from '../../../shared/services/particles.service';

@Component({
    selector: 'app-error401',
    imports: [SharedModule, RouterModule],
    templateUrl: './error401.component.html',
    styleUrls: ['./error401.component.scss']
})
export class Error401Component {
  constructor(private particlesService: ParticlesService) {
    let html = document.querySelector('html');
    html?.removeAttribute("data-width");
  }

  private containerId = 'particles-js';
  ngAfterViewInit(): void {
    this.particlesService.loadParticles(this.containerId);
  }
  ngOndestroy(){
    this.particlesService.destroyParticles(this.containerId);
    let html = document.querySelector('html');
    html?.removeAttribute("data-width");
  }

}
