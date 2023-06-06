import { tileLayer } from 'leaflet';
import Chart from 'chart.js/auto';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
// core components
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public chart: any;

  constructor(private service:ServicesService){

  }
  ngOnInit() {
    this.service.refresacarToken()
    this.createChart();
  }

  createChart() {
    var mode = 'light';
    var fonts = {
      base: 'Open Sans',
    };
    var colors = {
      gray: {
        100: '#f6f9fc',
        200: '#e9ecef',
        300: '#dee2e6',
        400: '#ced4da',
        500: '#adb5bd',
        600: '#8898aa',
        700: '#525f7f',
        800: '#32325d',
        900: '#212529',
      },
      theme: {
        default: '#172b4d',
        primary: '#228B22',
        secondary: '#f4f5f7',
        info: '#11cdef',
        success: '#2dce89',
        danger: '#f5365c',
        warning: '#fb6340',
      },
      black: '#12263F',
      white: '#FFFFFF',
      transparent: 'transparent',
    };
    const plugin = {
      id: 'customCanvasBackgroundColor',
      beforeDraw: (
        chart: { width?: any; height?: any; ctx?: any },
        args: any,
        options: { color: string }
      ) => {
        const { ctx } = chart;
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = options.color || '#172b4d';
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      },
    };
    this.chart = new Chart('MyChart', {
      type: 'line', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: [
          '2022-05-10',
          '2022-05-11',
          '2022-05-12',
          '2022-05-13',
          '2022-05-14',
          '2022-05-15',
          '2022-05-16',
          '2022-05-17',
          '2022-05-18',
        ],
        datasets: [
          {
            label: 'Perfomance',

            data: ['467', '576', '572', '79', '92', '574', '573', '576', '200'],
            // borderColor: '#228B22',
            // borderWidth: 5,
            // pointBackgroundColor: '#228B22',
            // pointHitRadius: 20,
            // pointBorderColor: 'transparent',
            // tension: 0.4,
          },
          // {
          //   label: 'Profit',
          //   data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
          //   borderColor: '#8f0065',
          //   borderWidth: 5,
          //   pointBackgroundColor: '#8f0065',
          //   pointBorderColor: 'transparent',
          //   pointHitRadius: 20,
          //   tension: 0.4,
          // },
        ],
      },

      options: {
        maintainAspectRatio: true,
        backgroundColor: 'red',

        font: {
          family: fonts.base,
          size: 13,
        },
        layout: {
          padding: 10,
        },
        elements: {
          point: {
            radius: 4,
            hitRadius: 20,

            backgroundColor: colors.theme['primary'],
          },
          line: {
            tension: 0.4,
            borderWidth: 4,
            borderColor: colors.theme['primary'],
            backgroundColor: colors.transparent,
            borderCapStyle: 'round',
          },
          arc: {
            backgroundColor: colors.theme['primary'],
            borderColor: mode == 'dark' ? colors.gray[800] : colors.white,
            borderWidth: 4,
          },
        },

        responsive: true,

        scales: {
          y: {
            offset: true,
            ticks: {
              color: 'white',
            },
            grid: {
              drawOnChartArea: false,
              tickLength: 10,
              tickWidth: 4,
              tickColor: 'yellow',
            },
          },

          x: {
            offset: true,
            ticks: {
              color: 'white',
            },
            grid: {
              tickColor: 'yellow',
              tickLength: 15,
              tickWidth: 3,
              drawOnChartArea: false,
            },
          },
        },
      },
      plugins: [plugin],
    });

    this.chart = new Chart('temperatura', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: [
          '2022-05-10',
          '2022-05-11',
          '2022-05-12',
          '2022-05-13',
          '2022-05-14',
          '2022-05-15',
          '2022-05-16',
          '2022-05-17',
          '2022-05-18',
        ],
        datasets: [
          {
            label: 'Perfomance',

            data: ['467', '576', '572', '79', '92', '574', '573', '576', '200'],
          },
        ],
      },

      options: {
        maintainAspectRatio: true,
        backgroundColor: 'red',

        font: {
          family: fonts.base,
          size: 13,
        },
        layout: {
          padding: 10,
        },
        elements: {
          point: {
            radius: 4,
            hitRadius: 20,

            backgroundColor: colors.theme['primary'],
          },
          line: {
            tension: 0.4,
            borderWidth: 4,
            borderColor: colors.theme['primary'],
            backgroundColor: colors.transparent,
            borderCapStyle: 'round',
          },
          arc: {
            backgroundColor: colors.theme['primary'],
            borderColor: mode == 'dark' ? colors.gray[800] : colors.white,
            borderWidth: 4,
          },
        },

        responsive: true,

        scales: {
          y: {
            offset: true,
            ticks: {
              color: 'white',
            },
            grid: {
              drawOnChartArea: false,
              tickLength: 10,
              tickWidth: 4,
              tickColor: 'yellow',
            },
          },

          x: {
            offset: true,
            ticks: {
              color: 'white',
            },
            grid: {
              tickColor: 'yellow',
              tickLength: 15,
              tickWidth: 3,
              drawOnChartArea: false,
            },
          },
        },
      },
      plugins: [plugin],
    });
  }
}
