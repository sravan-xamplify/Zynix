import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkApexchartsComponent } from '../../../../@spk/spk-apexcharts/apexcharts.component';

@Component({
    selector: 'app-radarcharts',
    imports: [SharedModule, SpkApexchartsComponent],
    templateUrl: './radarcharts.component.html',
    styleUrl: './radarcharts.component.scss'
})
export class RadarchartsComponent {
    public chartOptions: any;
    public chartOptions1: any;
    public chartOptions2: any;
  
    constructor() {
      this.chartOptions = {
        series: [
          {
            name: "Series 1",   
            data: [80, 50, 30, 40, 100, 20]
          }
        ],
        chart: {
          height: 320,
          type: "radar",
          zoom: {
            enabled: false,
          },
        },
        title: {
          text: "Basic Radar Chart",
          style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
        },
          
        },
        xaxis: {
          categories: ["January", "February", "March", "April", "May", "June"]
        }
      };
  
    this.chartOptions1= {
        series: [
          {
            name: "Series Blue",
            data: [80, 50, 30, 40, 100, 20]
          },
          {
            name: "Series Green",
            data: [20, 30, 40, 80, 20, 80]
          },
          {
            name: "Series Orange",
            data: [44, 76, 78, 13, 43, 10]
          }
        ],
        chart: {
          height: 320,
          type: "radar",
          zoom: {
            enabled: false,
          },
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          }
        },
        title: {
          text: "Radar Chart - Multi Series",
          style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
        },
        },
        stroke: {
          width: 0
        },
        fill: {
          opacity: 0.4
        },
        markers: {
          size: 0
        },
        xaxis: {
          categories: ["2011", "2012", "2013", "2014", "2015", "2016"]
        }
      };

      this.chartOptions2= {
        series: [
          {
            name: "Series 1",
            data: [20, 100, 40, 30, 50, 80, 33]
          }
        ],
        chart: {
          height: 320,
          type: "radar",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: true
        },
        plotOptions: {
          radar: {
            size: 80,
            polygons: {
              strokeColor: "#e9e9e9",
              fill: {
                // colors: ["#f8f8f8", "#fff"]
              }
            }
          }
        },
        title: {
          text: "Radar with Polygon Fill",
          style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
        },
        },
        colors: ['#23b7e5'],
        markers: {
          size: 4,
          colors: ["#fff"],
          strokeColors: ["#23b7e5"],
          strokeWidth: 2
        },
        tooltip: {
          y: {
            formatter: function(val: any) {
              return val;
            }
          }
        },
        xaxis: {
          categories: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ]
        },
        yaxis: {
          tickAmount: 7,
          labels: {
            formatter: function(val: any, i: number) {
              if (i % 2 === 0) {
                return val;
              } else {
                return "";
              }
            }
          }
        }
    }
  }
  ngOninit(){
    document.addEventListener('touchstart', function (e) {
      e.preventDefault();
    }, { passive: false });
  
    document.addEventListener('touchmove', function (e) {
      e.preventDefault();
    }, { passive: false });
  }
}
