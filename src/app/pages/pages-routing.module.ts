import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { OrderPanelComponent } from './components/order-panel/order-panel.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: 'page', component: PagesComponent, children: [
      { path: 'calculator', component: CalculatorComponent },
      { path: 'order-panel', component: OrderPanelComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class pagesRoutingModule { }