import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  pieChartLabels: string[] = ['TESLA Model3', 'Audi A2', 'JEEP Wrangler'];

  public lineChartOptions:any = {
    legend : {
        labels : {
          fontColor : '#ffffff',
          size: "40px",
        }
    }
};
public pieChartOptions: any = {
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
  pieChartData: number[] = [20, 15, 10];
  pieChartType = 'pie';
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