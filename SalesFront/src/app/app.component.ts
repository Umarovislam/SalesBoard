import { Component, OnInit } from '@angular/core';
import { SignalRService } from './services/signal-r.service';
import * as Chart from 'chart.js';
import { SaleService } from './services/sale.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public chart = [];
  constructor(public signalRService: SignalRService,private  sales: SaleService) {}
  ngOnInit() {
    this.signalRService.createConnection();
    this.signalRService.startConnection();
    this.signalRService.addTransferChartDataListener();
    this.sales.getData()
      .subscribe( res => {
        console.log(res);
        const temp_max = res.map(res => res.totalAmount);
        const allDate =  res.map(res => res.orderDate);
        let dateaxes =[];

       /* allDate.forEach(element => {
          dateaxes.push(element.toLocaleTimeString('en',{year: 'numeric', month: 'short', day: 'numeric'}))
        });*/

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: allDate,
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
