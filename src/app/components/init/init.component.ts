import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor() {}


  ngOnInit(): void {
  }

  login() {
    console.log(this.email);
    console.log(this.password);
  }
}
