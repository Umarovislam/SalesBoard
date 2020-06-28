import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { ChartModel } from '../Models/ChartModel';
import { EventEmitter } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  public data: ChartModel[];
  private hubConnection : signalR.HubConnection;
  private SignalRecived = new EventEmitter();

  public startConnection = ()=>{
    this.hubConnection = new signalR.HubConnectionBuilder().withUrl("https://localhost:5001/chart").build();

    this.hubConnection.start().then(() => console.log("Connection start")).catch(err => console.log('Error while starting connection: ' + err))
  }


  public addTransferChartDataListener = () => {
    this.hubConnection.on('transferchartdata', (data) => {
      this.data = data;
      console.log(data);
    });
  }
  constructor() { }
}
