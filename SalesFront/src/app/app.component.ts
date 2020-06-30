import { Component, OnInit } from '@angular/core';
import { SignalRService } from './services/signal-r.service';
import * as Chart from 'chart.js';
import { SaleService } from './services/sale.service';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public chart = [];
  selectedValue = null;
 public  periods = [
    {id: 1, name: "United States"},
    {id: 2, name: "Australia"},
    {id: 3, name: "Canada"},
    {id: 4, name: "Brazil"},
    {id: 5, name: "England"}
  ];
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

       allDate.forEach(element => {
          dateaxes.push(moment(element).format('MM/DD/YYYY'));
        });

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: dateaxes,
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


  private subscribeToEvent(): void{
    this.signalRService.DataReceiver.subscribe((data:any) =>{
      
    })

  }
}
