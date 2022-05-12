import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public loginService : LoginService) { }


  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  paswordError:boolean = false;
  datoUsuario=JSON.parse(localStorage.getItem("Usuario") || "");
  user:object =
  {
    email:"",
    password:''
  }

  ngOnInit(): void {
  }



  register() {
    this.user = { email: this.email, password: this.password };
    this.loginService.register(this.user).subscribe({
      next:(value)=>{
        this.loginService.setToken(value.token);
        console.log(value)
        console.log(this.user)
      },
      error:(err) =>{
        console.log(err)
      },


    })
  }

  probar(){
    this.user = { email: this.email, password: this.password };
    localStorage.setItem("Usuario",JSON.stringify(this.user))
  }

  alerta(){

    alert(this.datoUsuario)
  }
}
