import Chart from 'chart.js/auto';
import { Component, OnInit } from '@angular/core';
// core components
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public chart: any;

  ngOnInit() {
    this.createChart();
  }

  createChart() {
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
        primary: '#5e72e4',
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
        ctx.fillStyle = options.color || '#fffbf5';
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
            label: 'Sales',
            data: ['467', '576', '572', '79', '92', '574', '573', '576', '200'],
            borderColor: '#228B22',
            borderWidth: 5,
            pointBackgroundColor: '#228B22',
            pointHitRadius: 20,
            pointBorderColor: 'transparent',
            tension: 0.4,
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
        responsive: true,
        scales: {
          y: {
            grid: {
              drawOnChartArea: false,
            },
          },
          x: {
            grid: {
              offset: true,

              drawOnChartArea: false,
            },
          },
        },
      },

      plugins: [plugin],
    });
  }
}
