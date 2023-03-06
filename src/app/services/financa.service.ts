import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';


const yahooApi = '/v8/finance/chart';

@Injectable({ providedIn: 'root' })
export class FinancaService {

  constructor(private http: HttpClient) { }

  buscarStock(symbolStock: string) {
    return this.http.get<any>(environment.apiUrl +yahooApi+ '/' + symbolStock).pipe(map(response=>{
      return response.chart.result[0]
    }));
  }

}
