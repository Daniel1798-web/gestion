import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service'

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  email:string = "";
  password:string = "";
  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(){
    const user = {email: this.email, password: this.password};
    this.loginService.login(user).subscribe( data => {
      console.log(data);
      this.loginService.setToken(data.token);

  });
}

}
