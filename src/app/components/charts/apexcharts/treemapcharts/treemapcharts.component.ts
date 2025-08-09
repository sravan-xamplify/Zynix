import { Component, ViewChild } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';
import { SpkApexchartsComponent } from '../../../../@spk/spk-apexcharts/apexcharts.component';
@Component({
    selector: 'app-treemapcharts',
    imports: [SharedModule, SpkApexchartsComponent],
    templateUrl: './treemapcharts.component.html',
    styleUrl: './treemapcharts.component.scss'
})
export class TreemapchartsComponent {
  public chartOptions:any;
  public chartOptions1:any;
  public chartOptions2:any;
  public chartOptions3:any;
  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [
            {
              x: 'New Delhi',
              y: 218,
            },
            {
              x: 'Kolkata',
              y: 149,
            },
            {
              x: 'Mumbai',
              y: 184,
            },
            {
              x: 'Ahmedabad',
              y: 55,
            },
            {
              x: 'Bangaluru',
              y: 84,
            },
            {
              x: 'Pune',
              y: 31,
            },
            {
              x: 'Chennai',
              y: 70,
            },
            {
              x: 'Jaipur',
              y: 30,
            },
            {
              x: 'Surat',
              y: 44,
            },
            {
              x: 'Hyderabad',
              y: 68,
            },
            {
              x: 'Lucknow',
              y: 28,
            },
            {
              x: 'Indore',
              y: 19,
            },
            {
              x: 'Kanpur',
              y: 29,
            },
          ],
        },
      ],
      colors: ["#845adf"],

      chart: {
        height: 350,
        type: 'treemap',
      },
      title: {
        text: 'Basic Treemap',
        style: {
          fontSize: '13px',
          fontWeight: 'bold',
          color: '#8c9097'
      },
      },
    };
    this.chartOptions1 = {
      series: [
        {
          name: "Desktops",
          data: [
            {
              x: "ABC",
              y: 10
            },
            {
              x: "DEF",
              y: 60
            },
            {
              x: "XYZ",
              y: 41
            }
          ]
        },
        {
          name: "Mobile",
          data: [
            {
              x: "ABCD",
              y: 10
            },
            {
              x: "DEFG",
              y: 20
            },
            {
              x: "WXYZ",
              y: 51
            },
            {
              x: "PQR",
              y: 30
            },
            {
              x: "MNO",
              y: 20
            },
            {
              x: "CDE",
              y: 30
            }
          ]
        }
      ],

      legend: {
        show: false
      },
      chart: {
        height: 350,
        type: "treemap",
        zoom: {
          enabled: false,
        },
      },
      title: {
        text: "Multi-dimensional Treemap",
        align: "center",
        style: {
          fontSize: '13px',
          fontWeight: 'bold',
          color: '#8c9097'
      },
      }
    };
    this.chartOptions2= {
      series: [
        {
          data: [
            {
              x: "New Delhi",
              y: 218
            },
            {
              x: "Kolkata",
              y: 149
            },
            {
              x: "Mumbai",
              y: 184
            },
            {
              x: "Ahmedabad",
              y: 55
            },
            {
              x: "Bangaluru",
              y: 84
            },
            {
              x: "Pune",
              y: 31
            },
            {
              x: "Chennai",
              y: 70
            },
            {
              x: "Jaipur",
              y: 30
            },
            {
              x: "Surat",
              y: 44
            },
            {
              x: "Hyderabad",
              y: 68
            },
            {
              x: "Lucknow",
              y: 28
            },
            {
              x: "Indore",
              y: 19
            },
            {
              x: "Kanpur",
              y: 29
            }
          ]
        }
      ],
      legend: {
        show: false
      },
      chart: {
        height: 350,
        type: "treemap",
        zoom: {
          enabled: false,
        },
      },
      title: {
        text: "Distibuted Treemap (different color for each cell)",
        align: "center",
        style: {
          fontSize: '13px',
          fontWeight: 'bold',
          color: '#8c9097'
      },
      },
      colors: [
        "#3B93A5",
        "#F7B844",
        "#ADD8C7",
        "#EC3C65",
        "#CDD7B6",
        "#C1F666",
        "#D43F97",
        "#1E5D8C",
        "#421243",
        "#7F94B0",
        "#EF6537",
        "#C0ADDB"
      ],
      plotOptions: {
        treemap: {
          distributed: true,
          enableShades: false
        }
      }
    };
    this.chartOptions3= {
      series: [
        {
          data: [
            {
              x: "INTC",
              y: 1.2
            },
            {
              x: "GS",
              y: 0.4
            },
            {
              x: "CVX",
              y: -1.4
            },
            {
              x: "GE",
              y: 2.7
            },
            {
              x: "CAT",
              y: -0.3
            },
            {
              x: "RTX",
              y: 5.1
            },
            {
              x: "CSCO",
              y: -2.3
            },
            {
              x: "JNJ",
              y: 2.1
            },
            {
              x: "PG",
              y: 0.3
            },
            {
              x: "TRV",
              y: 0.12
            },
            {
              x: "MMM",
              y: -2.31
            },
            {
              x: "NKE",
              y: 3.98
            },
            {
              x: "IYT",
              y: 1.67
            }
          ]
        }
      ],
      legend: {
        show: false
      },
      chart: {
        height: 350,
        type: "treemap",
        zoom: {
          enabled: false,
        },
      },
      title: {
        text: "Treemap with color scale",
        style: {
          fontSize: '13px',
          fontWeight: 'bold',
          color: '#8c9097'
      },
      },
      dataLabels: {
        enabled: true,

        offsetY: -3
      },
      plotOptions: {
        treemap: {
          enableShades: true,
          shadeIntensity: 0.5,
          reverseNegativeShade: true,
          colorScale: {
            ranges: [
              {
                from: -6,
                to: 0,
                color: "#CD363A"
              },
              {
                from: 0.001,
                to: 6,
                color: "#52B12C"
              }
            ]
          }
        }
      }
    };
  }
  public generateData(count: number, yrange: { max: number; min: number }) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = 'w' + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y,
      });
      i++;
    }
    return series;
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
