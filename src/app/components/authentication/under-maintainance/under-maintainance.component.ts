
import { Component, Renderer2} from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ParticlesService } from '../../../shared/services/particles.service';

@Component({
    selector: 'app-under-maintainance',
    imports: [SharedModule, RouterModule],
    templateUrl: './under-maintainance.component.html',
    styleUrls: ['./under-maintainance.component.scss']
})

export class UnderMaintainanceComponent {
  constructor(private particlesService: ParticlesService, private renderer: Renderer2){
    document.body.classList.add('coming-soon-main');
    let html = document.querySelector('html');
    html?.removeAttribute("data-width");
  }
  ngOnDestroy(): void {
    document.body.classList.remove('coming-soon-main');
    this.particlesService.destroyParticles(this.containerId);
  }

  public days: any;
  public hours: any;
  public minutes: any;
  public seconds: any;

  ngOnInit(): void {
    const countDown = new Date('Dec 31, 2024 00:00:00').getTime();
    const time = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDown - now;
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(time);
      }
    }, 1000);
  }

  private containerId = 'particles-js';
  
 ngAfterViewInit(): void {
    this.particlesService.loadParticles(this.containerId);
  }
}
