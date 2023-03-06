import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancasComponent } from './components/financas.component';

const routes: Routes = [
  { path: '',  redirectTo:'home' , pathMatch: 'full'},
  { path: 'home', component: FinancasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
