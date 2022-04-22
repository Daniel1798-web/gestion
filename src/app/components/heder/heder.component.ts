import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.scss']
})
export class HederComponent implements OnInit {

  constructor() { }
  activeMenu = false;


  ngOnInit(): void {
  }
  toggleMenu(){
    this.activeMenu = !this.activeMenu
  }
}
