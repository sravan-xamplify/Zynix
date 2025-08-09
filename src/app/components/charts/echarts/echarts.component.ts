import { Component, NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import type { EChartsOption } from 'echarts';
import { SpkEchartsComponent } from '../../../@spk/spk-echarts/spk-echarts.component';
import { barBgChart, barChart, barChartNegativeChart, barLableChart, basicAreaChart, basicBarChart, bubbleChart, candlestickChart, doughutChart, echartHorizontalLineBarChart, funnelChart, graphChart, guageChart, horizontalBarChart, horizontalStackedBarChart, pieChart, radarChart, scatterChart, singleBarChart, smoothlinechart, stackedAreaChart, stackedlineChart, steplineChart, treemapChart, waterFallChart } from '../../../shared/data/echart.data';
@Component({
    selector: 'app-echarts',
    imports: [SharedModule, SpkEchartsComponent],
    templateUrl: './echarts.component.html',
    styleUrl: './echarts.component.scss'
})
export class EchartsComponent {
  //
  public echartHorizontalLineBarChart = echartHorizontalLineBarChart;
  public smoothlinechart = smoothlinechart;
  public basicAreaChart = basicAreaChart;
  public stackedlineChart = stackedlineChart;
  public stackedAreaChart = stackedAreaChart;
  public steplineChart = steplineChart;
  public basicBarChart = basicBarChart;
  public barBgChart = barBgChart;
  public singleBarChart = singleBarChart;
  public waterFallChart = waterFallChart;
  public barChartNegativeChart = barChartNegativeChart;
  public barLableChart = barLableChart;
  public horizontalBarChart = horizontalBarChart;
  public horizontalStackedBarChart = horizontalStackedBarChart;
  public pieChart = pieChart;
  public doughutChart = doughutChart;
  public scatterChart = scatterChart;
  public bubbleChart = bubbleChart;
  public radarChart = radarChart;
  public candlestickChart = candlestickChart;
  public treemapChart = treemapChart;
  public funnelChart = funnelChart;
  public guageChart = guageChart;
  public graphChart = graphChart;
  public barChart = barChart;
 
  options!: EChartsOption;
 
  ngOnInit(): void {
    this.options = {
      title: {
        top: 30,
        left: 'center',
        text: 'Daily Step Count',
      },
      tooltip: {},
      visualMap: {
        min: 0,
        max: 10000,
        type: 'piecewise',
        orient: 'horizontal',
        left: 'center',
        top: 65,
      },
      calendar: {
        top: 120,
        left: 30,
        right: 30,
        cellSize: ['auto', 13],
        range: '2016',
        itemStyle: {
          borderWidth: 0.5,
        },
        yearLabel: { show: false },
      },
      series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
      },
    };
  }
 

/////




 }
 