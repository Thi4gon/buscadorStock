import { Component } from '@angular/core';

import { ChartOptions} from 'chart.js';
import { take } from 'rxjs';


import { FinancaService } from '../services/financa.service';

@Component({
  selector: 'financas-app',
  templateUrl: './financas.component.html',
  styleUrls: ['./financas.component.scss']
})
export class FinancasComponent {

erro:any;
financialChartData:any;
timeFramesBCKUP:any;
openMarketValuesBCKUP:any;
public lineChartData: any[] = [];
public lineChartLabels: any[]=[];
public lineChartOptions: ChartOptions = {
  scales: {
    y: {
      ticks: {
        callback: function(value: number | string) {
          const valueExported = Number(value)
          return valueExported.toFixed(10);
        }
      }
    }
  },
  responsive: true
};
public lineChartLegend = true;
ligarCors= false;
erroSemTexto = false;
searching = false;

  constructor(public financaService: FinancaService){
    this.erro=undefined
  }

  getStockInfo(value:string){
    const valueApi = value.toUpperCase();
    this.clearVariables();
    if(this.searching){
      return
    }
    const haveData = this.checkIfHaveValue(valueApi)
    if(haveData){
      this.makeApiCall(valueApi);
    }

  }

  makeApiCall(valueApi:string){
    this.searching = true;
    this.financaService.buscarStock(valueApi).pipe(take(1)).subscribe(response=>{
      this.timeFramesBCKUP = response.timestamp;

       this.openMarketValuesBCKUP = response.indicators.quote[0].open;

      if(this.timeFramesBCKUP === undefined || this.openMarketValuesBCKUP === undefined) {
        this.searching = false;
         this.callError();
        }
      else {
      const reducedTimeFrames = this.timeFramesBCKUP.slice(0,30);
      this.openMarketValuesBCKUP.forEach((element:any) => {
        element = element?.toFixed(5)
      });
      const reducedOpenMarketValues = this.openMarketValuesBCKUP.slice(0,30);
      this.erro= false;
      this.ligarCors = false;
      this.lineChartData.push({data:reducedOpenMarketValues,label:valueApi})
      const dates = this.convertTimeframeToPtBr(reducedTimeFrames);
      this.lineChartLabels = dates
      this.searching = false;
      }
    },err=>{
      this.searching = false;
      if(err.status == 0){
        this.callLigarCors();
        return
      }
      this.callError();
    })
  }


  checkIfHaveValue(valueApi:string):boolean{
    if(valueApi.length > 0){
      this.erroSemTexto = false;
      return true;
    }
    this.erroSemTexto = true;
    return false;
  }

  clearVariables(){
    this.lineChartData = [];
    this.lineChartLabels = [];
    this.erro=undefined;
    this.erroSemTexto = false;
  }

  callLigarCors(){
    this.erro = false;
    this.ligarCors = true;
  }
  callError() {
    this.erro = true;
    this.ligarCors = false;

  }

  convertTimeframeToPtBr(timeframe:any) {
    return timeframe.map((timestamp:any) => {
      const date = new Date(timestamp * 1000);
      const options:any = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
      return `${date.toLocaleString('pt-BR', options)}`;
    });
  }

}
