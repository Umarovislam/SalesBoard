import { Injectable } from '@angular/core';
import { ChartModel } from '../Models/ChartModel';
import { EventEmitter } from 'events';
import * as signalR from '@aspnet/signalr';
import { HubConnection,
  HubConnectionBuilder,
  HubConnectionState,LogLevel} from '@aspnet/signalr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  
  DataReceived = new EventEmitter();  
  connectionEstablished = new EventEmitter();  
  
  constructor() {

   }


  public data: ChartModel[];
  private hubConnection : signalR.HubConnection;

  sendData(data: ChartModel) {  
    this.hubConnection.invoke('GetFiltered',data);  
  } 

  public  createConnection() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(environment.baseUrls.server + 'chart',{
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .configureLogging(LogLevel.Information)
      .build();
  }

  public startConnection(){
    if (this.hubConnection.state === HubConnectionState.Connected) {
      return;
    }
    this.hubConnection.start()
    .then(() => {
      console.log("Connection start");
    })
    .catch(err => console.log('Error while starting connection: ' + err))
  }


  public addTransferChartDataListener = () => {
    this.hubConnection.on('GetFiltered', (data: any) => {
      this.data = data;
      console.log(data);
    });
  }
}
