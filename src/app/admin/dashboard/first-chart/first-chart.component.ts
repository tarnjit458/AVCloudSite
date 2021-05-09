import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-chart',
  templateUrl: './first-chart.component.html',
  styleUrls: ['./first-chart.component.scss']
})
export class FirstChartComponent implements OnInit {
  doughnutChartLabels: string[] = [
    'DAY Simulation Time',
    'NIGHT Simulation Time'
  ];

  public lineChartOptions:any = {
    legend : {
        labels : {
          fontColor : '#ffffff',
          size: "40px",
        }
    }
};

public firstChartOptions: any = {
  legend: {
    display: true,
    labels: {
      fontColor: 'white'
    }
  },
  
  tooltips: {
    callbacks: {
        title: function (tooltipItem, data) { return data.labels[tooltipItem[0].index]; },
        label: function (tooltipItem, data) {
            var amount = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
            return '$'+amount;
        },
    }
  },
}
  doughnutChartData = [178, 199.5];
  doughnutChartType = 'doughnut';

  constructor() {}

  ngOnInit() {}
  chartClicked(e: any): void {
    console.log(e.active);
    console.log(e.event);
  }

  chartHovered(e: any): void {
    console.log(e);
  }
}
