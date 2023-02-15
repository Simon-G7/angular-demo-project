import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-base',
  templateUrl: './login-base.component.html',
  styleUrls: ['./login-base.component.css']
})
export class LoginBaseComponent {

  user: string='';
  pass: string='';

  login() {
    console.log(this.user);
    console.log(this.pass);
  }
  
}
