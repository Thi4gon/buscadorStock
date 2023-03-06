import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinancasComponent } from './components/financas.component';
import { NgChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
// import { ChartsModule } from 'ng2-charts';
import { FinancaService } from './services/financa.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,FinancasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgChartsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [FinancaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
