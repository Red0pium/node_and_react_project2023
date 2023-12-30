import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageComponent } from './manage/manage.component';
import { LearnComponent } from './learn/learn.component';
import { CreateComponent } from './create/create.component';
import { CreatePackageComponent } from './create-package/create-package.component';
import { ModidelPackageComponent } from './modidel-package/modidel-package.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManagePackagesComponent } from './manage-packages/manage-packages.component';
import { ManageFactsComponent } from './manage-facts/manage-facts.component';
import { ModidelFactComponent } from './modidel-fact/modidel-fact.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule } from "@angular/forms";
import { CreateFactComponent } from './create-fact/create-fact.component';
import { LearningComponent } from './learning/learning.component';
import { PerformancePieChartComponent } from './performance-pie-chart/performance-pie-chart.component';
import { HighchartsChartModule } from "highcharts-angular";

@NgModule({
  declarations: [
    ManageComponent,
    LearnComponent,
    CreateComponent,
    CreatePackageComponent,
    ModidelPackageComponent,
    ManagePackagesComponent,
    ManageFactsComponent,
    ModidelFactComponent,
    HomeComponent,
    CreateFactComponent,
    LearningComponent,
    PerformancePieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
