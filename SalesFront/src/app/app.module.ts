import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SalesService} from './services/sales.service';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SignalRService } from './services/signal-r.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SalesService,SignalRService],
  bootstrap: [AppComponent]
})
export class AppModule { }
