import {Component, OnInit} from '@angular/core';
import {SalesService} from './services/sales.service';
import {Chart} from 'chart.js';
import { SignalRService } from './services/signal-r.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  chart = [];
  constructor(public signalRService: SignalRService,private  sales: SalesService) {
  }
  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addTransferChartDataListener();   
    //this.startHttpRequest();
    
    this.sales.getData()
      .subscribe( res => {
        console.log(res);
        const temp_max = res.map(res => res.TotalAmount);
        const AllDate = res.map(res => res.OrderDate);

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: AllDate,
            datasets: [
              {
                data: temp_max,
                borderColor: '#3cba9f',
                fill: true
              }
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        });
      });
  }
}
