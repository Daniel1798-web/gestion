import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {objeto1} from '../../model/objeto1.model'

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})

export class StockComponent implements OnInit {

  constructor() {}


  agregarProducto: string | number = ""
   lista1:Array<objeto1> = [];

  agregarFecha: number  = 0;
  lista2:Array<objeto1> = [];
  checkk = false;

  @Output() carga = new EventEmitter();

  ngOnInit(): void {
  }

  AgregarProducto(){
      this.lista1.push({producto:this.agregarProducto, fecha:this.agregarFecha, eliminar:false})
      this.agregarProducto = "";
      console.log(this.lista1)
  }

  AgregarProducto2(){
    this.lista2.push({producto:this.agregarProducto, fecha:this.agregarFecha, eliminar:false})
    this.agregarProducto = "";
    console.log(this.lista2)
  }

  eliminar(){
    this.lista1 =  this.lista1.filter((elemento) => elemento.eliminar === false)
    console.log("holis")
    this.lista2 =  this.lista2.filter((elemento2) => elemento2.eliminar === false)

  }

  cosa(){
    this.carga.emit(this.lista1);
  }

}
