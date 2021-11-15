import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'
import {NgDecisionrulesModule} from 'C:/Users/Daniel/Desktop/EppTecTest/node_modules/@decisionrules/ng-decisionrules';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgDecisionrulesModule.forRoot({
      auth: {token: 'XyS1Bp4hTh60Cjs96CEfXKIzhrUzyBrQkaabtynnZMbEjVhbXeX1TduSaITRo8_O', managementToken: 'OEoyAVumuD4pab-1oVaQzMMLNGeTKJqjzPXhkEC9TNjnORiSKdHcqiu_QJdDNgJL'}
      
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
