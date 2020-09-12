import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CNavMenuComponent } from './c-nav-menu/c-nav-menu.component';
import { COptionsMenuComponent } from './c-options-menu/c-options-menu.component';
import { CFilterMenuComponent } from './c-filter-menu/c-filter-menu.component';
import { PDashboardComponent } from './p-dashboard/p-dashboard.component';
import { PFbSignInComponent } from './p-fb-sign-in/p-fb-sign-in.component';
import { CKpiCardsComponent } from './c-kpi-cards/c-kpi-cards.component';
import { CCjsChartComponent } from './c-cjs-chart/c-cjs-chart.component';
import { CTopBarComponent } from './c-top-bar/c-top-bar.component';
import { CCommentaryComponent } from './c-commentary/c-commentary.component';

@NgModule({
  declarations: [
    AppComponent,
    CNavMenuComponent,
    COptionsMenuComponent,
    CFilterMenuComponent,
    PDashboardComponent,
    PFbSignInComponent,
    CKpiCardsComponent,
    CCjsChartComponent,
    CTopBarComponent,
    CCommentaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
