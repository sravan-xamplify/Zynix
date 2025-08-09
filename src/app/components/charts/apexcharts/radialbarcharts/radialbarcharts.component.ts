import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import * as chartData from '../../../../shared/data/apexchart.data'; 
import { SpkApexchartsComponent } from '../../../../@spk/spk-apexcharts/apexcharts.component';

@Component({
    selector: 'app-radialbarcharts',
    imports: [SharedModule, SpkApexchartsComponent],
    templateUrl: './radialbarcharts.component.html',
    styleUrl: './radialbarcharts.component.scss'
})

export class RadialbarchartsComponent {
    public BasicPieChartData: any = chartData.BasicPieChartData;
    public multipleradialBarChart: any = chartData.multipleradialBarChart;
    public CustomAngleChartData: any = chartData.CustomAngleChartData;
    public GradientCircleChartData: any = chartData.GradientCircleChartData;
    public CircleImageChartData: any = chartData.CircleImageChartData;
    public StrokedCircularGaugeData: any = chartData.StrokedCircularGaugeData;
    public SemiCircularGaugeData: any = chartData.SemiCircularGaugeData;
}
