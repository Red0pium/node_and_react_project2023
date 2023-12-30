import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import * as Highcharts from "highcharts";

@Component({
  selector: 'app-performance-pie-chart',
  templateUrl: './performance-pie-chart.component.html',
  styleUrl: './performance-pie-chart.component.css'
})
export class PerformancePieChartComponent implements OnInit{
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  ngood:number=0;
  navg:number=0;
  nbad:number=0;
  nans:number=0;
  constructor(private router: Router, private route: ActivatedRoute) {}
    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.ngood = Number(params.get('ngood'));
        this.navg = Number(params.get('navg'));
        this.nbad = Number(params.get('nbad'));
        this.nans=this.ngood+this.navg+this.nbad

        this.chartOptions = {
          chart: {
            type: 'pie'
          },
          title: {
            text: 'Performance Pie Chart'
          },
          series: [{
            type: 'pie',
            data: [
              { name: 'Good', y: this.ngood, color:'#7ed957' },
              { name: 'Average', y: this.navg, color:'#ffde59' },
              { name: 'Bad', y: this.nbad, color: '#ff5757' },
            ]
          }]
        };

      });
    }
}
