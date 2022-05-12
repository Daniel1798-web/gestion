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


  @Output() activarGuardados = new EventEmitter<boolean>();


  ngOnInit(): void {
  }
  toggleMenu(){
    this.activeMenu = !this.activeMenu
  }

  guardados(){
    this.stocksGuardados = !this.stocksGuardados
    this.activarGuardados.emit(this.stocksGuardados)
    console.log("activa")
  }
}
