import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as Highcharts from "highcharts";
let PerformancePieChartComponent = class PerformancePieChartComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.Highcharts = Highcharts;
        this.chartOptions = {};
        this.ngood = 0;
        this.navg = 0;
        this.nbad = 0;
        this.nans = 0;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.ngood = Number(params.get('ngood'));
            this.navg = Number(params.get('navg'));
            this.nbad = Number(params.get('nbad'));
            this.nans = this.ngood + this.navg + this.nbad;
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
                            { name: 'Good', y: this.ngood, color: '#7ed957' },
                            { name: 'Average', y: this.navg, color: '#ffde59' },
                            { name: 'Bad', y: this.nbad, color: '#ff5757' },
                        ]
                    }]
            };
        });
    }
};
PerformancePieChartComponent = __decorate([
    Component({
        selector: 'app-performance-pie-chart',
        templateUrl: './performance-pie-chart.component.html',
        styleUrl: './performance-pie-chart.component.css'
    })
], PerformancePieChartComponent);
export { PerformancePieChartComponent };
//# sourceMappingURL=performance-pie-chart.component.js.map