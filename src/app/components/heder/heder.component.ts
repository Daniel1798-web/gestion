import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.scss']
})
export class HederComponent implements OnInit {

  constructor() { }
  activeMenu = false;
  stocksGuardados:boolean = false;
  info:boolean = false

  @Output() activarGuardados = new EventEmitter<boolean>();
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

  informacion(){
    this.stocksGuardados = false
    this.info = !this.info
    this.activarInformacion.emit(this.info)
    console.log("activaInfo")

  }
}
