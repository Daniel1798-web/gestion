/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './components/stock/stock.component';
import {AppComponent} from './app.component'
import {HomeComponent} from './components/home/home.component'
import {InitComponent} from './components/init/init.component'

const routes: Routes = [
  { path: '', component: InitComponent },
  { path: 'home', component: HomeComponent},
  { path: 'stock', component: StockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
