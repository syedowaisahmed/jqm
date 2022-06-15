import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-donation-graph',
  templateUrl: './donation-graph.component.html',
  styleUrls: ['./donation-graph.component.scss']
})
export class DonationGraphComponent implements OnInit {

  chartOption: EChartsOption;

  constructor() { }

  ngOnInit(): void {
    this.chartOption = {
      color: 'darkgreen',
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        type: 'value'
      },
      tooltip: {
        trigger: 'item'
      },
      grid: {
        left: '0',
        top: '0',
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130, 101, 200, 500, 900, 300],
          type: 'bar',
          showBackground: false,
          barWidth: '22px',
          itemStyle: {
            borderRadius: [4, 4, 0, 0]
          },
          backgroundStyle: {
            color: 'darkblue'
          }
        }
      ]
    };
  }

}
