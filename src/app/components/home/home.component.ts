import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { objeto1 } from '../../model/objeto1.model'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  identificador:number = 0;
  dia:number = 1;
  activar2 = false;

  listaStocks: Array<objeto1> = [
    {
      producto: "cosa",
      fecha: this.dia,
      eliminar: false,
      id: 0
    },
    {
      producto: "cosa",
      fecha: this.dia,
      eliminar: false,
      id: 1
    },
    {
      producto: "cosa",
      fecha: this.dia,
      eliminar: false,
      id: 2
    },
    {
      producto: "cosa",
      fecha: this.dia,
      eliminar: false,
      id: 3
    },
    {
      producto: "cosa",
      fecha: this.dia,
      eliminar: false,
      id: 4
    },
    {
      producto: "cosa",
      fecha: this.dia,
      eliminar: false,
      id: 5
    },
    {
      producto: "cosa",
      fecha: this.dia,
      eliminar: false,
      id: 6
    },
    {
      producto: "cosa",
      fecha: this.dia,
      eliminar: false,
      id: 7
    },
    {
      producto: "cosa",
      fecha: this.dia,
      eliminar: false,
      id: 8
    },
    {
      producto: "cosa",
      fecha: this.dia,
      eliminar: false,
      id: 9
    },
    {
      producto: "cosa",
      fecha: this.dia,
      eliminar: false,
      id: 10
    },

  ];
  stocksMostrar:any = []


  page_size:number = 5;
  page_number:number = 1;
  pageSizeOptions = [5,10,20,25]
  array:Array<any> = []



  constructor() { }
  stocks: objeto1 =
    {
      producto: "cosa",
      fecha: this.dia,
      eliminar: false,
      id: 0

    }



  carga1(product: Array<object>) {
    console.log(product)
  }
  ngOnInit(): void {
  }

  showStockGuardados(valor: boolean) {
    this.activar2 = valor
  }



  addStock() {
    this.listaStocks.push({producto: "cosa",fecha: this.dia,eliminar: false,id: this.identificador})
    this.identificador ++

}

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }


}
