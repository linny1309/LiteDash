import { CFilterMenuComponent } from './c-filter-menu/c-filter-menu.component';
import { CCjsChartComponent } from './c-cjs-chart/c-cjs-chart.component';
import { CKpiCardsComponent } from './c-kpi-cards/c-kpi-cards.component';
import { CNavMenuComponent } from './c-nav-menu/c-nav-menu.component';
import { COptionsMenuComponent } from './c-options-menu/c-options-menu.component';
import { PDashboardComponent } from './p-dashboard/p-dashboard.component';
import { PFbSignInComponent } from './p-fb-sign-in/p-fb-sign-in.component';
import { CTopBarComponent } from './c-top-bar/c-top-bar.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'c-cjs-chart', component: CCjsChartComponent },
  { path: 'c-filter-menu', component: CFilterMenuComponent },
  { path: 'c-kpi-cards', component: CKpiCardsComponent },
  { path: 'c-nav-menu', component: CNavMenuComponent },
  { path: 'c-top-bar', component: CTopBarComponent },
  { path: 'c-options-menu', component: COptionsMenuComponent },
  { path: 'p-dashboard', component: PDashboardComponent },
  { path: 'p-fb-sign-in', component: PFbSignInComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
