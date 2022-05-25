import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HederComponent } from './components/heder/heder.component';
import { StockComponent } from './components/stock/stock.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LogComponent } from './components/log/log.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatorPipe } from './pipes/paginator.pipe';

import  {NgbModule}  from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HederComponent,
    StockComponent,
    HomeComponent,
    RegisterComponent,
    LogComponent,
    PaginatorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    IvyCarouselModule,
    NgbModule,
    BrowserAnimationsModule

  ],
  providers: [ MatPaginatorIntl],
  bootstrap: [AppComponent]
})
export class AppModule { }
