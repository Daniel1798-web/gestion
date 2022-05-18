import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.scss']
})
export class HederComponent implements OnInit {

  constructor() { }
  activeMenu = false;
  loadStock = false;
  stocksGuardados:boolean = false;
  stocksGuardadosMovile:boolean = false;
  info:boolean = false;

  @Output() loadStockP= new EventEmitter<boolean>();
  @Output() activarGuardados = new EventEmitter<boolean>();
  @Output() activarGuardadosMobile = new EventEmitter<boolean>();
  @Output() activarInformacion = new EventEmitter<boolean>();


  ngOnInit(): void {
  }
  toggleMenu(){
    this.activeMenu = !this.activeMenu
  }

  guardados(){
    this.info = false
    this.stocksGuardados = !this.stocksGuardados
    this.activarGuardados.emit(this.stocksGuardados)
    console.log("activa")

  }

  guardadosMovile(){
    this.info = false
    this.stocksGuardadosMovile = !this.stocksGuardadosMovile
    this.activarGuardadosMobile.emit(this.stocksGuardadosMovile)
    console.log("activa")
  }

  informacion(){
    this.stocksGuardados = false
    this.info = !this.info
    this.activarInformacion.emit(this.info)
    console.log("activaInfo")

  }

  loadStockPage(){
    this.loadStockP.emit(this.loadStock)
    console.log("activaInfo")
  }
}
