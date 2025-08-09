import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import * as chartData from '../../../../shared/data/apexchart.data'; 
import { SpkApexchartsComponent } from '../../../../@spk/spk-apexcharts/apexcharts.component';

@Component({
    selector: 'app-polarareacharts',
    imports: [SharedModule, SpkApexchartsComponent],
    templateUrl: './polarareacharts.component.html',
    styleUrl: './polarareacharts.component.scss'
})
export class PolarareachartsComponent {
    public PolarAreaChartData: any = chartData.PolarAreaChartData;
    public PolarAreaMonochromeChart: any = chartData.PolarAreaMonochromeChart;
    ngOninit(){
      document.addEventListener('touchstart', function (e) {
        e.preventDefault();
      }, { passive: false });
    
      document.addEventListener('touchmove', function (e) {
        e.preventDefault();
      }, { passive: false });
    }
}
