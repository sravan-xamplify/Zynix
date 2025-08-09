
import { Component} from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ParticlesService } from '../../../shared/services/particles.service';

@Component({
    selector: 'app-commingsoon',
    imports: [SharedModule, RouterModule, RouterModule],
    templateUrl: './commingsoon.component.html',
    styleUrls: ['./commingsoon.component.scss']
})
export class CommingsoonComponent {

  public localdata = localStorage;
  
  public days: any;
  public hours: any;   
  public minutes: any;
  public seconds: any;
  square:any
  constructor(private particlesService: ParticlesService){
    document.body.classList.add('coming-soon-main');
    let html = document.querySelector('html');
    html?.removeAttribute("data-width");
  }

  private containerId = 'particles-js';
  
  ngOnDestroy(): void {
    document.body.classList.remove('coming-soon-main');   
    this.particlesService.destroyParticles(this.containerId);
  }

  ngOnInit(): void {
    const countDown = new Date('Dec 1, 2025 00:00:00').getTime();
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

  ngAfterViewInit(): void {
    this.particlesService.loadParticles(this.containerId);
  }

}

